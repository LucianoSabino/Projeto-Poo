
function fnCapitalizar(vetor) {
    var modificado = [];

    for (var i = 0; i < vetor.length; i++) {
        //pegando a primeira letra e colcando ela em caixa alta
        var letraInicial = vetor[i].charAt(0).toUpperCase();
    
        //pegando o resto das letras
        var restoTexto = vetor[i].slice(1);
    
        modificado[i] = letraInicial + restoTexto
        //console.log(letraInicial + restoTexto);
    };

    return modificado;
};

function fnOrdenar(vetor) {

    //um funcão que modifica com a odernação é feita 
    return vetor.sort(function(a, b) {
        return a.localeCompare(b);
    });
 
};

// Exportando as funções
export default {
    capitalizar: fnCapitalizar,
    ordenar: fnOrdenar
};