const { buildSchema } = require("graphql");

module.exports = buildSchema(`
type User {
  id: Int!
  email: String!
  fazendas: [Fazenda!]!
}
type AuthData {
  userId: String!
  token: String!
  tokenExpiration: Int!
}
type Fazenda {
  id: Int!
  name: String!
  userId: User!
}

type RootQuery {
  getUser(id: Int!): User!
  login(email: String!, password: String!): AuthData!
  getFazendas(id: Int!): [Fazenda!]!
}

type RootMutation {
  createUser(email: String!, password: String!): AuthData!
  createFazenda(name: String!): Fazenda!
  updateFazenda(id: Int!, name: String!): Boolean!
  deleteFazenda(id: Int!): Boolean!
}

schema {
  query: RootQuery
  mutation: RootMutation
}
`);
