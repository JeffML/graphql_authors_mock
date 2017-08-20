const typeDefs = [
    `
  type Author {
    id: Int!
    firstName: String
    lastName: String
    posts: [Post] # the list of Posts by this author
  }

  type Post {
    id: Int!
    title: String
    author: Author
    votes: Int
  }

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
`
];


export default typeDefs;
