const { buildSchema } = require("graphql");

module.exports = buildSchema(`
type User {
  id: ID!
  email: String!
  fazendas: [Fazenda!]!
}
type AuthData {
  userId: String!
  token: String!
  tokenExpiration: Int!
}
type Fazenda {
  id: ID!
  nome: String!
  areas: [Area]
}

type Area {
  id: ID!
  nome: String!
  mapa: String!
  fertilidadeSolo: Boolean!
  observacao: String!
  fazendaId: ID!
  capimId: ID!
}

type Capim {
  id: ID!
  tipo: String!
  alturaEntrada: Float!
  alturaSaidaMaiorFert: Float!
  alturaSaidaMenorFert: Float!
}

type Lancamento {
  id: ID!
  data: String!
  tipo: String!
}

type DadosManuais {
  id: ID!
  altura: Float!
  localizacao: String!
  observacoes: String!
}

type DadosAutomaticos {
  id: ID!
  imagem: String!
  observacoes: String!
}

type RootQuery {
  getUser(id: ID!): User
  login(email: String!, password: String!): AuthData!
  getFazendas(userId: ID!): [Fazenda!]
  getAreas(fazendaId: ID!): [Area!]
  getCapims(id: ID!): [Capim!]
  getLancamentos(areaId: ID!): [Lancamento!]
  getFazenda(id: ID!): Fazenda!
  getAllCapims: [Capim]
}

type RootMutation {
  createUser(email: String!, password: String!): User!
  createFazenda(nome: String!): Fazenda!
  updateFazenda(id: ID!, nome: String): Boolean!
  deleteFazenda(id: ID!): Boolean!
  createArea(nome: String!, mapa: String!, fertilidadeSolo: Boolean!, observacao: String!, fazendaId: ID!, capimId: ID): Area!
  updateArea(id: ID!, nome: String, mapa: String, fertilidadeSolo: Boolean, observacao: String, fazendaId: ID, capimId: ID): Boolean!
  deleteArea(id: ID!): Boolean!
  createCapim(tipo: String!, alturaEntrada: Float!, alturaSaidaMaiorFert: Float!, alturaSaidaMenorFert: Float): Capim!
  updateCapim(id: ID!, tipo: String, alturaEntrada: Float, alturaSaidaMaiorFert: Float, alturaSaidaMenorFert: Float): Boolean!
  deleteCapim(id: ID!): Boolean!
  createLancamento(data: String!, tipo: String!, areaId: ID!): Lancamento!
  updateLancamento(id: ID!, data: String, tipo: String, areaId: ID): Boolean!
  deleteLancamento(id: ID!): Boolean!
  createDadosManuais(altura: Float!, localizacao: String!, observacoes: String, lancamentoId: ID): DadosManuais!
  updateDadosManuais(id: ID!, altura: Float!, localizacao: String!, observacoes: String, lancamentoId: ID): Boolean!
  deleteDadosManuais(id: ID!): Boolean!
  createDadosAutomaticos(imagem: String!, observacoes: String!, lancamentoId: ID): DadosAutomaticos!
  updateDadosAutomaticos(id: ID!, altura: Float!, localizacao: String!, observacoes: String, lancamentoId: ID): Boolean!
  deleteDadosAutomaticos(id: ID!): Boolean!
}

schema {
  query: RootQuery
  mutation: RootMutation
}
`);
