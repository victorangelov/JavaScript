let num = document.querySelector('input#txtnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#txtres')
let valores = []

function isNumero(numero){
    if(Number(numero) >= 1 && Number(numero) != null){
        return true
    } else {
        return false
    }
}

function inLista(numero, lista){
    if(numero.indexOf != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){

    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
}




