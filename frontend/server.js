//References: https://git.cs.dal.ca/ampatel/csci5709-advweb/-/blob/main/server.js
//I have setup the server for front-end in one of my previous courses named csci5709, so I have referred the below code from that project.
const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8081;
const app = express();
app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
 return res.send('pong');
});
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port);
