"use strict";

function espararPor() {
  var tempo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2000;
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log('Executando promise...');
      resolve();
    }, tempo);
  });
}

console.time('promise');

function executar() {
  return regeneratorRuntime.async(function executar$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(espararPor(2000));

        case 2:
          console.log('Async/Await 1');
          _context.next = 5;
          return regeneratorRuntime.awrap(espararPor(200));

        case 5:
          console.log('Async/Await 2');
          _context.next = 8;
          return regeneratorRuntime.awrap(espararPor(700));

        case 8:
          console.log('Async/Await 3');
          _context.next = 11;
          return regeneratorRuntime.awrap(espararPor(500));

        case 11:
          console.log('Async/Await 4');
          console.timeEnd('promise');

        case 13:
        case "end":
          return _context.stop();
      }
    }
  });
}

executar();