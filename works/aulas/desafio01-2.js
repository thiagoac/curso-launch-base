// Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa. Os dados a serem armazenados são:

//Objeto Empresa com suas propriedades
const empresa = {
    nome: 'Rocketseat',
    cor: 'Roxo',
    foco: 'Programação',
    endereco: {
        rua: 'Rua Guilherme Gembala',
        numero: '260'
    }
}

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}`)


// Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.

const programador = {
    nome:'Thiago',
    idade: 34,
    skill:[
        { nome: 'C++', especialidade: 'Desktop' },
        { nome: 'Python', especialidade: 'Data Science' },
        { nome: 'JavaScript', especialidade: 'Web/Mobile' }
    ]
}
 console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.skill[0].nome} com especialidade em ${programador.skill[0].especialidade}`)