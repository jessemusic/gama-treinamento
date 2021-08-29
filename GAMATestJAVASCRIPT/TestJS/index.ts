// impostando bibliotecas
import{ parse } from 'query-string';
import * as url from 'url';
import { writeFile } from 'fs';
import { createServer, IncomingMessage, ServerResponse } from 'http';

// Defcinição de portas
const port = 5000;
const server = createServer((request: IncomingMessage ,response: ServerResponse) => {
    // implementar
   
    const urlParse = url.parse(request.url ? request.url : '', true);

    var resposta;
    // receber informações do usuario
    const params = parse(urlParse.search ? urlParse.search : '');

    
    // Criar um usurio
        if(urlParse.pathname == '/criar-usuario'){
        // Salvar as informações do usuário
        writeFile('users/' + params.id + '.txt', JSON.stringify(params), function (err:any) {
            console.log(params);

            if (err) throw err;
            console.log('Saved!');
            resposta = 'usuario criado com sucesso!'
            response.statusCode = 200;
            response.setHeader('Content-Type', 'application/json');
            response.end(resposta);
          });
         
        }  
   
});

// Execução
server.listen(port, () => {
    console.log(`Server running at port ${port}`);
})
