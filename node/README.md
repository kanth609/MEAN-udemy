# Node TS

1. Created this app to understand node js flow of execution.
2. This app is configured in TS V5.7.
   - Install TS by executing `npm i typescript`
   - Initialize the typescript config file using `tsc --init`
   - Install ts-node package to convert the files to JS with auto command, `npm i ts-node`
   - Install the node types, `npm i @types/node`
   - Install nodemon for simplification of execution, `npm i nodemon`
3. now run the application with, `nodemon app.ts`

# NodeJS

1. Create a server from the http using createServer and pass the arrow function.
2. Store the created server in a variable and listen to the server by passing the port number to the `listen` function of created server.
3. Now run the `server.ts` file using `node server.ts` or `nodemon server.ts` to watch out the changes.
4. Open the browser and type `localhost:4201` and see the output.

# ExpressJS

1. Install express using `npm i express`
2. Import express in the `app.js` using `import express from 'express'`
3. Create instance of express in the `app.js` using `const app = express()`
4. As an example, use the `app.use()` function to create a middleware that go through every request.
5. `use` function takes a callback function with 3 parameters, `request`, `response` and `next`.
6. In the callback function, log a message to the console and call the `next()` function to pass the control to the next middleware.
7. Now export the app instance using `export default app;`
8. Now import the app instance in the `server.ts` file using `import app from './app'`
9. Now use the `app.listen()` function to start the server on a specific port.
10. Now run the `server.ts` file using `node server.ts` or `nodemon server.ts` to watch out the changes.
11. Open the browser and type `localhost:4201` and see the output in the console.

### Adding details on implementation of global error handlers and loggers

1. Added a function to normalize the port number in the `server.ts` file. Which checks if the port number is a valid number or not and returns the appropriate value.
2. Added a function to handle the errors and log the specific messages based on the error code. And this function will be binded to the server's `error` event using `server.on('error', Function);`
3. Added a function to log the server listening message and this function will be binded to the server's `listening` event using `server.on('listening', Function);`

### Adding end point to fetch posts

1. Created a folder named `routes` and inside that created a file named `posts.api.ts`
2. When ever when we send back the response from the server, we need to seth the appropriate headers.
   - `res.setHeader('Access-Control-Allow-Origin', '\*');`.
   - `res.setHeader(
'Access-Control-Allow-Methods',
'GET, POST, PUT, PATCH, DELETE, OPTIONS'
);`.
   - `res.setHeader(
'Access-Control-Allow-Headers',
'Content-Type, Authorization, Origin, X-Requested-With, Accept'
);`.

### Accessing data from request body

1. We need to use a middleware to parse the incoming request body.
2. we can use the `body-parser` package to parse the request body.
3. Install the body-parser package using `npm i body-parser`.
4. Import the body parser and use it for all the incoming requests using `app.use(bodyParser.json())`.
5. Also we can decode the url encoded data using `app.use(bodyParser.urlencoded({ extended: true }))`, if required.
