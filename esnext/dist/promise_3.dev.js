"use strict";

function gerarNumerosEntre(min, max) {
  if (min > max) {
    var _ref = [min, max];
    max = _ref[0];
    min = _ref[1];
  }

  return new Promise(function (resolve) {
    var aleatorio = parseInt(Math.random() * (max - min + 1) + min);
    resolve(aleatorio);
  });
}

gerarNumerosEntre(1, 60).then(console.log);