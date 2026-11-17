// funcao de expressao para gerar um numero aleatorio entre um intervalo especificado
const gerarNumeroAleatorio = function(mim, max){
    return Math.floor(Math.random() * + (max - mim + 1)) + mim;
};

//chamada a funcao para gerar um numero aleatorio entre 1 e 100
const gerarNumeroAleatoria = gerarNumeroAleatorio(1, 100);
console.log("Numero aleatorio:", gerarNumeroAleatorio);