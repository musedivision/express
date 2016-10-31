var http = require("http")
var express = require("express")
var logger = require("morgan")

var app = express()

app.use(logger())

app.all("*", function(req, res, next){
    res.writeHead(200, { "Content-Type": "text/plain" })
    next()
}) 

app.get('/', function(req, res) {
    res.end("HOMEPAGE")
})

app.get('/about', function(req, res) {
    res.end("abut")
})

app.listen(process.env.PORT, process.env.IP)
console.log("Server running at", process.env.IP)