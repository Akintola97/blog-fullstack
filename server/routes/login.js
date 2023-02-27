const express = require('express');
const login = express.Router();
const bcrypt = require('bcrypt');
const userModel = require('../models/Registration')
const jwt = require('jsonwebtoken');
const secret = 'asdfjklasdf'
const cookieParser = require('cookie-parser');
const multer = require('multer')
const upload = multer({dest:'uploads/'})
const fs = require('fs')
const Post = require('../models/Post');




login.post('/login', async (req, res)=>{
    const {username, password} = req.body;
    const userDoc = await userModel.findOne({username});
    const passOk = await bcrypt.compare(password, userDoc.password)
    if(passOk) //This should be a boolean saying true. It proves the encrypted in the database password is correct 
    {
        //logged in

            jwt.sign ({username, id:userDoc._id}, secret,  {}, (err, token)=>{

                if (err) throw err;
             //   res.json(token) // This creates 'tokens' in the console's headers
              //  console.log(token)
              res.cookie('token', token).json(
                {id:userDoc._id,
                username,
                }
              ); //To send the token string that appears in the headers to the browser every time a request is sent, it needs to be as a cookie.
            });

            } else{
                res.status(400).json('wrong password')
    }
});

login.get('/profile', (req, res) =>{
    const {token} = req.cookies
    jwt.verify(token, secret, {}, (err, info) =>{
        if (err) throw err; 
        res.json(info);
    });
});


login.post('/logout', (req, res)=>{
    res.cookie('token', '').json('ok')
})


login.post('/post', upload.single('file'), async (req, res)=>{
    const {originalname, path} = req.file;
    const parts = originalname.split('.');
    const ext  = parts[parts.length - 1];
    const newPath = path+'.'+ext
     fs.renameSync(path, newPath)
    
     const {token} = req.cookies;
     jwt.verify(token, secret, {}, async (err, info) =>{
        if (err) throw err; 
        const {title, summary, content} = req.body;
        const postContent = await Post.create({
           title, 
           summary, 
           content, 
           cover: newPath, 
           author: info.id,
        });
        res.json(postContent);
    });
});

login.get('/post', async (req, res)=>{
    res.json(await Post.find().populate('author', ['username'])
    .sort({createdAt: -1})
    .limit(10)
    );
})

login.get('/post/:id', async(req, res)=>{
    const {id} = req.params;
    const postDoc = await Post.findById(id).populate('author', ['username']);
    res.json(postDoc);
})


login.put('/post',upload.single('file'), async (req,res) => {
    let newPath = null;
    if (req.file) {
      const {originalname,path} = req.file;
      const parts = originalname.split('.');
      const ext = parts[parts.length - 1];
      newPath = path+'.'+ext;
      fs.renameSync(path, newPath);
    }
  
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, async (err,info) => {
      if (err) throw err;
      const {id,title,summary,content} = req.body;
      const postDoc = await Post.findById(id);
      const isAuthor = JSON.stringify(postDoc.author) === JSON.stringify(info.id);
      if (!isAuthor) {
        return res.status(400).json('you are not the author');
      }
      await postDoc.updateOne({
        title,
        summary,
        content,
        cover: newPath ? newPath : postDoc.cover,
      });
  
      res.json(postDoc);
    });
});

login.delete('/post/:id', async (req, res)=>{
  const {id} = req.body;
  await Post.findByIdAndDelete(id);
  res.json('Deleted');
  console.log(id)
})






module.exports = login;