let array = [1, 2, 3, 4, 5, 6]
let array2 = []

for(let i = 0 ; i< array.length ; i++){
    console.log(array[i])
    array2[i] = array[i]
    console.log('------------------')
    console.log( array2[i])
}

//---------------------------------Destructuring em Array---------------------------------------

let nomes = ['Talia', 'Ana', 'João']

let [name1, name2, name3] = nomes

console.log(name1)
console.log(name2)
console.log(name3)


//=======================================metodos de Array==============================================

//-------pop e push----------
let vet = [1, 2, 0, 1, 3]

vet.push(5) //insere no final do array
vet.pop() //remove no final do array
console.log(vet)


//------shift e unshift--------
let vet1 = [1, 2, 0, 1, 3]

vet1.unshift(5) //insere no incio doarray
console.log(vet1)
vet1.shift() //remove no inicio do array


//------indexOf e lastIndexOf----------
let vet2 = [1, 2, 0, 1, 3]

console.log(vet2.indexOf(1))//encotra o indice do elemento no array (no primeiro index que encotrar)
console.log(vet2.lastIndexOf(1))//encotra o indice do elemento no array (no ultimo index que encotrar)


//---------slice----------
let vet3 = [1, 2, 5, 8, 7, 6, 4, 3]
console.log(vet3.slice(0,1))//vai pegar so o primeiro elemento do indice do vetor ex:1
console.log(vet3.slice(0,2))//pega os dois elementos do indice do vetor ex:1 2
console.log(vet3.slice(0))//pega todos os elementos
console.log(vet3.slice(-2))//pega os dois ultimos elementos 
console.log(vet3.slice(-4))//de tras pra frente

//-------------forEach-------------
let vet4 = [1, 2, 5, 8,  7, 6, 4, 3]

vet4.forEach(num => { //num é a variavel que itera sobre os indices, é o 'i' do for 'normal' (voce cria o nome dessa variavel interativa)
  console.log(num)
})


//----------includes-----------
let vet5 = [1, 2, 5, 8, 7, 6, 4, 3]

console.log(vet5.includes(5)) // verifca se tem 5 no vetor , retorna true ou false 


//----------reverse-----------
let vet6 = ['carro', 'casa', 'cidade']
console.log(vet6.reverse())// inverte o conteudo do vetor [cidade, casa, carro]
