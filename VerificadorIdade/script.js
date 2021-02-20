// ESCUTANDO BOTÃO DO HTML
txtverificar.addEventListener('click', verificar)
function verificar(){
    // DETECTANDO ANO ATUAL
    let data = new Date()
    let ano = data.getFullYear()

    // PUXANDO ANO DO INPUT
    let fano = document.getElementById('txtano')
    // VARIÁVEL DA RESPOSTA
    let res = document.querySelector('div#txtres')

    //VALIDANDO SE O CAMPO ESTÁ PREENCHIDO E SE A DATA NÃO É MAIOR QUE O ANO ATUAL
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert(`[ERRO] Verifique os dados e tente novamente`)
    } else {
        // validando GÊNERO
        let fsex = document.getElementsByName('radsex')
    
        let idade = ano - Number(fano.value)
        let genero = ''
        //criando elemento imagem no JS
        let img = document.createElement('img')
        //setando id foto na tag img criada
        img.setAttribute('id','foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            img.src = 'homem.png'
        } else if (fsex[1].checked){
            genero = 'Mulher'
            img.src = 'mulher.png'
        }
        // alinhando texto com JS dinamicamente
        res.style.textAlign = 'center'
        res.innerHTML += `detectamos ${genero} com ${idade} anos`
    }
}