"use strict";

var express = require('express');

var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.post('/usuarios', function (req, resp) {
  console.log(req.body);
  console.log(req);
  resp.send('<h1>Parabéns</h1>');
});
app.post('/usuarios/:id', function (req, resp) {
  console.log(req.params.id);
  console.log(req.body);
  resp.send('<h1>Alterado</h1>');
});
app.listen(3003);