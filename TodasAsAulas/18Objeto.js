let amigo = {
    nome:'jose', 
    sexo:'M',
    peso:85.4,
    engordar(p){
    console.log('Engordou')
    this.peso += p
    }
}
console.log(amigo.engordar(2))
console.log(`${amigo.nome} pesa ${amigo.peso} kg`)

