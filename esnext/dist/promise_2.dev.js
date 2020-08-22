"use strict";

setTimeout(function () {
  console.log('Executando calllback...');
  setTimeout(function () {
    console.log('Executando calllback...');
    setTimeout(function () {
      console.log('Executando calllback...');
      setTimeout(function () {
        console.log('Executando calllback...');
      }, 2000);
    }, 2000);
  }, 2000);
}, 2000);

function espararPor() {
  var tempo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2000;
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log('Executando promise...');
      resolve();
    }, tempo);
  });
}

espararPor().then(function () {
  return espararPor();
}).then(function () {
  return espararPor();
}).then(function () {
  return espararPor();
}).then(espararPor);