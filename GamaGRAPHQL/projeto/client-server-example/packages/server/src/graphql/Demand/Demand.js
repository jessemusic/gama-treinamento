import { gql } from 'apollo-server-express';

export const  typeDefs = gql`
    type Demand {
        id: ID!
        name: String!
        client: Client!
        deadline: String
    }

    extends type Query {
        demand: [Demand]!
    }
`;

export const resolvers = {
    Query: {
        demands: () => [],
    },
};