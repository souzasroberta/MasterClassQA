// Tipos de variáveis:

// let - variavel que pode ser alterada
// const - variavel que nunca pode ser alterada 
//var - variavel que pode ser alterada, mas é recomendado usar let e const

// Tipos de valores de variáveis:

// null
// undefined
// vazia

// String: texto, "texto" ou 'texto'

 let nome = "Roberta"  
 console.log("Roberta")

let idade = 38
console.log("Idade: " + idade)

// Boolean: true ou false
let maiorDeIdade = true
console.log('É maior de idade? ' + maiorDeIdade)

// Oprações numéricas
console.log('Soma: ', 2 + 2)
console.log('Subtração: ', 10 - 2)
console.log('Divisão: ', 10 / 2)
console.log('Multiplicação: ', 10 * 2)

// Array: lista de valores
const nomes = ['Roberta', 'Mariana', 'Savana', 'Joel', 'Joãozinho']
nomes.push('Jorge e Rosa') // adiciona no final
nomes.pop() // remove o último
nomes.unshift('Jorge e Rosa') // adiciona no inicio
nomes.shift() // remove o primeiro
console.log('_______________________________')
console.log('Nomes: ', nomes)
console.log('Tamanho do meu array: ', nomes.length)
console.log('Último item do meu array: ', nomes[nomes.length - 1]) // pega o último item do array
console.log('Penúltimo item do meu array: ', nomes[nomes.length - 2]) // pega o penúltimo item do array
