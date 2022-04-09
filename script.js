// Importando o aquivo modificador.js para pega as funções exsportada
import modificador from './modificador.js';

var ingredientes = ['sal', 'mel', 'água', 'mostarda'];

var resutadoCapitalizacao = modificador.capitalizar(ingredientes)
var resultadoOdenacao = modificador.ordenar(resutadoCapitalizacao)

console.log(resultadoOdenacao)