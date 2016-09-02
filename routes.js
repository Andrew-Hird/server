module.exports = {
  home: home
}

function home (req, res) {
  res.sendFile(__dirname + '/index.html')
}
