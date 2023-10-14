//Import User model
const { User } = require("../models");
//Import for authentication
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  //Query defined to return user. Context used for authentication
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw AuthenticationError;
    },
  },
//Mutations defined
  Mutation: {
    //Login defined. Pass email and password. Return user and token
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    //Add user defined. Pass username, email and password
    //token created. 
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    //Save a book defined. Pass book information. Context checked for authorisation. return user
    saveBook: async (
      parent,
      { authors, description, title, bookId, image, link },
      context
    ) => {
      console.log("hello");
      if (context.user) {
        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $addToSet: {
              savedBooks: {
                authors,
                description,
                title,
                bookId,
                image,
                link,
              },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
        return user;
      }
      throw AuthenticationError;
    },
    //Remove a book defined. pass in book id. context checked
    removeBook: async (parent, { bookId }, context) => {
      if (context.user) {
        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks: { bookId } } },
          { runValidators: true, new: true }
        );
        return user;
      }
    },
  },
};

module.exports = resolvers;
