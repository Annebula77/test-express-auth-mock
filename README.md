# Express TypeScript Authentication Server

This project is a simple backend server built with Express and TypeScript. It is designed to simulate user authentication processes and manage JSON Web Tokens (JWTs) for secure communication.

## Technologies Used

- **[Express](https://expressjs.com/)** - Fast, unopinionated, minimalist web framework for Node.js.
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript with syntax for types.
- **[CORS](https://www.npmjs.com/package/cors)** - Package for providing a Connect/Express middleware that can be used to enable CORS with various options.
- **[Express-validator](https://express-validator.github.io/docs/)** - Middleware that wraps validator.js, a library that provides validator and sanitizer functions.
- **[jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)** - Implementation of JSON Web Tokens for Node.js.

## Getting Started

To get started with this project, clone the repository and install dependencies:

git clone <your-repository-url>
cd <your-project-directory>
npm install

# or

yarn install

## Compiling TypeScript

Before running the server, compile the TypeScript files to JavaScript:

npm run build

# or

yarn build

## Running the Server

To start the server in development mode with hot reloading, use:

npm run dev

# or

yarn dev

For production, first build the project and then start it using:

npm start

# or

yarn start

The server will start running on http://localhost:3001.
