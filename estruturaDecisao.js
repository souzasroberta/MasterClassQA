// estrutura condicional if/else

// Se idade > 18
    // deixa entrar na balada
// Se não
    // não deixa entrar na balada

/* if (10 == 10) {
console.log('10 == 10')
} else {
console.log('10 != 10')
} */

/* const nome = 'Roberta'

console.log(nome == 'Mariana') // a condição if se transforma em true ou false

if (nome != 'Roberta') {
console.log('Nome não é igual a Roberta')
} else {
    console.log('Nome é igual a Roberta')
}
console.log('_______________________________')

const idade = 18
console.log(idade == 19)

if (idade >= 18) {
    console.log('Pode dirigir')
} else {
    console.log('Não pode dirigir')
}    */
console.log('*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_')

// se a media for menor que 7, e ele está no semestre 4 - reprovado
// senão, se a media for menor que 7 e ele está num semestre menor a 4 - recuperação
// senão se média maior ou igual a 7 - aprovado

const mediaFinal = 10
const semestre = 3

if (mediaFinal < 7 && semestre >= 4) {
    console.log('Reprovado')
} 
else if (mediaFinal < 7 && semestre < 4) { 
    console.log('Recuperação')
} 
else if (mediaFinal >= 7 && semestre >= 4) {
    console.log('Aprovado')
}

// melhorando o código:

if (mediaFinal >= 7) {
    console.log('Aprovado')
}
else {
    if (semestre == 4) {
        console.log('Reprovado')
    } 
    else if (semestre < 4) {
        console.log('Recuperação')
    }
}   

// Usando a condicional OU || : exemplo aleatório sem sentido

if (mediaFinal >= 7 || semestre < 4) {  
    console.log('Aprovado')
} else {
    console.log('Reprovado')
}

// estrutura de decisão switch/case

switch (mediaFinal) {
        case 10: 
        console.log('Aprovado com excelência')
    break
        case 7:
        console.log('Aprovado')
    break
        default:
        console.log('Reprovado')
    break
}