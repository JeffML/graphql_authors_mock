import MyLittleType from './components/myLittleType'

const typeDefs =
    `
  # the schema allows the following query:
  extend type Query {
    myLittleType(id: Int!): MyLittleType
  }
`;

export default [typeDefs, MyLittleType];
