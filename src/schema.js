// This example demonstrates a simple server with some relational data: Posts and Authors. You can get the posts for a particular author,
// and vice-versa Read the complete docs for graphql-tools here: http://dev.apollodata.com/tools/graphql-tools/generate-schema.html

import {
    makeExecutableSchema,
    addMockFunctionsToSchema
} from 'graphql-tools';
import {
    merge
} from 'lodash';
import mocks from './mocks';

import {
    schema as protoSchema,
    resolvers as protoResolvers
} from './proto';

import {
    schema as domain1Schema,
    resolvers as domain1Resolvers
} from './domain1';

/*
import { schema as phpSchema, resolvers as phpResolvers } from './php/schema';
import { schema as sqlSchema, resolvers as sqlResolvers } from './sql/schema';
*/

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
const schema = [...baseSchema, ...protoSchema, ...domain1Schema /*, ...sqlSchema, ...phpSchema*/ ]

const options = {
    typeDefs: schema,
    resolvers: merge(protoResolvers, domain1Resolvers /*, phpResolvers, sqlResolvers*/ )
}

const executableSchema = makeExecutableSchema(options);

const mockarooni = process.env.MOCK

if (mockarooni && mockarooni !== 'false') {
    addMockFunctionsToSchema({
        schema: executableSchema,
        mocks: mockarooni === 'basic' ? {} : mocks,
        preserveResolvers: (mockarooni === 'mixed')
    })
}

export default executableSchema;
