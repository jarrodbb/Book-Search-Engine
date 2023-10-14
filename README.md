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

Fullstack application utilising MERN
Apollo graphql

## Table of Contents

- [Installation](#installation)

- [Usage](#usage)

- [license](#license)

## Installation

### Deployed Link

[Book Search](https://book-search-wonder-app-425fb89194be.herokuapp.com/)

For development, the following were required in the package.json,

### Server

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

### Client

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

The user is present with several search results that include the book's 

When the user is NOT logged in, they do not have the ability to save a book

### Sign up

To signup the user is required to input a username, email and password

### Sign in

To signin the user is required to input an email and password

### Search books (loggedin)

### Save Book

### Saved Books

### Remove Book

### Log out

## License

Please refer to the licence in the repo.
