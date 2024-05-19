"use strict";
class Users {
    constructor(nome, valorConta) {
        this.nome = nome;
        this.valorConta = valorConta;
    }
    deposito(valor) {
        this.valorConta += valor;
    }
}
let cliente1 = new Users('Ana', 20);
cliente1.deposito(20);
let cliente2 = new Users('maria', 50);
