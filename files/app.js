const express = require('express');

var os = require("os");
var hostname = os.hostname();

let app = express();

app.use(express.static("."));

app.get("/", (req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`You are connected at: ${hostname} \n`);
})

app.get("/html", function (req, res) {
    res.sendFile(__dirname + '/page.html');
});

app.get("/info", function (req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`/info. You are connected at: ${hostname} \n`);
});

app.listen("8080", ()=>{
    console.log("Server is listening on port 8080");
})
