var express = require("express")
var stylus = require("stylus")
var fs = require("fs")
var app = express()

app.use(stylus.middleware(__dirname + '/stylus'))

app.use(express.static(__dirname + '/stylus'))


app.listen(process.argv[2])