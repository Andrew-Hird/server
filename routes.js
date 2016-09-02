module.exports = {
  webapps: webapps
}

function webapps (req,res) {
  res.send(req.query.name + ' is building web apps')
}
