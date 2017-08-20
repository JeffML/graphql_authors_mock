// This example demonstrates a simple server with some relational data: Posts and Authors. You can get the posts for a particular author,
// and vice-versa Read the complete docs for graphql-tools here: http://dev.apollodata.com/tools/graphql-tools/generate-schema.html

import {
    makeExecutableSchema,
    addMockFunctionsToSchema
} from 'graphql-tools';

import {
    schema as authorpostsSchema,
    resolvers as authorpostsResolvers
} from './authorposts';

const baseSchema = [
    `
    type Query {
        domain: String
    }
    type Mutation {
        domain: String
    }
    schema {
        query: Query,
        mutation: Mutation
    }`
]

// Put schema together into one array of schema strings and one map of resolvers, like makeExecutableSchema expects
const schema = [...baseSchema, ...authorpostsSchema]

const options = {
    typeDefs: schema,
    resolvers: Object.assign({}, authorpostsResolvers)
}

const executableSchema = makeExecutableSchema(options);

export default executableSchema;
