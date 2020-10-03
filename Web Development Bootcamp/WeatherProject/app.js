const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res) {
    const query = req.body.cityName;
    const apiKey = "fa4a139770c7e3eff470875719cbaff4";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&units=" + unit + "&appid=" + apiKey;

    https.get(url, function(response) {
        response.on("data", function(data) {
            const weatherData = JSON.parse(data); // turns hexa code to JSON
            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const iconURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            res.write("<h1>The temperature in " + query + " is " + temp + " degrees.</h1>");
            res.write("<p>The weather is currently " + description + ".</p>");
            res.write("<img src=" + iconURL + ">");
            res.send();
        })
    })
})

app.listen(3000, function() {
    console.log("I'm listening")
})


// const object = {
//     name: "Marianna",
//     surname: "Brezinova"
// }
// console.log(JSON.stringify(object)); // makes the opposite, without spaces and new lines