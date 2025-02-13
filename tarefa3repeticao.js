// exercício de estrutura de repetição:

// Percorrer uma lista de cidades
// Contendo: ['Goiânia', 'Brasília', 'São Gabriel', 'São João Da Aliança', 'Alto Paraíso de Goiás']
// Para cada item, verificar se a cidade Alto Paraíso de Goias está presente na lista
// Printar nome da cidade
// Caso esteja, avisar
// Caso não seja o elemento (a cidade) procurado, avisar
// numero da execução

const cidades = ['Goiânia', 'Brasília', 'São Gabriel', 'Alto Paraíso de Goiás', 'São João Da Aliança']

for (let i = 0; i < cidades.length; i++) {
 
    if(cidades[i] != 'Alto Paraíso de Goiás') {
        console.log('ainda não é a cidade de Alto paraíso de Goias, ', 'a cidade encontrada é: ', cidades[i], ' na posição: ', i)
    }

    else if (cidades[i] == 'Alto Paraíso de Goiás') {
        console.log('**** achou a cidade Alto Paraíso de Goias', 'na posição: ****', i)
    } 
}
