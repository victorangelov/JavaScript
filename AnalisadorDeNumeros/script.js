let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

<<<<<<< HEAD
=======
//retorna se o campo foi preenchido de for entre 1 e 100
>>>>>>> 799e87ae43179502a78f58fb3e42a7ff57a132dd
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

<<<<<<< HEAD
function inLista(n, l){
    // quando usar a função dentro da função utilize apenas Number(n) não use o Value
=======
//retorna se o valor não é encontrado na lista
function inLista(n, l){
>>>>>>> 799e87ae43179502a78f58fb3e42a7ff57a132dd
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
<<<<<<< HEAD
        //adicionando valor ao array valores, quando usar a função principal Number(num.value) use o Value
        valores.push(Number(num.value))
        //vinculando variável ao elemento option que será criado dinamicamente
        let item = document.createElement('option')
        //adicionando texto dentro do option criado
        item.text = `Valor ${num.value} adicionado`
        //adicionando um item dinamicamente dentro do html
        lista.appendChild(item)
        res.innerHTML = ''
=======
        //tem que definir como number se não ele 
        //sempre vai ser reconhecido como se não estivesse no vetor
        valores.push(Number(num.value))
        window.alert(`valor ${num.value} adicionado ao vetor`)
>>>>>>> 799e87ae43179502a78f58fb3e42a7ff57a132dd
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    //Esvaziando campo após a função
    num.value = ''
    //Selecionando o campo com o mouse após a função
    num.focus()
}

function finalizar(){
<<<<<<< HEAD
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
    
=======
    
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
>>>>>>> 799e87ae43179502a78f58fb3e42a7ff57a132dd
}