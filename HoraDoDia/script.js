let div = document.querySelector('div#txthora')
let div2 = document.querySelector('div#txtimg')

let agora = new Date()
hora = agora.getHours()
div.innerHTML = `Agora são ${hora} hora(s)`

if (hora > 12){
    document.style.background = 'white'
}

