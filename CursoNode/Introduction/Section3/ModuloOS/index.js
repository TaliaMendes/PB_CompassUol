//===========================================Modulo OS=============================================================
//verificar informaçoes de sistema operacional 
const os = require('os')

console.log(os.cpus()) //quantos CPUs tem na maquina // um monte de objeto com dados 
console.log(os.freemem()) //qunats memoria ram livre : 2045255680
console.log(os.homedir())//qual o diretorio principal da maquina : C:\Users\talia
console.log(os.type()) //qual o tipo de sistema operacional : Windows_NT