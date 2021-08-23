import express from 'express';
import cors from 'cors';


const  server = express();



server.get('/status', (_, response) => {
    response.send({
        status: 'Okay, agora sim!'
    });
});

const enableCORS = cors({origin: 'http:/localhost:3000'});

server
.options('/authenticate', enableCORS)
.post('/authenticate', enableCORS, express.json(), (request, response) => {
    console.log(
        'E-Mail'.request.body.email,
        'Senha' .request.body.password
        );
        response.send({
            Okay:true,
        });
});



const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOSTNAME = '127.0.0.1';

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server is listening at http://${HOSTNAME}:${PORT}.`);
});