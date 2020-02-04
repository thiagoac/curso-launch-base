// Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias (novo array), por exemplo:

const usuarios = [
    {nome:'Thiago', tecnologias:['HTML','CSS']},
    {nome:'Sandro', tecnologias:['Python', 'SQL']},
    {nome:'Felipe', tecnologias:['Power BI','Adobe XD']}
]

for(let i = 0; i < usuarios.length; i++){
    console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}`)
}

//----------------------------

for (let value of usuarios){
    console.log(value)
}

