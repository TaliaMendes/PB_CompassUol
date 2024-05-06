//----------------------------------Função----------------------------------------------------------------

// function imprimirConsole(name){
//   console.log(name)
// }

// imprimirConsole('Talia')

// const numeroAleatorio = function(){ //função anonima que é ferenciada pela variavel
//   console.log(Math.random() * 10)
// }

// numeroAleatorio()

// const parOuImpar = (n) => { //Arrow Functions
//   if(n % 2 == 0){
//     return n
//   }
// }

// console.log(parOuImpar(2))


//------------------------------------------Vetor--------------------------------------------------------

// let array = [1, 2, 3, 4, 5, 6]
// let array2 = []

// for(let i = 0 ; i< array.length ; i++){
//     console.log(array[i])
//     array2[i] = array[i]
//     console.log('------------------')
//     console.log( array2[i])
// }


//----------------------------Objeto-------------------------------------------------------------------

// let pessoa = {
//   nome: 'talia',
//   age: '24'
// }

// console.log(pessoa.nome)


//---------------------------------------(Herança) Assing-----------------------------------------------------------

// let carro = {
//   portas: 4,
//   motor: 2.0
// }

// let carroAdicional = {
//   tetoSolar: true
// }

// Object.assign(carro, carroAdicional)
// console.log(carro) // {portas: 4, motor: 2, tetoSolar: true}
// console.log(Object.keys(carro)) // pega a chave do objeto ['portas', 'motor', 'tetoSolar']


//------------------------------------Mutação-------------------------------------------------------

// let pessoa = {
//   nome: 'talia',
//   idade: 24
// }

// let pessoa2 = pessoa

// pessoa2.nome = 'alex' //altera nos dois objetos 

// console.log(pessoa2)
// console.log(pessoa)
// console.log(pessoa2 == pessoa)//true

// let pessoa3 = {
//   nome: 'samyla',
//   idade: 19
// }

// console.log(pessoa3 == pessoa) //false 


//-----------------------------------Rest operator--------------------------------------------

// num = 2
// num1 = 6
// num2 = 9 

// function imprimirNumeros(...args){
//   for(let i = 0 ; i< args.length ; i++){
//     console.log(args[i])
//   }
// }

// imprimirNumeros(num)
// console.log("--------------")
// imprimirNumeros(num, num1, num2) //pode passar paramentros variados que ela aceita
// console.log("--------------")
// imprimirNumeros(1,8,3,7,9,6,5,4,3,10,89)
// imprimirNumeros("talia")

//---------------------------------Destructuring em Objetos---------------------------------------

// const pessoa = {
//   name: 'Talia',
//   lastName: 'Mendes'
// }

// const {name: nomeO , lastName: lastNameO} = pessoa

// console.log(nomeO)
// console.log(lastNameO)

//---------------------------------Destructuring em Array---------------------------------------

// let nomes = ['Talia', 'Ana', 'João']

// let [name1, name2, name3] = nomes

// console.log(name1)
// console.log(name2)
// console.log(name3)




//=======================================metodos de Array==============================================

//------------------------------------pop e push-----------------------------------------------------

// let vet = [1, 2, 0, 1, 3]

// vet.push(5) //insere no final do array
// vet.pop() //remove no final do array
// console.log(vet)

//------------------------------------shift e unshift-----------------------------------------------------
// let vet = [1, 2, 0, 1, 3]

// vet.unshift(5) //insere no incio doarray
// console.log(vet)
// vet.shift() //remove no inicio do array

//---------------------------------indexOf e lastIndexOf-------------------------------------------------
// let vet = [1, 2, 0, 1, 3]

// console.log(vet.indexOf(1))//encotra o indice do elemento no array (no primeiro index de que encotrar)
// console.log(vet.lastIndexOf(1))//encotra o indice do elemento no array (no ultimo index de que encotrar)

//--------------------------------slice---------------------------------------------------------------------

// let vet = [1, 2, 5, 8, 7, 6, 4, 3]
// console.log(vet.slice(0,1))//vai pegar so o primeiro elemento do indice do vetor ex:1
// console.log(vet.slice(0,2))//pega os dois elementos do indice do vetor ex:1 2
// console.log(vet.slice(0))//pega todos os elementos
// console.log(vet.slice(-2))//pega os dois ultimos elementos 
// console.log(vet.slice(-4))

//--------------------------------forEach--------------------------------------------------------------------
// let vet = [1, 2, 5, 8,  7, 6, 4, 3]

// vet.forEach(num => { //num é a variavel que itera sobre os indices, é o 'i' do for 'normal' (voce cria o nome dessa variavel interativa)
//   console.log(num)
// })

