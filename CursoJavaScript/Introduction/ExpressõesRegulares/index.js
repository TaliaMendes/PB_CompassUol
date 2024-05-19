let reg1 = /[123]/ //verifica o conjunto, cada caracter separado
console.log(reg1.test('2')) //true
console.log(reg1.test('1236894'))//true
console.log(reg1.test('94'))//false
console.log(reg1.test('ffneif'))//true

let reg2 = /123/ //verifica a string inteira
console.log(reg2.test('2')) //fase
console.log(reg2.test('1236894'))//true

let reg3 = /[0-9]/ //verifica se tem numeros na string (de 0 a 9 )
console.log(reg3.test('115')) //true
console.log(reg3.test('4'))//true
console.log(reg3.test('105445787875421'))//true
console.log(reg3.test('asvdr'))//false



//---------------------------------------Caracteres especiais----------------------------------------------------
const regexPonto = /./ //aceita qualquer coisa menos quebrar linha

console.log(regexPonto.test('115')) //true
console.log(regexPonto.test('afafacf4'))//true
console.log(regexPonto.test(' ')) //true
console.log(regexPonto.test('dwd'))//true
console.log(regexPonto.test('\n'))//false

const regex_d = /\d/ //aceita qualquer expressao que tenha numeros == [0-9]

console.log(regex_d.test('115')) //true
console.log(regex_d.test('afafacf452'))//true
console.log(regex_d.test(' ')) //false
console.log(regex_d.test('dwd'))//false

const regex_D = /\D/ //aceita somente expressao que tenha strings (pode ter numeros, desde que tenha letras junto)

console.log(regex_D.test('115')) //false
console.log(regex_D.test('afafacf452'))//true
console.log(regex_D.test(' ')) //true
console.log(regex_D.test('dwd'))//true tem letras nele

const regex_s = /\s/ //aceita somente espaços, quebra de linha e tab

console.log(regex_s.test('115')) //false
console.log(regex_s.test('afafacf452'))//false
console.log(regex_s.test(' ')) //true
console.log(regex_s.test('dwd'))//false
console.log(regex_s.test('\n')) //true

const regex_w = /\w/ //aceita somente letras e numeros

console.log(regex_w.test('115')) //true
console.log(regex_w.test('afafacf452'))//true
console.log(regex_w.test(' ')) //false
console.log(regex_w.test('dwd'))//true
console.log(regex_w.test('\n')) //false

const dia = /\d\d/
console.log(dia.test("2019")) //vai dar true pois tem dois digitos, mas tem a mais que 2, então entra
console.log(dia.test("2019") && "2019".length == 2) //certificando que seja somente 2 digitos, não pode ter a mais , nem a menos
console.log(dia.test("talia"))//false
console.log(dia.test("05")) //true

const notAB = /[^ab]/ //nega tudo qur tem a e b , vai retornar false
console.log(notAB.test('ab')) //false
console.log(notAB.test('a'))//false
console.log(notAB.test('b'))//false
console.log(notAB.test('Aqui tem ab'))//true , Tem mais coisas no meio 
console.log(notAB.test('AB')) //true , maiuscula é diferente das minusculas

const cep = /\d{5}-\d{3}/ // deve aparecer exatamente 5 numeros , "-" , e depois 3 numeros

console.log(cep.test('12345-678'))//true
console.log(cep.test('12-123'))//false
console.log(cep.test('123465464-3'))//false
console.log(cep.test('efeef-123'))//false


//----------choice pattern------------

let frutas = /\d+ (banana|maçã|laranja)/

console.log(frutas.test('10 banana'))//true
console.log(frutas.test('10 abacate'))//false
console.log(frutas.test(' banana'))//false
console.log(frutas.test('10 laranja'))//true


//---------------------------------------metodos-------------------------------------------------------------
//exec : verificar resultado, porem retorna um objeto com mais detalhes

const digitos = /\d+/ 

console.log(digitos.exec('abc100'))// retorna ['100', index: 3, input: 'abc100', groups: undefined]

//match:
const frase = 'estudar10'.match(/\d+/) //verifica direto na declaração das condições
console.log(frase)// retorna ['10', index: 7, input: 'estudar10', groups: undefined]



//======================================Exemplos pratico: Validar inputs================================================

//------------------------validar dominio-------------------------------------------------------
const validaDominio = /www.\w+\.com|.com.br/ //deve iniciar com: "www." , depois ter cadeia de caracteres com num e letras , e terminar com ".com" ou ".com.br"

console.log(validaDominio.test('www.google.com'))//true
console.log(validaDominio.test('www.google25.com'))//true
console.log(validaDominio.test('www.youtube.com.br')) //true
console.log(validaDominio.test('www.google.edu'))//false , nao termina com: ".com e nem .com.br"
console.log(validaDominio.test('www.4525.com'))//true
console.log(validaDominio.test('w.google.edu'))//false , nao comeca com www.

const validaDominio2 = /[?www].\w+\.com|.com.br/ //torna o www. opicional
console.log(validaDominio2.test('google.com.br'))//true pois o www é opicional


//--------------------------------------validar email---------------------------------------------------
const validaEmail = /\w+@\w+\.\w+/ //"\. é para dizer que nao é um caractere reservado e sim que queremos escrever ou valida-lo"

console.log(validaEmail.test("taliamendes@gmail.com"))//true
console.log(validaEmail.test("taliamendes@gmailcom"))//false , nao tem ponto
console.log(validaEmail.test("taliamendesgmail.com"))//false , nao tem @


//--------------------------------------validar email---------------------------------------------------
const validaDataNasc = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/

console.log(validaDataNasc.test("09/05/8523"))//true
console.log(validaDataNasc.test("09-05-8523"))//false , faltou a "/"
console.log(validaDataNasc.test("0/0/853"))//false , nao respeita a quantidade de caracteres