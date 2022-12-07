const express = require('express');
const bodyParser = require('body-parser');
const route = require('./route/route.js');
const mongoose = require('mongoose');
const app = express();
const multer = require('multer');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(multer().any());

mongoose.connect('mongodb+srv://Anil_5520:oHvOf7lGe6Rfj20Z@cluster0.dqgltt5.mongodb.net/onlineExam_assignment', {
    useNewurlParser: true
})
    .then(() => console.log("mongoDb is connected"))
    .catch(err => console.log(err));

app.use('/', route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});