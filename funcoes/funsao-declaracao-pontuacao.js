function calcularPontuacaoTotal(pontuacoes){
    let prontuacaoTotal = 0;
    for(let i=0;1<pontuacoes.length; i++) {
        pontuacaoTotal += pontuacoes[i];
    }
    console.log("pontuacao total do jogador:",pontuacaoTotal);
}
//array de pontuaçoes do jogador
const pontuacoesDoJogador = [10, 15, 20, 5, 8];
//Chamada a funcao para calcular a pontuaçao total do joagador
calcularPontuacaoTotal(pontuacoesDoJogador)