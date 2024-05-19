"use strict";
var Cargo;
(function (Cargo) {
    Cargo[Cargo["adm"] = 1] = "adm";
    Cargo[Cargo["gerente"] = 2] = "gerente";
    Cargo[Cargo["chefe"] = 3] = "chefe";
})(Cargo || (Cargo = {}));
const funcionario = {
    nome: 'Ana',
    idade: 25,
    cargo: Cargo.chefe
};
