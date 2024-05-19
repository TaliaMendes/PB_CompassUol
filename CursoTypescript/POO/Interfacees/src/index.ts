interface Item {  //Tambem igual se utilizava em java
  nome: string
  preco: number

  mensagemFinal(menssagem: string): void
}

// class produto implements Item {} 

let produto : Item //produto vai implementar a interface Item
produto = {
  nome: 'Celular',
  preco: 1000,

  mensagemFinal(menssagem: string){
    console.log(menssagem + ' ' + this.nome)
  }
}

produto.mensagemFinal('Voçe acabou de comprar um')