//------------------------------------includes----------------------------------------------------------
// let vet = [1, 2, 5, 8,  7, 6, 4, 3]

// console.log(vet.includes(5)) // verifca se tem 5 no vetor , retorna true ou false 

//exemplo de uso:  if(vet.includes(5)){faz algo}

//------------------------------------reverse----------------------------------------------------------
// let vet = ['carro', 'casa', 'cidade']

// console.log(vet.reverse())// inverte o conteudo do vetor 



//===================================metodos de String=============================================

//----------------------------------Trim----------------------------------------------------------------
// let nome = '     Talia \n'

// console.log(nome)
// let nomesCorrigidos = nome.trim() // remove tudo que nao é string (espaço, quebra de linha)
// console.log(nomesCorrigidos)

//---------------------------padStart-----------------------------------------------------
// let resposta = '56'

// let resCerta = resposta.padStart(6,'0')//quantidade de caracters que deve conter . ira completar a quantidade que falta com '0'

// console.log(resCerta)// vai imprimir : 560000

//--------------------------------split-----------------------------------------------------

// let frutas = 'banana,maça,morango,manga'

// let vetFrutas = frutas.split(',')// Quando encontra a ',' separa os elementos e coloca em um array  
// console.log(vetFrutas) // vai imprimir ["banana", "maça", "morango", "manga"] 

// //--------------------------------join-----------------------------------------------------

// let frase = 'testando o metodo join'

// let separaFrase = frase.split(" ")// precisa do split para fazer o join 
// //split separa por espaco as palavras

// let fraseUnida = separaFrase.join("!")//vai unir toda a frase com o caracter "!"
// console.log(fraseUnida) // vai imprimir: testando!o!metodo!join

//--------------------------------repeat-----------------------------------------------------

// let animal = 'gato '

// animalRepetido = animal.repeat(10)//repete a palavra gato 10x
// console.log(animalRepetido)


//======================================POO======================================================================

//-------------------------------------metodos----------------------------------------------

// const cachorro = {
//   nome: 'Bob',
//   patas: 4,
//   idade: 1
// }

// cachorro.idade = 2
// console.log(cachorro.idade)

// const cachorro = {
//   nome: '',

//   latir: function(){
//     console.log('Auau')
//   },

//   rosnar: function(){
//     console.log('Rsrsrs')
//   },

//   setNome: function(nomeP){
//     this.nome = nomeP           //metodos get e set são os mesmos que aprendeu em java
//   },
//   getNome: function(){
//     return this.nome
//   } 
// }

// cachorro.latir()
// cachorro.rosnar()
// cachorro.setNome('Bob')
// console.log(cachorro.getNome())



//-------------------------------------instanciar classe por função----------------------------------------------

// function criaCachorro(raca, patas, cor){
//   let cachorro = Object.create({})
//   cachorro.raca = raca
//   cachorro.patas = patas
//   cachorro.cor = cor
//   return cachorro
// }

// let pinscher = criaCachorro('pinscher', 4 , 'preto')
// console.log(pinscher)


//-------------------------------------instanciar classe por new----------------------------------------------
// function Cachorro(raca , cor){
//   this.raca = raca
//   this.cor = cor
// }

// dog = new Cachorro('dog', 'braco')
// console.log(dog)

//-------------------------- Utiliza esta forma --------------------------------

// class Cachorro{
//   constructor(cor , nome){
//     this.nome = nome
//     this.cor = cor
//   }
// }

//Cachorro.prototype.pata = 4
//console.log(labrador.pata)

//-----------------------------Symbol-------------------------------------------------

// class Cachorro{
//   constructor(cor , nome){
//     this.nome = nome
//     this.cor = cor
//   }
// }

// let patas = Symbol()
// Cachorro.prototype[patas] = 4 // atribui 4 para a propriedade patas. 
// //Toda classe instanciada vai ter esta propriedade pre definida

// let labrador = new Cachorro('preto', 'Bob') //instanciando o objeto

// console.log(labrador)// {nome: 'Bob', cor: 'preto'} , não aparece a propriedade no objeto

// //formas de acessar a propriedade criada
// console.log(Cachorro.prototype[patas]) //4 
// console.log(labrador[patas]) //4


//----------------------------------get e set-------------------------------------------------------------
// class Cachorro{
//   constructor(cor , nome){
//     this.nome = nome
//     this.cor = cor
//   }

//   get getNome(){
//     return this.nome
//   }

//   set setNome(nome){
//     this.nome = nome
//   }
// }

// let ca = new Cachorro('preto', 'bob')
// ca.setNome = 'max'  //para utilizar é diferente no java, aqui utiliza como propriedade, nao função
// console.log(ca.getNome)

