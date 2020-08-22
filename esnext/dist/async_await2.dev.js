"use strict";

function gerarNumerosEntre(min, max, numerosProibidos) {
  if (min > max) {
    var _ref = [min, max];
    max = _ref[0];
    min = _ref[1];
  }

  return new Promise(function (resolve, reject) {
    var aleatorio = parseInt(Math.random() * (max - min + 1) + min);

    if (numerosProibidos.includes(aleatorio)) {
      reject('Número repetido');
    } else {
      resolve(aleatorio);
    }
  });
}

function gerarMegaSena(qtdeNumeros) {
  var tentativas,
      numeros,
      _iteratorNormalCompletion,
      _didIteratorError,
      _iteratorError,
      _iterator,
      _step,
      _,
      _args = arguments;

  return regeneratorRuntime.async(function gerarMegaSena$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          tentativas = _args.length > 1 && _args[1] !== undefined ? _args[1] : 1;
          _context.prev = 1;
          numeros = [];
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 6;
          _iterator = Array(qtdeNumeros).fill()[Symbol.iterator]();

        case 8:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context.next = 18;
            break;
          }

          _ = _step.value;
          _context.t0 = numeros;
          _context.next = 13;
          return regeneratorRuntime.awrap(gerarNumerosEntre(1, 60, numeros));

        case 13:
          _context.t1 = _context.sent;

          _context.t0.push.call(_context.t0, _context.t1);

        case 15:
          _iteratorNormalCompletion = true;
          _context.next = 8;
          break;

        case 18:
          _context.next = 24;
          break;

        case 20:
          _context.prev = 20;
          _context.t2 = _context["catch"](6);
          _didIteratorError = true;
          _iteratorError = _context.t2;

        case 24:
          _context.prev = 24;
          _context.prev = 25;

          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }

        case 27:
          _context.prev = 27;

          if (!_didIteratorError) {
            _context.next = 30;
            break;
          }

          throw _iteratorError;

        case 30:
          return _context.finish(27);

        case 31:
          return _context.finish(24);

        case 32:
          return _context.abrupt("return", numeros);

        case 35:
          _context.prev = 35;
          _context.t3 = _context["catch"](1);

          if (!(tentativas > 100)) {
            _context.next = 41;
            break;
          }

          throw 'Putz';

        case 41:
          return _context.abrupt("return", gerarMegaSena(qtdeNumeros, tentativas + 1));

        case 42:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 35], [6, 20, 24, 32], [25,, 27, 31]]);
}

gerarMegaSena(25).then(console.log)["catch"](console.log);