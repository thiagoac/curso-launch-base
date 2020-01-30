//Calculo do IMC
// const nome = 'Thiago'
// const peso = 96
// const altura = 1.85
// const imc = peso / (altura * altura)

// console.log(imc)

// if(imc >= 30){
//     console.log(`${nome} você está acima do peso`)
// }else if(imc < 29.9){
//     console.log(`${nome} você não está acima do peso`)
// }

//Calculando a aposentadoria para honem e mulher
const nome = 'Thiago'
const sexo = 'F'
const idade = 46
const contribuicao = 40

if(sexo == 'M' && ((idade + contribuicao) < 95)) {
    console.log(`${nome} você não pode se aposentar`)
}else if(sexo == 'F' && ((idade + contribuicao) < 85)){
    console.log(`${nome} você não pode se aposentar`)
}else{
    console.log(`${nome} você pode se aposentar`)
}
