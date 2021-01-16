const express = require('express');
const mongoose = require('mongoose');
const app = express();
// require('dotenv/config');

const postsRoute = require('./routes/posts')

app.get('/', (req, res) => {
    res.send("we are on home!");
})

app.get('/posts', (req, res) => {
    res.send("We are on posts!")
})

// middleware
app.use('/posts', () => {
    console.log("this is a middleware running");
});

// process.env.DB_CONNECTION, 
mongoose.connect( 'mongodb+srv://mikrokosmos:WWP6happytanswans@cluster0.qibug.mongodb.net/Notifly?retryWrites=true&w=majority',
{useNewUrlParser: true},  () => {
    console.log("connected to database");
})

// Routes


app.listen(3000);