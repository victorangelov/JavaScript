let num = document.querySelector('input#txtnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#txtres')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    // quando usar a função dentro da função utilize apenas Number(n) não use o Value
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        //adicionando valor ao array valores, quando usar a função principal Number(num.value) use o Value
        valores.push(Number(num.value))
        //vinculando variável ao elemento option que será criado dinamicamente
        let item = document.createElement('option')
        //adicionando texto dentro do option criado
        item.text = `Valor ${num.value} adicionado`
        //adicionando um item dinamicamente dentro do html
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    //Esvaziando campo após a função
    num.value = ''
    //Selecionando o campo com o mouse após a função
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        res.innerHTML = `Vetor vazio, favor adicionar valores antes de finalizar`
    } else {
        let menor = valores[0]
        let maior = valores[0]
        let soma = 0
        let media = 0
        //repetição para percorrer o vetor e verificar o menor e maior valor
        for(let pos in valores){
            //faz um incremento na variável soma a cada interação ou loop
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if (valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / valores.length
        res.innerHTML = ''
        res.innerHTML += `<p>O vetor tem ${valores.length} posições</p>`
        res.innerHTML += `<p> O maior valor do vetor é ${maior}</p>`
        res.innerHTML += `<p> O menor valor do vetor é ${menor}</p>`
        res.innerHTML += `<p> A soma dos valores do vetor é ${soma}</p>`
        res.innerHTML += `<p> A media entre os valores do vetor é ${media}</p>`
    }
    
}