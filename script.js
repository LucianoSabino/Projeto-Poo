var ingredientes = ['sal', 'mel', 'água', 'mostarda'];
var modificado = [];

for (var i = 0; i < ingredientes.length; i++) {
    //pegando a primeira letra e colcando ela em caixa alta
    var letraInicial = ingredientes[i].charAt(0).toUpperCase();

    //pegando o resto das letras
    var restoTexto = ingredientes[i].slice(1);

    modificado[i] = letraInicial + restoTexto
    //console.log(letraInicial + restoTexto);
};

//um funcão que modifica com a odernação é feita 
var odernado = modificado.sort(function(a, b) {
    return a.localeCompare(b);
});

console.log(odernado)