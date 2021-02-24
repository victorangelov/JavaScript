//Função
function parImpar(n){
    //Verificando se o n é par ou Ímpar
    if(n % 2 == 0){
        return 'Par'
    } else{
        return 'Impar'
    }
}

//retornando o resultado direto sem variável
console.log(parImpar(10))
//pegando o valor retornado pela função dentro da variável res
let res = parImpar(10)
//imprimindo variável que recebeu o resultado da função
console.log(res)

//definir PARAMETRO OPCIONAL para evitar NaN = não é um número quando um dos parametros não são passados.
function soma(a=0, b=0){
    return a + b
}

console.log(soma( 4))
