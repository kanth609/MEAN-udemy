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