// //----------------------------------Herança-------------------------------------------------------------

// class Mamifero{
//   constructor(patas){
//     this.patas = patas
//   }
// }

// class Cachorro extends Mamifero{
//   constructor(cor , nome , patas){
//     super(patas , patas)//construtor da classe que foi herdada precisa ser primeiro
//     this.nome = nome
//     this.cor = cor
//   }
// }

// let ca = new Cachorro('preto', 'bob', 4)
// console.log(ca)


//----------------------------------------instanceof-------------------------------------------------------
//verificar de quem foi herdado 
// console.log(new Cachorro instanceof Mamifero) //retorna true ou false. verifica se cachorro herdou de mamifero 


//-------------------------------------Exception-----------------------------------------------------

// function saudaçao(nome){
//   if(typeof nome !== 'string'){
//     throw new Error('Insira somente strings') //criando o erro 
//   }else{
//     console.log("Bem vinda " + nome)
//   }
// }

// saudaçao(125)// vai dar erro 
// saudaçao('talia') // certo


//----------------------------------------try catch finnally----------------------------------------------------

// try{                //tenta executar o bloco try
//   let c = a + 2
// }catch(error){      //caputura o erro e exibe o erro ou mensagem 
//   console.log(error)
// }finally{           //executa idependente de ter erro ou nao
//   console.log("Mesmo com erro sou executada")
// }


//---------------------------------------Expressoes regulares----------------------------------------------------

// let reg1 = /[123]/ //verifica o conjunto, cada caracter separado
// console.log(reg1.test('2')) //true
// console.log(reg1.test('1236894'))//true
// console.log(reg1.test('94'))//false
// console.log(reg1.test('ffneif'))//true

// let reg2 = /123/ //verifica a string inteira
// console.log(reg2.test('2')) //fase
// console.log(reg2.test('1236894'))//true

// let reg3 = /[0-9]/ //verifica se tem numeros na string (de 0 a 9 )
// console.log(reg3.test('115')) //true
// console.log(reg3.test('4'))//true
// console.log(reg3.test('105445787875421'))//true
// console.log(reg3.test('asvdr'))//false




//---------------------------------------Caracteres especiais----------------------------------------------------

// const regexPonto = /./ //aceita qualquer coisa menos quebrar linha

// console.log(regexPonto.test('115')) //true
// console.log(regexPonto.test('afafacf4'))//true
// console.log(regexPonto.test(' ')) //true
// console.log(regexPonto.test('dwd'))//true
// console.log(regexPonto.test('\n'))//false

// const regex_d = /\d/ //aceita qualquer expressao que tenha numeros == [0-9]

// console.log(regex_d.test('115')) //true
// console.log(regex_d.test('afafacf452'))//true
// console.log(regex_d.test(' ')) //false
// console.log(regex_d.test('dwd'))//false

// const regex_D = /\D/ //aceita somente expressao que tenha strings (pode ter numeros, desde que tenha letras junto)

// console.log(regex_D.test('115')) //false
// console.log(regex_D.test('afafacf452'))//true
// console.log(regex_D.test(' ')) //true
// console.log(regex_D.test('dwd'))//true tem letras nele

// const regex_s = /\s/ //aceita somente espaços, quebra de linha e tab

// console.log(regex_s.test('115')) //false
// console.log(regex_s.test('afafacf452'))//false
// console.log(regex_s.test(' ')) //true
// console.log(regex_s.test('dwd'))//false
// console.log(regex_s.test('\n')) //true

// const regex_w = /\w/ //aceita somente letras e numeros

// console.log(regex_w.test('115')) //true
// console.log(regex_w.test('afafacf452'))//true
// console.log(regex_w.test(' ')) //false
// console.log(regex_w.test('dwd'))//true
// console.log(regex_w.test('\n')) //false

// const dia = /\d\d/
// console.log(dia.test("2019")) //vai dar true pois tem dois digitos, mas tem a mais que 2, então entra
// console.log(dia.test("2019") && "2019".length == 2) //certificando que seja somente 2 digitos, não pode ter a mais , nem a menos
// console.log(dia.test("talia"))//false
// console.log(dia.test("05")) //true

// const notAB = /[^ab]/ //nega tudo qur tem a e b , vai retornar false
// console.log(notAB.test('ab')) //false
// console.log(notAB.test('a'))//false
// console.log(notAB.test('b'))//false
// console.log(notAB.test('Aqui tem ab'))//true , Tem mais coisas no meio 
// console.log(notAB.test('AB')) //true , maiuscula é diferente das minusculas

