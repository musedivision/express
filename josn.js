var express = require("express")
var fs = require("fs")
var bl = require("bl")
var app = express()

var file = process.argv[3]

app.get('/books', function(req,res){
    var object = {}
    fs.readFile(file, function(err, data){
        if(err){console.error(err)}
        
        object = data.toString()
        res.json(JSON.parse(object))
    })
    
    
})

app.listen(process.argv[2])

// OFFICIAL SOLUTION
 app.get('/books', function(req, res){
      var filename = process.argv[3]
      fs.readFile(filename, function(e, data) {
        if (e) return res.send(500)
        try {
          books = JSON.parse(data)
        } catch (e) {
          res.send(500)
        }
        res.json(books)
      })
    })
    
    app.listen(process.argv[2])
