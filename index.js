
const express = require("express");
const app = express();



app.use(express.json());
app.use(express.urlencoded());

var server = app.listen(8080, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("car finder", host, port);
})

app.get('/', function (req, res) {
    console.log("this is the homepage");
    res.sendFile(__dirname + '/home.html');
})

app.get('/survey', function (req, res) {
    console.log("this is the survey page");
    res.sendFile(__dirname + '/survey.html');
})

app.post('/survey', function (req, res) {
    console.log("this is the survey data", req.body);
    if(req.body.question1 =="1") {
        res.redirect('/result1');
    
    } else if(req.body.question1 =="2") {
        res.redirect('/result2');
    } else if(req.body.question1 =="3") {
        res.redirect('/result3');
    } else if(req.body.question1 =="4") {
        res.redirect('/result4');
    } else if(req.body.question1 =="5") {
        res.redirect('/result5');
    }
    
   
})

app.get('/result1', function (req, res) {
    console.log("this is the results page");
    res.sendFile(__dirname + '/result1.html');
})

app.get('/result2', function (req, res) {
    console.log("this is the results page");
    res.sendFile(__dirname + '/result2.html');
})

app.get('/result3', function (req, res) {
    console.log("this is the results page");
    res.sendFile(__dirname + '/result3.html');
})

app.get('/result4', function (req, res) {
    console.log("this is the results page");
    res.sendFile(__dirname + '/result4.html');
})

app.get('/result5', function (req, res) {
    console.log("this is the results page");
    res.sendFile(__dirname + '/result5.html');
})