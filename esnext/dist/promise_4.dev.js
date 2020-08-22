"use strict";

var fs = require('fs');

var path = require('path');

var caminho = path.join(__dirname, 'dados.txt');

function readFile(path) {
  return new Promise(function (resolve) {
    fs.readFile(caminho, function (err, conteudo) {
      resolve(conteudo.toString());
    });
  });
}

readFile(caminho).then(console.log);