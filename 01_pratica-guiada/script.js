//CODIGO AQUI

/*console.log ("Hell life")

// Se eu tenho 15 reais, e recebo mais 22.40, quanto dinheiro eu tenho agora?

let saldo = 15 + 22.40
console.log (saldo)

//Gastei 12,34. E agora, qual é o meu saldo?

saldo = saldo - 12.34
console.log ("Saldo subtraído:",saldo)

//Precisei dividir o dinheiro igualmente com os meus dois irmãos, quanto ficou para cada um?

saldo = saldo/3
console.log ("Saldo dividido por 3 irmãos",saldo)


//Apliquei minha parte do dinheiro, e ele rendeu até ficar 3.42 vezes maior. Quanto vale agora?

saldo = saldo * 3.42
console.log ("Saldo investido", saldo)

//Reparti o dinheiro em fatias inteiras entre três contas, e deixei o resto para comprar um chicletinho. Quanto dinheiro sobrou para o chiclete?

saldo = saldo % 3
console.log ("Chicletinho", saldo)

//Para testar isso, quanto é 2x2+2

const multSoma = 2*2+2
console.log("Multiplicação", multSoma)

const SomaEMult = 2*(2+2)
console.log("Multiplicação", SomaEMult)

//Momento Réplica:

let comparacaoIgual = 5 === 5
console.log("Comparação Igual", comparacaoIgual)

let comparacaoDiferente = 5 !== 5
console.log("Comparação Diferente", comparacaoDiferente)

let comparacaoTipo1 = 5 !== "5"
//number !== string
console.log("Comparação Tipos 1",comparacaoTipo1)

let comparacaoTipo2 = "5" === "cinco"
console.log("Comparação Tipos 2",comparacaoTipo2)
console.log(typeof "cinco")
console.log(typeof '5')

let comparacaoTipo3 = typeof 5 === typeof 5
console.log("Comparação Tipos 3",comparacaoTipo3)
console.log(typeof 5)

let comparacaoTipo4 = typeof 5 === typeof 20
console.log("Comparação Tipos 4",comparacaoTipo3) */




//Maior > que ou Menor < que (ou igual ==)

const num1 = 2
const num2 = 8
let resultado
console.log("Número 1:",num1, "Número2:", num2)

//O primeiro número é igual ao segundo? True/False

resultado = num1 == num2
console.log("O primeiro número é 'igual' ao segundo? True/False", resultado)

//O primeiro número é menor ou igual ao segundo? True/False
resultado = num1 <= num2
console.log("O primeiro número é 'menor ou igual' ao segundo? True/False", resultado)

//O primeiro número é maior que o segundo? True/False
resultado = num1 > num2
console.log("O primeiro número é 'maior' que segundo? True/False", resultado)

//O primeiro número é menor que o segundo? True/False
resultado = num1 < num2
console.log("O primeiro número é 'menor' que segundo? True/False", resultado)
*/

//Variáveis lógicas: SE, SENÃO
//Os operadores lógicos costumam ser muito usados para condições (tipo os bloquinhos de “se, senão” do Scratch),
//e nós podemos usá-los para construir muitas lógicas. Considere, por exemplo, as afirmações abaixo:

//Perguntas:
//*let a = "quero dirigir um Celta 2012;"
let b = "sou maior de idade;"
let c = "consigo comprar o Celta por 22.000 reais;"
let d = "consigo alugar o Celta;"
let e = "tenho carteira de motorista;"

//Condições:

/*Quero dirigir o Celta 2012
Não sou maior de idade
Sou maior de idade e não tenho carteira de motorista
Sou maior de idade e consigo comprar ou alugar o celta
Sou maior de idade e tenho carteira de motorista, mas não quero dirigir o Celta */

//Respostas:
a
! b  /*(!b ainda pode ser algo como idade < 18, por exemplo)*/
b && ! e
b && (c || d) /*(c ainda pode ser algo como saldo > 22000)*/
(b && e) && ! a

//num1 = 2
//num2 = 3

logar com e-mail || logar com a digital



