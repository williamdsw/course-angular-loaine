// JS
var minhaVar = 'minha variavel';

function minhaFuncao(x, y) {
    return x + y;
}

var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 2;
});

// ES 6 ou ES 2015

var numero = 2;
var PI = 3.14;

numeros.map(function (valor) { return valor * 2; });
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());

var str = 'string qualquer';
var num = 5;
var bool = false;
var qualquer = 'qualquer coisa';
qualquer = 10;
qualquer = true;