// criando vetor
let num = [5, 3, 4]

console.log(`nosso vetor é o ${num}`)
// adicionando elemento ao array especificando indice
num[3] = 6
// adicionar elemento ao array sem especificar idice
num.push(7)
//tamanho do array
console.log(num.length)
// organiza o array em ordem crescente
num.sort()
// mostrar tamanho do vetor
console.log(`O Vetor tem ${num.length} posições`)
// mostrar conteúdo de um indice do vetor
console.log(num[2])
console.log(num)

//percorrendo vetor com FOR
for(let i = 0; i < num.length; i++){
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}
// SÓ FUNCIONA PARA ARRAYS E OBJETOS
// Estrutura FOR IN. PARA CADA POSIÇÃO INDICE EM NUM  EU VOU MOSTRAR O NUM NA POSIÇÃO INDICE
for( let indice in num ){
    console.log(num[indice])
}
//Retornando indice do vetor que possui a informação procurada, retorna o indice do vetor
console.log(num.indexOf(3))
console.log(num.indexOf(10))
//restagando valor que não existe no vetor retorna -1
let posi = num.indexOf(10)
//retornando que não tem no array
if (posi == -1){
    console.log(`O valor não se encontra no vetor`)
}


