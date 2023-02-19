const express = require('express');
const register = express.Router();
const userModel = require('../models/Registration')
const bcrypt = require('bcrypt');
const saltRounds = 10; 



register.post('/register', async(req, res)=>{
     const {username, password} = req.body;
     try {
        userDoc = await userModel.create({username,  
         password: await bcrypt.hash(password, saltRounds)})
        res.json(userDoc);
     } catch (error) {
        res.status(500).json(error)
     }
     

  

   
});






module.exports = register