//Criando função que calcula a aposentadoria
function calculaAposentadoria(nome, sexo, idade, contribuicao){
    var nome = nome
    var sexo = sexo
    var idade = idade
    var contribuicao = contribuicao

if(sexo == 'M' && ((idade + contribuicao) < 95)) {

    console.log(`${nome} você não pode se aposentar`)

}else if(sexo == 'F' && ((idade + contribuicao) < 85)){

    console.log(`${nome} você não pode se aposentar`)

}else{

    console.log(`${nome} você pode se aposentar`)

 }

}

calculaAposentadoria('Thiago', 'F', 45, 40)