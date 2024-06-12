function busca(valor){
    var variavel=0;
    for(var x=0; x<valor; x++)
        for(var y=0; y<valor; y++)
        variavel+=x+y
    return variavel
}

console.log(busca(10))