module.exports = {
  add: add,
  answer: answer
}

function add (req, res) {
  req.app.locals.op1 = parseInt(req.query.op1, 10)
  req.app.locals.op2 = parseInt(req.query.op2, 10)
  res.send('Got it. <a href="/answer">Is this the answer?</a>')
}

function answer (req, res) {
  var result = req.app.locals.op1 + req.app.locals.op2
  res.send('I hope you are expecting ' + result)
}
