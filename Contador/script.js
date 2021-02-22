txtcontar.addEventListener('click', contar)

function contar(){
    let ini = document.querySelector('input#txtini')
    let f = Number(document.querySelector('input#txtfim'))
    let p = Number(document.querySelector('input#txtpasso'))
    let res = document.querySelector('div#txtres')
    
    let inicio = Number(ini.value)
    let fim = Number(f.value)
    let passo = Number(p.value)
    
    let i = inicio

    
    for(let i = inicio; i <= fim; i+=passo){
        res.innerHTML = `${i}`
    }
    
    /*
    if(inicio < 0 ){
        res.innerHTML = `[ERRO] Impossível contar ${inicio} inválido`
        if(passo < 1){
            window.alert(`[ERRO] PASSO inválido, considerando PASSO 1`)
            passo = 1
       } 
            //res.innerHTML += `U+1F3C1`
    } else{
            for(let i = inicio; i <= fim; i+=passo){
                res.innerHTML = `${i}`
            }
    }  
    */
}