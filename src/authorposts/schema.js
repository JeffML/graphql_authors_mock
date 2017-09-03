import Author from './components/author'
import Post from './components/post'
import Book from './components/book'

const typeDefs =
    `
  # the schema allows the following query:
  extend type Query {
    posts: [Post]
    author(id: Int!): Author
  }

  # this schema allows the following mutation:
  extend type Mutation {
    upvotePost (
      postId: Int!
    ): Post
  }
`;

export default [typeDefs, Author, Post, Book];
