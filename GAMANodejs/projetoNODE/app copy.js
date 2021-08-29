// Incluíndo a biblioteca do http
const http = require('http');
const url = require('url');
const queryString = require('query-string');

// Definição de endereço hostaname do localhost e porta
const hostname = '127.0.0.1';
const port = 3000;

//Block de regra de negócio(Implementação)
const server = http.createServer((req, res) => {

    // Pegar a pergunta na URL
    const params = queryString.parse(url.parse(req.url, true).search);
  
    //verificar a opergunta e escolher uma resposta
    let resposta;
    if(params.pergunta == 'melhor-filme'){
      resposta = 'Matrix';
    }else if (params.pergunta == 'melhor-tecnologia-backend'){
    
        resposta = 'nodejs';
    }else{
        resposta = 'não sei, desculpe :(';
    }
    // Retornar a resposta escolhida


  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(resposta);
});

// Execução no servidor
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});