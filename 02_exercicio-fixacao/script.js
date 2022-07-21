// EXERCICIO 01

/*Faça um programa que:
Pergunte sua idade;
Pergunte a idade do seu melhor amigo ou da sua melhor amiga;
Imprima a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (true ou false);
Imprima na console a diferença de idade (não tem problema se sair um número negativo).*/

const minhaIdade = prompt('Qual sua idade?')
const idadeAmiga = prompt('Qual a idade da sua amiga ou amigo?')
let resultado

resultado = minhaIdade > idadeAmiga
console.log ("Sua idade é maior do que a do seu melhor amigo?", resultado)

resultado = minhaIdade - idadeAmiga
console.log ("Diferença de idade:", resultado)

// EXERCICIO 02
/*Considere as seguintes afirmações, e crie variáveis para elas.*/

const a = 'vou pra praia'
const b = 'sou maior de idade'
const c = 'posso tomar uma cervejinha'
const d = 'quero passear de carro'

/*Com as afirmações criadas, escreva as operações lógicas para as frases abaixo:
Não sou maior de idade e quero passear de carro;
Sou maior de idade e vou para a praia, e não quero passear de carro
Vou para a praia ou quero passear de carro
Posso tomar uma cervejinha e não vou passear de carro*/

//Respostas:

!b && d
b && a && !d
a || d
c && !d

