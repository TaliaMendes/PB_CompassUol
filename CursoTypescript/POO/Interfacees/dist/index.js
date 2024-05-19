"use strict";
let produto;
produto = {
    nome: 'Celular',
    preco: 1000,
    mensagemFinal(menssagem) {
        console.log(menssagem + ' ' + this.nome);
    }
};
produto.mensagemFinal('Voçe acabou de comprar um');
