const typeDefs = `
  type User {
    _id: ID!
    name: String
    email: String
    password: String
    savedBooks: [Book]!
    bookCount: int
  }

  type Book {
    bookId: ID!
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
 
    
  }

  type Mutation {
    
  }
`;

module.exports = typeDefs;
