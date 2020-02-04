function habilidade(skill) 
{
    var i = 0;
    while(i < skill.length)
    {
        if (skill[i] == 'javascript')
        {
            return true;
        }
        i++;
    }
    return false;
}

var skill = ['javascript', 'reactjs', 'React native'];
var resultado = habilidade(skill);
console.log(resultado);