const { GraphQLServer } = require("graphql-yoga");
//TODO: get resolvers
//TODO: get prisma from prisma-client
const schema = require("./schema.graphql");

//database
let users = [
  {
    name: "ek number"
  }
];

const resolvers = {
  Query: {
    hi: `it should work`,
    users: () => users
  }
};

const server = new GraphQLServer({
  typeDefs: schema,
  resolvers
});

server.start(_ => `working on http://localhost:4000`);
