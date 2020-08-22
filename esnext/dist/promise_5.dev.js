"use strict";

function gerarNumerosEntre(min, max, time) {
  if (min > max) {
    var _ref = [min, max];
    max = _ref[0];
    min = _ref[1];
  }

  return new Promise(function (resolve) {
    setTimeout(function () {
      var aleatorio = parseInt(Math.random() * (max - min + 1) + min);
      resolve(aleatorio);
    }, time);
  });
}

function gerarVariosNumeros() {
  return Promise.all([gerarNumerosEntre(1, 60, 1000), gerarNumerosEntre(1, 60, 500), gerarNumerosEntre(1, 60, 100), gerarNumerosEntre(1, 60, 10000), gerarNumerosEntre(1, 60, 700), gerarNumerosEntre(1, 60, 2000)]);
}

gerarVariosNumeros().then(console.log);
setInterval(function () {
  console.log(Math.random());
}, 100);