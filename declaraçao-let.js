function exemploVAR(){
    console.log(x);

    
    let x = 10;



    if (true){
        let x = 28 //mesma variavel x é redeclarada dentrop do bloco 
        console.log(x); //28 (dentro do bloco)
    }
    console.log(x); // 28(o valor foi alterado)
}

exemploVAR();