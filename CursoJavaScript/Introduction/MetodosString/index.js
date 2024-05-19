//===================================metodos de String=============================================
//------------Trim---------------
let nome = '     Talia \n'

console.log(nome)
let nomesCorrigidos = nome.trim() // remove tudo que nao é string (espaço, quebra de linha)
console.log(nomesCorrigidos)



//----------padStart-------------
let resposta = '56'

let resCerta = resposta.padStart(6,'0')//quantidade de caracters que deve conter. Irá completar a quantidade que falta com '0'

console.log(resCerta)// vai imprimir : 560000



//------------split----------------
let frutas = 'banana,maça,morango,manga'

let vetFrutas = frutas.split(',')// Quando encontra a ',' separa os elementos e coloca em um array  
console.log(vetFrutas) // vai imprimir ["banana", "maça", "morango", "manga"] 



//-------------join-------------------
let frase = 'testando o metodo join'

let separaFrase = frase.split(" ")// precisa do split para fazer o join 
//split separa por espaco as palavras

let fraseUnida = separaFrase.join("!")//vai unir toda a frase com o caracter "!"
console.log(fraseUnida) // vai imprimir: testando!o!metodo!join


//-------------repeat-----------------
let animal = 'gato '

animalRepetido = animal.repeat(10)//repete a palavra gato 10x
console.log(animalRepetido)
