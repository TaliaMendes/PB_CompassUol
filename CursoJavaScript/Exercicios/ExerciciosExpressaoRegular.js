//-----------------------somente letras maiúsculas--------------------------------------------------
// const maiusculas = /[A-B]/

// console.log(maiusculas.test('dad'))//false
// console.log(maiusculas.test('SASDDA'))//true
// console.log(maiusculas.test('1425'))//false
// console.log(maiusculas.test(' '))//false

//-----------------------------------Validar ID-----------------------------------------------------
// const validarId = /\d+ID\b/

// console.log(validarId.test('554646ID'))//true
// console.log(validarId.test('554646'))//false
// console.log(validarId.test('fdegwege'))//false

//-----------------------------------Validar Marca-----------------------------------------------------
// const validaMarca = /Marca: (Nike|Adidas|Puma)/ 

// console.log(validaMarca.test('Marca: Nike'))//true
// console.log(validaMarca.test('Marca: Puma'))//true
// console.log(validaMarca.test('Marca:'))//false
// console.log(validaMarca.test('Puma'))//false

//-----------------------------------Validar IP-----------------------------------------------------
// const validaIP = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/ //Vai ter de 1 a 3 numeros a cada ponto

// console.log(validaIP.test('127.0.0.1'))//true
// console.log(validaIP.test('1.0'))//false
// console.log(validaIP.test('1256.8.0'))//false
// console.log(validaIP.test('cmedf.lf.klk'))//false

//-----------------------------------Validar nomeUser-----------------------------------------------------
// const validaNome = /^(?=.{3,16}$)[a-z0-9_]/ //(pelo menos 3 e maximo 16 caracteres) [caracters possiveis]

// console.log(validaNome.test('talia_123'))//true
// console.log(validaNome.test('talia'))//true
// console.log(validaNome.test('mfmrekkbpgtkkrfkwopfjeriojer'))//false
// console.log(validaNome.test('11211111111111111'))//false
