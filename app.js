//mensagem que informa na tela
alert('Boas vindas ao jogo do Número Secreto, divirta-se!');

//perguntar o nome ao usuário e atribuir ao mesmo tempo a variável nome
let nome = prompt('Digite seu nome:');

//exibir a mensagem na tela com o nome atribuido na variável
alert("Olá, " + nome + "! Bem-vindo!");

//perguntar a idade do usuário
let idade = prompt('Digite sua idade:')

//enviar uma mensagem informando o nome e a idade do usário
alert('Olá, ' + nome +  '. Você tem: ' + idade + ' anos de idade.');

//controle de entrada do jogo pela idade do jogador.
if(idade >= 18){
    alert('Você pode jogar o nosso jogo.')
} else{
    alert('Você não pode jogar o nosso jogo ainda.')
}
//informando o número secreto como variável
let numeroSecreto = 7;

//informativo na tela que foi impresso com caixa de digitação
let chute = prompt('Escolha um número entre 1 e 30');

if (chute == numeroSecreto){
    alert('Isso ai! Você descobriu o número secreto!! ' + numeroSecreto + '');
} else{
    alert('Você errou! Tente novamente. :/')
}




