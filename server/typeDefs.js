// The GraphQL schema in string form
const typeDefs = `
  type Query { hello: String }
  type Mutation { writeHello(message: String): String }
`;

module.exports = typeDefs;
