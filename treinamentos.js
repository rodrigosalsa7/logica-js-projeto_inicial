//Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", 
//mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

let diaDaSemana = prompt('Informe o dia da semana:');

if (diaDaSemana === 'Sábado' || diaDaSemana === 'Domingo'){
    alert('Bom fim de semana!')
} else {
    alert('Boa semana.')
}

//Verifique se um número digitado pelo usuário é positivo ou negativo. 
//Mostre um alerta informando.

let numero = prompt('Digite um número:');

//converte a entrada para um número
numero = parseFloat(numero);

if(numero > 0){
    alert('É um número positivo.')
} else if (numero < 0){
    alert('É úm número negativo.')
} else {
    alert('O número é zero.')
}

//Crie um sistema de pontuação para um jogo. 
//Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

let pontuacao = prompt('Digite a sua pontuação final no jogo:');

pontuacao = parseInt(pontuacao);

if (pontuacao >= 100){
    alert('Parabéns, você venceu!')
} else {
    alert('Tente novamente para ganhar.')
}

//Crie uma mensagem que informa o usuário sobre o saldo da conta, 
//usando uma template string para incluir o valor do saldo.

let nome = prompt('Informe o seu nome:');
let saldo = parseFloat(prompt('Informe o saldo da sua conta bancária:'));

let mensagem = `O correntista ${nome} tem saldo bancário de R$${saldo.toFixed(2)}`;

alert(mensagem);