// const cep = /\d{5}-\d{3}/ // deve aparecer exatamente 5 numeros , "-" , e depois 3 numeros

// console.log(cep.test('12345-678'))//true
// console.log(cep.test('12-123'))//false
// console.log(cep.test('123465464-3'))//false
// console.log(cep.test('efeef-123'))//false

//-----------------------metodos---------------------------------------
//exec : verificar resultado, porem retorna um objeto com mais detalhes

// const digitos = /\d+/ 

// console.log(digitos.exec('abc100'))// retorna ['100', index: 3, input: 'abc100', groups: undefined]

// match:
// const frase = 'estudar10'.match(/\d+/) //verifica direto na declaração das condições
// console.log(frase)// retorna ['10', index: 7, input: 'estudar10', groups: undefined]

//choice pattern

// let frutas = /\d+ (banana|maçã|laranja)/

// console.log(frutas.test('10 banana'))//true
// console.log(frutas.test('10 abacate'))//false
// console.log(frutas.test(' banana'))//false
// console.log(frutas.test('10 laranja'))//true



//======================================Validar inputs================================================
//------------------------validar dominio-------------------------------------------------------
// const validaDominio = /www.\w+\.com|.com.br/ //deve iniciar com: "www." , depois ter cadeia de caracteres com num e letras , e terminar com ".com" ou ".com.br"

// console.log(validaDominio.test('www.google.com'))//true
// console.log(validaDominio.test('www.google25.com'))//true
// console.log(validaDominio.test('www.youtube.com.br')) //true
// console.log(validaDominio.test('www.google.edu'))//false , nao termina com: ".com e nem .com.br"
// console.log(validaDominio.test('www.4525.com'))//true
// console.log(validaDominio.test('w.google.edu'))//false , nao comeca com www.

// const validaDominio2 = /[?www].\w+\.com|.com.br/ //torna o www. opicional
// console.log(validaDominio2.test('google.com.br'))//true pois o www é opicional

//--------------------------------------validar email---------------------------------------------------

// const validaEmail = /\w+@\w+\.\w+/ //"\. é para dizer que nao é um caractere reservado e sim que queremos escrever ou valida-lo"

// console.log(validaEmail.test("taliamendes@gmail.com"))//true
// console.log(validaEmail.test("taliamendes@gmailcom"))//false , nao tem ponto
// console.log(validaEmail.test("taliamendesgmail.com"))//false , nao tem @

//--------------------------------------validar email---------------------------------------------------

// const validaDataNasc = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/

// console.log(validaDataNasc.test("09/05/8523"))//true
// console.log(validaDataNasc.test("09-05-8523"))//false , faltou a "/"
// console.log(validaDataNasc.test("0/0/853"))//false , nao respeita a quantidade de caracteres

//-----------------------------------Callbacks------------------------------------------- 

//callbacks são funçoes normalmente utilizados para continuar a execução do código após uma operação ser terminada 

//esta é a função callback, pois ela foi utilizada para executar algo assim que foi feito alguma ação(coletar o nome)
// function returnName(nome){
//   console.log('Bem vinda ' + nome)
// }

// //Função coleta o nome e passa para a variavel callback que é retornada para a função callback acima 
// function getName(callback){
//   var nome = 'Talia Mendes'
//   callback(nome)
// }

// getName(returnName) //chama a função de retornar nome, passando a funçao callback como parametro 


//---------------------------------SetTimeout---------------------------------------------
// console.log("Codigos")

// //esta função so é executada apos atingir 2 segundos.
// setTimeout(function(){
//   console.log("Função callback, so vou entrar em ação após 2 segundos") //esta é a função callback 
// },2000) //tempo me milisegundos

// console.log("Codigos")


//---------------------------------------Promises---------------------------------------------

// let p = Promise.resolve(3+2)

// console.log("outros codigos que será executado")

// console.log(p)

// p.then((value) => {return value + 5})
// .then(value => console.log(value))

//---------------------------------------Promises / Falhas---------------------------------------------

// let p = Promise.resolve(new Error ('foi identificado um erro'))//foi criado um erro para simulação

// console.log('O codigo demais é executado normalmente')

// //aqui quando chamamos o promise que da o erro
// p.then(value => console.log(value)) //tenta executar a promise
// .catch(reason => console.log('Falhou' + reason)) //mostra a erro 


//---------------------------------------Promises /Resolve e Reject---------------------------------------------

// function verificarNumero(num){
//   return new Promise((resolve,reject) => {
//     if(num == 2){
//       resolve(console.log('o numero é ' + num))
//     }else{
//       reject(new Error('Falhou'))
//     }
//   })
// }

//verificarNumero(2)//resolve
// verificarNumero(3)//reject
