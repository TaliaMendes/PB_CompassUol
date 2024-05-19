class Users {
  readonly nome: String // readonly (pode acessar fora da classe, so não pode alterar o valor)
  private valorConta: number //private (igual no java , não tem acesso fora da classe)
  public conta: number

  // constructor(public readonly nome: String , public conta: number , private _valorConta : number){

  // } //cria e inicializa o construtor em uma linha. Não precisa criar as propriedades acima.
  
  constructor(nome: string , valorConta: number , conta : number){
    this.nome = nome
    this.valorConta = valorConta
    this.conta = conta
  }

  deposito(valor: number){
    this.valorConta += valor

  }
}

let  cliente1 = new Users('Ana', 20, 8563)
cliente1.deposito(20)
let cliente2 = new Users('maria', 50, 85625)