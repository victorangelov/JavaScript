function carregar(){
    let div = document.querySelector('div#txthora')
    let img = document.getElementById('imagem')
    let div2 = document.querySelector('div#txtimg')
    
    let agora = new Date()
    hora = agora.getHours()
    //hora = 19 // para teste 
    div.innerHTML = `Agora são ${hora} hora(s)`
    
    if (hora < 12){
        //bom dia
        img.src = 'img/manha.png'
        div2.innerHTML += `<br>Bom dia!`
        document.body.style.background = 'rgb(132, 148, 168)'
        
    } else if (hora < 18){
        //boa tarde
        img.src = 'img/tarde.png'
        div2.innerHTML += `<br><br>Boa tarde!`
        document.body.style.background = 'rgb(195, 204, 113);'
        X
    } else {
        //boa noite
        img.src = 'img/noite.png'
        div2.innerHTML += `<br>Boa noite!`
        document.body.style.background = 'black'
        
    }
}