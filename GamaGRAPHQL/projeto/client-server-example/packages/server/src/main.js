import express from 'express';

import { ApolloServer , gql} from 'apollo-server-express';
import  typeDefs  from './graphql/typeDefs';


const  app = express();

const server = new ApolloServer({
    typeDefs: typeDefs,
   resolvers: {
       Query: {
           demands: () => [],
       },
   },
});

server.applyMiddleware({
    app,
    cors: {
        origin: 'http:/localhost:3000'
    },
})

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOSTNAME = '127.0.0.1';

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server is listening at http://${HOSTNAME}:${PORT}.`);
});
