class Pessoa {

  nome: string
  idade: number

  constructor(nome: string , idade: number){
    this.nome = nome
    this.idade = idade
  }

  mostrarPessoa(){
    console.log('Sou a ' + this.nome + 'e tenho ' + this.idade + 'anos')
  }
}

class PessoaFisica extends Pessoa{

  cpf : string

  constructor(nome: string , idade: number, cpf: string){
    super(nome, idade)
    this.cpf = cpf
  }

  override mostrarPessoa(): void {
      console.log(super.mostrarPessoa + ', de cpf' + this.cpf)
  }
}

let pessoaf = new PessoaFisica('Ana', 20, '152926048565')