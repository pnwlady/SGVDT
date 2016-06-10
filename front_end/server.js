const express = require('express');
var port = process.env.port

express().use(express.static(__dirname + '/build'))
.get('*', function(req, res) {
  res.redirect('/#' + req.url);
}).listen(port, () => console.log('server up on ' + port));
