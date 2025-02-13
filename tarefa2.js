// Dado que tenho o valor de uma compra, o método de pagamento e o frete a ser pago
// Faça uma estrutura onde:

// Se o valor da compra for maior que 200 e o método de pagamento for dinheiro, o frete é grátis
// Se o valor da compra for maior que 200 e o método de pgamentofor cartão, o frete seja de 20 reais
// Se o valor da compra for menor ou igual a 200 e o método de pagamento for dinheiro, o frete seja de 30 reais
// Se o valor da compra for menor ou igual a 200 e o método de pagamento for cartão, o frete seja de 50 reais

// Imprima na tela o valor da compra, método de pagamento e o valor do frete

const valorDaCompra = 197
const tipoPagamento = 'cartao'

if (valorDaCompra > 200 && tipoPagamento == 'dinheiro') {         
    console.log('Frete Grátis!')
} else if (valorDaCompra > 200 && tipoPagamento == 'cartao'){
    console.log('Frete de R$20 reais')
} else if (valorDaCompra <= 200 && tipoPagamento == 'dinheiro'){
    console.log('Frete de R$30 reais')
}else {
    console.log('Frete é de R$50 reais')
}