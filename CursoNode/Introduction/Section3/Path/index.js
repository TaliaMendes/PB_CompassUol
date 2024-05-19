//===========================================Path=========================================================
//extrair informações sobre caminhos e arquivos

const path = require('path')

const caminho = '/documetos/talia/relatorio.pdf'

console.log(path.dirname(caminho))//caminho para chegar no arquivo(pdf,txt,html etc) : /documetos/talia
console.log(path.basename(caminho))//nome do arquivo : relatorio.pdf
console.log(path.extname(caminho))//extenção do arquivo : .pdf


//---------------------------Path Absoluto-----------------------------------
const path = require('path')

//path absoluto: retorna o caminho até o arquivo passado
console.log(path.resolve('escrevendo.html'))//retorna o caminho ate o arquivo: 

//\Users\Usuario\OneDrive\Documentos\Estagio\CursoNode\Introduction\Section3\escrevendo.html

//formar path: junta os arquivos ou pastas passadas e faz um caminho
const dir = 'relatios'
const arq = 'resumo.pdf'

const finalPath = path.join('/' , 'arquivos' , dir , arq) // vai fazer o caminho, iniciando com o que escreveu : /arquivos/....
console.log(finalPath) //  \arquivos\relatios\resumo.pdf
