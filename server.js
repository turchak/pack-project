const express = require('express')
const app = express()
const mongoose = require('mongoose');
const fs = require('fs');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');


// Body Parser Middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(express.static('public'))

app.listen(process.env.PORT || 8080, () => console.log('all is ok'))
//added all .js files from folder /models
fs.readdirSync(__dirname + '/models').forEach(function (filename) {
    if (~filename.indexOf('.js')) require(__dirname + '/models/' + filename)
});

//connecting to DB mongo
mongoose.connect('mongodb://localhost/mongo');

//get query
app.get('/prices', function (req, res) {
    console.log("Hello");
    mongoose.model('prices').find(function (err, prices) {
        res.send(prices);
    });
});

app.post('/send', (req, res) => {
    console.log(req.body);
    let text = prepareMailBody(req.body);
    sendMail(text);
    res.send('ok')

});


function prepareMailBody(reqBody) {
    let emailbody = `имя ${reqBody.name} ${reqBody.city}`;
    return emailbody;
};


let transporter = nodemailer.createTransport({
    // service: 'mail.adm.tools',
    host: 'mail.adm.tools',
    port: 25,
    secure: false,
    auth: {
        user: 'pack@nice.com.ua',
        pass: 'KrvO83T86Dra'
    }
});



function sendMail(text) {
    let mailOptions = {
        from: 'pack@nice.com.ua',
        to: 'turchaksv@gmail.com',
        subject: 'Sending Email using Node.js',
        text: text
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}