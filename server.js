// jshint esversion :6

const express = require("express");
const bodyParser =  require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    console.log(req.body.num1, req.body.num2);
    var a = Number(req.body.num1);
    var b = Number(req.body.num2);
    var c = a * b;
    res.send("Result of calulcation is " + c);
});


app.listen(3000, function() {
    console.log("Server started");
});

