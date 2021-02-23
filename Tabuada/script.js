txtgerar.addEventListener('click', gerar)

function gerar(){
    let res = document.querySelector('div#txtres') 
    let num = document.querySelector('input#txtnum')
    
    res.innerHTML = ''

    if(num.value.length == 0){
        window.alert(`Por favor digite um número antes de gerar tabuada`)
    } else {
        let numero = Number(num.value)
        for(let i = 0; i <= 10; i++){
            res.innerHTML += `${numero} x ${i} = ${i*numero} <br>`
        }
        
    }     
}
