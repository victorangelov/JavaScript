txtcontar.addEventListener('click', contar)
function contar(){
    let inicio = document.querySelector('input#txtini')
    let fim = document.querySelector('input#txtfim')
    let passo = document.querySelector('input#txtpasso')
    let res = document.querySelector('div#txtres')
    
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = `Impossível contar`
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert(`Passo inválido! considerando passo 1`)
            p = 1
        }
 
        if (i < f){
            // contagem crescente
            for(let v = i; v <= f; v += p){
                res.innerHTML += `${v} \u{1F449}`
            }
 
        } else {
            // contagem regressiva
            for(let v = i; v >= f; v -= p){
                res.innerHTML += `${v} \u{1F449}`
            }
        }
        //simbolos no javascript \u{}
        res.innerHTML += ` \u{1F3C1}` 
    }
}