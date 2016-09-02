var test = require('tape')
var routes = require('./routes')

test('routes.webapps response includes a querystring parameter', function (t) {
  var res = { send: send }
  var req = {query: { name: 'Robin'} }

  routes.webapps(req, res)

  function send (msg) {
    t.equals(msg, 'Robin is building web apps')
    t.end()
  }
})
