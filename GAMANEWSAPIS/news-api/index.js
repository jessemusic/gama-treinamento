// Inclusão dos pacotes
const express = require('express')
var mysql = require('mysql')
// Estanciando o express
const app = express()
const port = 3000

// Abrindo conexação com a base dados
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sistemas_noticias'
  })


  connection.connect()
// Serviço de Hello World
app.get('/', (req, res) => {
  res.send('Hello World!, tudo bem aí Jesse')
})

// Serviço de busca de categorias
app.get('/news-api/v1/categorias', (req, res) => {

    // busca de categorias
    connection.query('SELECT id, nome FROM sistemas_noticias.categoria', function (err, rows, fields) {
        if (err) throw err
      
        res.send(rows)
      })

     
  })

  // Serviço de busca de noticias
app.get('/news-api/v1/categorias/:categoriaId/noticias', (req, res) => {
  
    // busca de noticias
    connection.query('SELECT id, titulo FROM sistemas_noticias.noticia where id_categoria = ' + req.params.categoriaId , function (err, rows, fields) {
        if (err) throw err
      
        res.send(rows)
      })

    
  })

    // Serviço de busca uma unica notícia
app.get('/news-api/v1/categorias/:categoriaId/noticias/:noticiaId', (req, res) => {
  
    // busca de noticia
    connection.query('SELECT id, titulo, conteudo FROM sistemas_noticias.noticia where id_categoria =  ' + req.params.categoriaId + ' AND id= ' + req.params.noticiaId, function (err, rows, fields) {
        if (err) throw err
      
        res.send(rows[0])
      })

    
  })
  

// Subindo o servidor e escuta as chamadas
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
