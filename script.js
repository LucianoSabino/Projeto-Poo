// Importando o aquivo modificador.js para pega as funções exsportada
import modificador from './modificador.js';
import ingredientes from './ingredientes.js';

modificador.capitalizarNovo(ingredientes, 'nome')

//console.log(ingredientes)
//console.log(Array.isArray(ingredientes))//sabendo se o elemento e um vetor
//console.log(typeof ingredientes)
//var ingredientes = ['sal', 'mel', 'água', 'mostarda'];
//var resutadoCapitalizacao = modificador.capitalizar(ingredientes)
//var resultadoOdenacao = modificador.ordenar(resutadoCapitalizacao)
//console.log(resultadoOdenacao)