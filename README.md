# Book-Search-Engine

## Description

![Github licence](http://img.shields.io/badge/license-MIT-blue.svg)
![JavaScript Badge](https://img.shields.io/badge/JavaScript-100%25-yellow.svg)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Apollo-GraphQL](https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

To accomodate the every increasing need to deliver personalised application, this Book search engine has been created. By utilising the Google Book API a user can search and save all the books they desire. Never forget what book you want to read again, just take advantage of this wonderful application

This application allows the user to,

- Sign up 
- Login in 
- Search for books (utilising the Google Books API)
- Save books
- Remove saved books

To ensure a fully functional MERN stack application an Apollo server was setup to use GraphQL queries and Mutations allowing for the ability to fetch and modify data. The appropriate middleware suitable for a graphQL API was accommodated for along with the creation of an Apollo Provider so request can communicate with the Apollo Server.

To deploy this application, Heroku was chosen along with MongoDB database using MongoDB Atlas

Check it out and start saving some books.

[Book Search](https://book-search-wonder-app-425fb89194be.herokuapp.com/)

## Table of Contents

- [Installation](#installation)

- [Usage](#usage)

- [license](#license)

## Installation

### Deployed Link

[Book Search](https://book-search-wonder-app-425fb89194be.herokuapp.com/)

### The Following package.json files were required 

#### Server package.json

```

  "dependencies": {
    "@apollo/server": "^4.7.1",
    "bcrypt": "^5.0.0",
    "express": "^4.17.2",
    "graphql": "^16.6.0",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^7.0.2"
  },
  "devDependencies": {
    "nodemon": "^2.0.6"
  }

```

#### Client package.json

```
  "dependencies": {
    "@apollo/client": "^3.7.14",
    "graphql": "^16.6.0",
    "react": "^18.2.0",
    "bootstrap": "^5.2.3",
    "jwt-decode": "^3.1.2",
    "react-dom": "^18.2.0",
    "react-bootstrap": "^2.7.4",
    "react-router-dom": "^6.11.2"
  },
  "devDependencies": {
    "@types/react": "^18.0.28",
    "@types/react-dom": "^18.0.11",
    "@vitejs/plugin-react": "^4.0.0",
    "eslint": "^8.38.0",
    "eslint-plugin-react": "^7.32.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.3.4",
    "vite": "^4.3.2"
  }
```

### Note:

.gitignore added to ignore node_modules and dist folder

### Technologies Used

<p><a href="https://vitejs.dev/">Vite</a></p>
<p><a href="https://www.apollographql.com/">Apollo</a></p>
<p><a href="https://react.dev/">React</a></p>
<p><a href="https://legacy.reactjs.org/docs/react-dom.html">React-dom</a></p>
<p><a href="https://reactrouter.com/en/main">React-router-dom</a></p>
<p><a href="https://getbootstrap.com/">bootstrap</a></p>
<p><a href="https://eslint.org/">Eslint</a></p>

### Code

[client](https://github.com/jarrodbb/Book-Search-Engine/tree/main/client)

[server](https://github.com/jarrodbb/Book-Search-Engine/tree/main/server)

## Usage

### Search for books

The user is able to search for any book by using the input field.

![homepage-not-loggedin](https://github.com/jarrodbb/Book-Search-Engine/assets/132813348/b61b2339-2a35-4554-9afd-63c19669718a)

The user is present with several search results that include the book's title, author, description, image, and a link to that book on the Google Books site

![puppy-search-not-loggedin](https://github.com/jarrodbb/Book-Search-Engine/assets/132813348/c18a407d-44b4-4a7a-acb9-499db7165ef5)

When the user is NOT logged in, they do not have the ability to save a book

### Sign up

To signup the user is required to input a username, email and password

![sign-up](https://github.com/jarrodbb/Book-Search-Engine/assets/132813348/7c3b5d07-c04b-423f-8713-4b501420ac24)

### Sign in

To sign-in the user is required to input an email and password

The user is validated

![login](https://github.com/jarrodbb/Book-Search-Engine/assets/132813348/070aa7f4-6e99-4a28-bea4-94f6e4fe9824)

### Search books (logged-in)

The user is present with several search results that include the book's title, author, description, image, and a link to that book on the Google Books site

When logged-in, the user is presented with a button `Save This Book`

![puppy-search-loggedin](https://github.com/jarrodbb/Book-Search-Engine/assets/132813348/6448596c-96f2-4265-98b3-ce259c375344)

### Save Book

The user is able to `Save This Book`

Saving the book, adds the book to their profile

Once the book is saved, the user is presented with a message "This book has already been saved!"

![puppy-search-loggedin-saved-some-books](https://github.com/jarrodbb/Book-Search-Engine/assets/132813348/506362ad-5f6f-421a-a37c-7042fac83b26)

### Saved Books

If the user navigates to `See Your Books` they are presented with all the books that have been saved.

A count at the top of the page indicates the number of books saved by the user

The books display the book's title, author, description, image, and a link to that book on the Google Books site

![saved-books](https://github.com/jarrodbb/Book-Search-Engine/assets/132813348/4c8117b8-2711-4198-b646-da5840ecd8f6)

### Remove Book

When the user is viewing their saved books, they are presented with a `Delete this Book!` button enabling them to remove a specific book.

Removing the book removes it from their profile as well as reducing the book count

![deleted-books](https://github.com/jarrodbb/Book-Search-Engine/assets/132813348/f09f5a01-5bd3-40b0-aa3a-dab6ac8e019c)

### Log out

When the user clicks the `Logout` button they are logged out of the site. Logging in again is required to check Authorisation to save books, see saved books or delete books

![logged-out](https://github.com/jarrodbb/Book-Search-Engine/assets/132813348/1328eb5e-603c-4aeb-976a-bddead7a253c)

## License

Please refer to the licence in the repo.
