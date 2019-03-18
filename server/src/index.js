const { GraphQLServer } = require("graphql-yoga");
//TODO: get prisma from prisma-client\
const { prisma } = require("./generated/prisma-client");
//TODO: get resolvers
const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const Link = require("./resolvers/Link");
const User = require("./resolvers/User");

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers: {
    Query,
    Mutation,
    Link,
    User
  },
  context: req => {
    return {
      ...req,
      prisma
    };
  }
});

server.start(_ => console.log(`working on http://localhost:4000`));
