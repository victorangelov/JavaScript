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
    // variável para imagem do html

    // definindo variável do elemento img do html
    //let img = document.querySelector('img#txtimg')
    
    //VALIDANDO SE O CAMPO ESTÁ PREENCHIDO E SE A DATA NÃO É MAIOR QUE O ANO ATUAL
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert(`[ERRO] Verifique os dados e tente novamente`)
    } else {
          var fsex = document.getElementsByName('radsex')
          var idade = ano - Number(fano.value)  
          var genero = ''
          //criando elemento img dentro do html dinamicamente
          let img = document.createElement('img')
          img.setAttribute('id','foto')
          //alterando imagem que já está no HTML
          //img.src += 'img/menino.png' 
          
          //pegando dados do radio femenino masculino
          if (fsex[0].checked){
              genero = 'Masculino'
              if (idade < 5){
                //setando abritubo no elemento img dinamicamente
                img.setAttribute('src', 'img/bbm.png')
                  //bb
              } else if (idade < 12){
                    img.setAttribute('src', 'img/menino.png')
                    //menino
              }else if(idade < 19) {
                  img.setAttribute('src', 'img/jovemh.png')
                  //jovem
              }else if (idade < 59){
                  img.setAttribute('src', 'img/homem.png')
                  //homem
              }else if (idade < 100){
                  img.setAttribute('src', 'img/velho.png')
                  //velho
              }else {
                  img.setAttribute('src', 'img/homemmaisvelho.png')
                  res.innerHTML = `<br>Você sabia que o homem mais velho da mundo chegou a 116 anos?`
                  // bem velho
              }
          } else {
              genero = 'Feminino'
              if (idade < 5){
                //setando abritubo no elemento img dinamicamente
                img.setAttribute('src', 'img/bbf.png')
                  //bb
              } else if (idade < 12){
                    img.setAttribute('src', 'img/menina.png')
                    //menino
              }else if(idade < 19) {
                  img.setAttribute('src', 'img/jovemm.png')
                  //jovem
              }else if (idade < 59){
                  img.setAttribute('src', 'img/mulher.png')
                  //homem
              }else if (idade < 100){
                  img.setAttribute('src', 'img/velha.png')
                  //velho
              }else {
                  img.setAttribute('src', 'img/mulhermaisvelha.png')
                  res.innerHTML = `<br>Você sabia que amulher mais velha do mundo chegou a ter 122 anos?`
                  // bem velho
              }
          }
          res.innerHTML += `Detectamos pessoa de gênero ${genero} com ${idade} anos`
          //adicionando mais informações ao retorno do elemento html
          res.appendChild(img)
    }
}