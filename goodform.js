var express = require("express")
var bodyparser = require("body-parser")
var app = express()

function reverse(str) {
    return str.split('').reverse().join('')
}

app.use(bodyparser.urlencoded({extended: false}))

app.post('/form', function(req,res){
    res.end(reverse(req.body.str))
})

app.listen(process.argv[2])