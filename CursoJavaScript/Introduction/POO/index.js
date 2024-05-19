
//-------------------------------------metodos----------------------------------------------

const cachorro = {
  nome: 'Bob',
  patas: 4,
  idade: 1
}

cachorro.idade = 2
console.log(cachorro.idade)

const cachorro = {
  nome: '',

  latir: function(){
    console.log('Auau')
  },

  rosnar: function(){
    console.log('Rsrsrs')
  },

  setNome: function(nomeP){
    this.nome = nomeP           //metodos get e set são os mesmos que aprendeu em java
  },
  getNome: function(){
    return this.nome
  } 
}

cachorro.latir()
cachorro.rosnar()
cachorro.setNome('Bob')
console.log(cachorro.getNome())



//-------------------------------------instanciar classe por função----------------------------------------------

function criaCachorro(raca, patas, cor){
  let cachorro = Object.create({})
  cachorro.raca = raca
  cachorro.patas = patas
  cachorro.cor = cor
  return cachorro
}

let pinscher = criaCachorro('pinscher', 4 , 'preto')
console.log(pinscher)


//-------------------------------------instanciar classe por new----------------------------------------------
function Cachorro(raca , cor){
  this.raca = raca
  this.cor = cor
}

let dog = new Cachorro('dog', 'braco')
console.log(dog)

//-------------------------- Utiliza esta forma --------------------------------
class Cachorro{
  constructor(cor , nome){
    this.nome = nome
    this.cor = cor
  }
}

Cachorro.prototype.pata = 4
console.log(labrador.pata)


//-----------------------------------------------Symbol---------------------------------------------------------
class Cachorro{
  constructor(cor , nome){
    this.nome = nome
    this.cor = cor
  }
}

let patas = Symbol()
Cachorro.prototype[patas] = 4 // atribui 4 para a propriedade patas. 
//Toda classe instanciada vai ter esta propriedade pre definida

let labrador = new Cachorro('preto', 'Bob') //instanciando o objeto

console.log(labrador)// {nome: 'Bob', cor: 'preto'} , não aparece a propriedade no objeto

//formas de acessar a propriedade criada
console.log(Cachorro.prototype[patas]) //4 
console.log(labrador[patas]) //4


// ------------------------------------------get e set-------------------------------------------------------------
class Cachorro{
  constructor(cor , nome){
    this.nome = nome
    this.cor = cor
  }

  get getNome(){
    return this.nome
  }

  set setNome(nome){
    this.nome = nome
  }
}

let ca = new Cachorro('preto', 'bob')
ca.setNome = 'max'  //para utilizar é diferente no java, aqui utiliza como propriedade, nao função
console.log(ca.getNome)


//----------------------------------Herança-------------------------------------------------------------

class Mamifero{
  constructor(patas){
    this.patas = patas
  }
}

class Cachorro extends Mamifero{
  constructor(cor , nome , patas){
    super(patas , patas)//construtor da classe que foi herdada precisa ser primeiro
    this.nome = nome
    this.cor = cor
  }
}

let ca = new Cachorro('preto', 'bob', 4)
console.log(ca)


//----------------------------------------instanceof-------------------------------------------------------
//verificar de quem foi herdado 
console.log(new Cachorro instanceof Mamifero) //retorna true ou false. verifica se cachorro herdou de mamifero 



