var express = require('express')
var routes = require('./routes')

var PORT = 3000
var app = express()

app.get('/add', routes.add)
app.get('/answer', routes.answer)

app.listen(PORT, function () {
  console.log('The server is listening on port', PORT)
})
