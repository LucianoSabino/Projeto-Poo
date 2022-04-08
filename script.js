var ingredientes = ['sal', 'mel', 'água', 'mostarda'];

function capitalizar(ingredientes) {
    var modificado = [];

    for (var i = 0; i < ingredientes.length; i++) {
        //pegando a primeira letra e colcando ela em caixa alta
        var letraInicial = ingredientes[i].charAt(0).toUpperCase();
    
        //pegando o resto das letras
        var restoTexto = ingredientes[i].slice(1);
    
        modificado[i] = letraInicial + restoTexto
        //console.log(letraInicial + restoTexto);
    };

    return modificado;
};

function odenar(ingredientes) {

    //um funcão que modifica com a odernação é feita 
    return ingredientes.sort(function(a, b) {
        return a.localeCompare(b);
    });
 
};

var resutadoCapitalizacao = capitalizar(ingredientes)
var resultadoOdenacao = odenar(resutadoCapitalizacao)

console.log(resultadoOdenacao)