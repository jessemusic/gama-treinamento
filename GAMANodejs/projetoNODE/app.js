// Incluíndo a biblioteca do http
const http = require('http');
const queryString = require('query-string');
const url = require('url');
const fs = require('fs');

// Definição de endereço hostaname do localhost e porta
const hostname = '127.0.0.1';
const port = 3000;

//Block de regra de negócio(Implementação)

    var resposta;
     // Receber informações do usuário
const server = http.createServer((req, res) => {

    const urlParse = url.parse(req.url, true);
    const params = queryString.parse(urlParse.search);
    // Criar um usurio
        if(urlParse.pathname == '/criar-usuario'){
       
       
        
        // Salavar as informações
        fs.writeFile('users/' + params.id + '.txt', JSON.stringify(params), function (err) {
            if (err) throw err;
            console.log('Saved!');
            resposta = 'usuario criado com sucesso!'
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(resposta);
          });
         
        }
        // Selecionar um usuário
        else if(urlParse.pathname == '/selecionar-usuario'){
            fs.readFile('users/' + params.id + '.txt', function(err, data) {
                resposta = data;
                console.log(data);
                resposta = err ? 'Usuario nao encontrado!': resposta;
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(resposta);
               
              });
        }
       

    

    // Remover umm usuário
    else if(urlParse.pathname == '/deletar-usuario'){
            fs.unlink('users/' + params.id + '.txt', function (err) {
               
                console.log('File deleted!');
                resposta = err ? 'Usuario nao encontrado!': 'usuario removido com sucesso jesesse!';
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(resposta);
              });         
    }
    // Pesquisa por um usuário (Buscar um usuário)
    


 
});

// Execução no servidor
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//http://127.0.0.1:3000/selecionar-usuario?id=5
//http://127.0.0.1:3000/deletar-usuario?id=5