// npm install express nodemon mongoose dotenv cors
const express = require('express')
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require("./models/SignUpModels")

// npm install bcrypt
const bcrypt = require('bcrypt')

const User = mongoose.model("user")

app.use(bodyParser.json())

const mongURI = "mongodb+srv://KaNology:KaNology@cluster0.m9ezz.mongodb.net/mytable?retryWrites=true&w=majority"

mongoose.connect(mongURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on("connected",() =>{
    console.log("Connect Success")
})

mongoose.connection.on("error",(err) =>{
    console.log("error",error)
})

app.post('/send-data',(req,res) =>{

    // const saltPassword = await bcrypt.genSalt(10) //generate salt for password
    // const securePassword = await bcrypt.hash(request.body.password, saltPassword) //more security for the password

    const user = new User({
        fullName: req.body.fullName,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    })
    user.save()
    .then(data =>{
        console.log(data)
        res.send(data)
    }).catch(err => {
        console.log(err)
    })
})

app.get('/', (req, res) => {
    User.find({})
    .then(data => {
        console.log(data)
        res.send(data)
    }).catch(err => {
        console.log(err)
    })
})

app.listen(3000, () => {
    console.log("Listening on 3000")
})


// npm run start: to run server