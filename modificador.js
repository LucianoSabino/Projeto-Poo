function fnCapitalizarNovo(colecao, atributo) {

    if (typeof colecao[0] == 'object') {
        var resltado = colecao.map(function (obj) {
            var letraInicial = obj[atributo].charAt(0).toUpperCase();
            var restoTexto = obj[atributo].slice(1);
    
            obj[atributo] = letraInicial + restoTexto
            return obj
        });

        console.log(resltado)
    }
};


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

function fnOrdenar(colecao, attr){    
    return attr ?
        colecao.sort(function(a,b){
            return typeof a[attr] == 'number' ?
                a[attr] - b[attr] :
                a[attr].localeCompare(b[attr])
        }):
        colecao.sort(function(a,b){
            return typeof a == 'number' ?
                a - b :
                a.localeCompare(b)
        });
}

// Exportando as funções
export default {
    capitalizar: fnCapitalizar,
    ordenar: fnOrdenar,
    capitalizarNovo: fnCapitalizarNovo
};