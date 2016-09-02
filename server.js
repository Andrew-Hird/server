var express = require('express')
var routes = require('./routes')

var PORT = 3000
var app = express()

app.get('/home', routes.home)

app.listen(PORT, function () {
  console.log('The server is listening on port', PORT)
})
