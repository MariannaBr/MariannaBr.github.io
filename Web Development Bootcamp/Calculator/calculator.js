const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req,res) {
    var num1 = Number(req.body.num1); // body is the whole code, num1 and num2 are names of the inputs in HTML
    var num2 = Number(req.body.num2); // the input is string by default -> Number()
    var result = num1 + num2;
    res.send("The result is " + result);
})

app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmicalculator", function(req, res) {
    var height = Number(req.body.height);
    var weight = Number(req.body.weight);
    var result = (weight / height**2);
    result = result.toFixed(2);
    res.send("Your BMI is " + result);
})

app.listen(3000, function() {
    console.log("I'm listening");
});