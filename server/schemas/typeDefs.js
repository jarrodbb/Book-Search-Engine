//typeDefs defined
//Query defined for user. returns user
//Mutations defined for
//login. returns Auth
//adduser. returns Auth
// saveBook. returns User
//removeBook. returns User
const typeDefs = `
  type User {
    _id: ID!
    username: String
    email: String
    password: String
    savedBooks: [Book]
    bookCount: Int
  }

  type Book {
    bookId: String
    authors: [String]!
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
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(authors:[String], description: String, title: String, bookId: String, image: String, link: String): User
    removeBook(bookId: String): User
  }
`;

module.exports = typeDefs;
