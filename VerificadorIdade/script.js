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
    let img = document.querySelector('img#txtimg')
    
    
    
    //VALIDANDO SE O CAMPO ESTÁ PREENCHIDO E SE A DATA NÃO É MAIOR QUE O ANO ATUAL
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert(`[ERRO] Verifique os dados e tente novamente`)
    } else {
          var fsex = document.getElementsByName('radsex')
          var idade = ano - Number(fano.value)  
          var genero = ''
          img.src = 'img/menino.png'  
          if (fsex[0].checked){
              genero = 'Masculino'
          } else {
              genero = 'Feminino'
          }
          res.innerHTML = `Detectamos pessoa de gênero ${genero} com ${idade} anos`
           
    }
}