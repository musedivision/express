var express = require("express")
var app = express()

// set the view engine
app.set('view engine', 'jade')

// set the views folder
app.set('views', process.argv[3])

app.use(function(req,res) {
    res.render('index', {date: new Date().toDateString()})
})

app.listen(process.argv[2])