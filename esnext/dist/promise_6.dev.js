"use strict";

function funcionarOuNao(valor, chanceErro) {
  return new Promise(function (resolve, reject) {
    if (Math.random() < chanceErro) {
      reject('Ocorreu um erro!');
    } else {
      resolve(valor);
    }
  });
}

funcionarOuNao('Testando...', 0.9).then(console.log)["catch"](function (err) {
  return console.log("Error: ".concat(err));
});