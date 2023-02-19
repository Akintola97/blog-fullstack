const express = require('express');
const app = express();
const host = 'localhost'
const port = 5000;
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const register_router = require('./routes/register')
const login_router = require('./routes/login')
const cors = require('cors')
var bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')




app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cookieParser());
app.use('/uploads', express.static('uploads'))

mongoose.set('strictQuery', false)
mongoose.connect('mongodb+srv://blog:Myfullstackblog14@cluster0.hdjwdib.mongodb.net/?retryWrites=true&w=majority')
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});



app.listen(port, host, (req, res)=>{
console.log(`The server is running on ${host} ${port}`)
})
    



app.use('/', register_router)
app.use('/', login_router)

