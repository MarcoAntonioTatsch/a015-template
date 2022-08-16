//exercício 1
/*
let num = Number(prompt('Digite um número.Para sair digite zero'))
let soma = 0
while (num !== 0) {
    soma = soma + num
    num = Number(prompt('Digite um número.Para sair digite zero'))
}
alert(`A soma dos número é ${soma}`)
*/

//----exercicio 02
/*
let num = Number(prompt("Insira um número"))

for(let i = 0; i<= num; i++){
    console.log(i)
}*/

/*const array = [7,6,5,4,3,2,1,0]
for(let i = 0; i<= array.length; i++){
    console.log(`O número do indice é ${i} é = ${array[i]}`)
}*/

//------- Fixação 01

/*let usuario = prompt("Entre com seu código de usuário").toUpperCase()

while(usuario!=="A"){
    alert("Acesso negado")
    usuario = prompt("Entre com seu código de usuário").toUpperCase()
}
alert("Bem vindo Administrador")*/


//--------- Fixação 02

/*const tabuada = Number(2)
for(let i=0; i<=10; i++){
    console.log("A taboada do 2 é a seguinte: 2x" + i + "="+ 2*i)
}*/

// ------------ Fixação 03


const strings = ["marco","Ana","Oliver"]
for(let i = 0; i< strings.length; i++){

    console.log(strings[i].toUpperCase())
}


