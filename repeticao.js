// repetição por array

const nomesCidades = ['Goiânia', 'Brasília', 'São Gabriel', 'São João Da Aliança', 'Alto Paraíso de Goiás']

// para cada item da Lista, quero executar um bloco de código
// forEach: trabalha em cima de um array

nomesCidades.forEach((cidade, index) => {
    //console.log('Executou: ', cidade, ' na posição: ', index)
})


// for normal

for (let indice = 0; indice < nomesCidades.length; indice++) {
   // console.log(nomesCidades[indice])
}

// OU: perceba que no lugar de pegar o tamanho do array acima, eu defini o valor 20 e isso significa que ele irá executar 20 vezes

for (let indice = 0; indice < 20; indice++) {
 //   console.log(nomesCidades[indice])
}

// exercício: executar cada nome de cidade dentro do meu array:

for (let indice = 0; indice < nomesCidades.length; indice++) {
    console.log(' Cidade: ', nomesCidades[indice], ' está na posição ', indice)
}
