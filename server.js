var express = require('express')

var PORT = 3000
var app = express()

app.get('/', function (req,res) {
  res.send('<h1>Hello world</h1>')
})

app.listen(PORT, function () {
  console.log('The server is listening on port', PORT)
})
  
