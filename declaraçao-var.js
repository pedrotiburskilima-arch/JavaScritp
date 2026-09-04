function exemploVAR(){
    var x = 10;
    if (true){
        var x = 28 //mesma variavel x é redeclarada dentrop do bloco 
        console.log(x); //28
    }
    console.log(x); // 28(o valor foi alterado)
}

exemploVAR();