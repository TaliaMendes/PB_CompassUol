//define os atributos que um determinado 'obj' deve ter , e pode ser reutilizada ao criar os objetos 

type Users = {
  nome: string,
  idade: number
}

const user: Users = {  //user terá os atributos de Users
  nome: 'talia',
  idade: 24
}

console.log(user)