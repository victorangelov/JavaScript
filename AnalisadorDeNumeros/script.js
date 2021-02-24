let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

//retorna se o campo foi preenchido de for entre 1 e 100
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

//retorna se o valor não é encontrado na lista
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}
//chamada pelo botão Adicionar do HTML
function adicionar(){
    //testa se o número está entre 1 e 100 e se o valor está dentro do vetor
    if(isNumero(num.value) && !inLista(num.value, valores)){
        //tem que definir como number se não ele 
        //sempre vai ser reconhecido como se não estivesse no vetor
        valores.push(Number(num.value))
        window.alert(`valor ${num.value} adicionado ao vetor`)
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
}

function finalizar(){
    
}

function eNumero(n){
    if (n < 1 || n > 100){
        return true
    } else {
        return false
    }
}

function taLista(n, l){
    if (l.indexOf(Number(n.value) != -1)){
        return true 
    } else {
        return false
    }
}

function adicionarMais(){
    if(eNumero(num.value) && taLista(num.value, valores){
        window.alert('Valor inválido ou não encontrado na lista')
    } else {

    }
}