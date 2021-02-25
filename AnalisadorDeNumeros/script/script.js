let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else {
        return false
    }
}
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }

}
function adicionar(){
    //verifica se o número é maior que 1 e menor que 100
    //verifica se o número consta na lista
    if(isNumero(num.value) && !inLista(num.value, valores)){
        //adiciona o valor no vetor
        valores.push(Number(num.value))
        //cria um novo elemento html option
        let item = window.document.createElement('option')
        //adiciona o texto ao elemento item
        item.text = `Valor ${num.value}  adicionado`
        //adiciona o item dentro do elemento lista do html
        lista.appendChild(item)
        //limpando resultado caso seja adicionado um novo item ao vetor
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na vista.')
    }
    //limpa o campo de digitar
    num.value = ''
    //deixa o mouse no item input num
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert('adicione valores antes de finalizar.')
    } else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / valores.length

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.<p>`
        res.innerHTML += `<p>O maior valor entre os números adicionados é o ${maior}`
        res.innerHTML += `<p>O menor valor entre os números adicionados é o ${menor}</p>`
        res.innerHTML += `<p>A soma de todos os valores é igual a ${soma}</p>`
        res.innerHTML += `<p>A media dos valores é igual a ${media}</p>`
    
    } 
}