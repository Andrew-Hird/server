var test = require('tape')
var routes = require('./routes')

test('routes.index responds with Hello World', function (t){
  var res = { send: send }

  routes.index(null, res)

  function send (msg) {
    t.equals(msg, '<h1>Hello World</h1>')
    t.end()
  }
})
