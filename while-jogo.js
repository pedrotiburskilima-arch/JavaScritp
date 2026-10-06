let resultadoDado
let lancamento = 0 

while ( resultadoDado !== 6) {
    resultadoDado = Math.floor(Math.random() * 6) + 1;// gera um numero aleatorio de 1 a 6
    lancamento++;
    console.log(`lancamento ${lancamento}: resultado do dado: ${resultadoDado}`) 

    console.log(`finalmente! o numero 6 foi obtido apos ${lancamento} lancamento`)

}