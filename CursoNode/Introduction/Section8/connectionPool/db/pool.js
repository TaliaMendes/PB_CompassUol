const mysql = require('mysql')

const pool = mysql.createPool({
  connectionLimit: 10, //maximo de conexão no banco de dados 
  host: 'localhost',
  user: 'root', 
  port: 3306,
  password: 'talia9234',
  database: 'nodemysql'
})

module.exports = pool