import http from 'http';
import app from './exp/app';

const port = process.env.PORT || 4201;

// app.listen(port);
// const server = http.createServer((req, res) => {
//   console.log(`Received request for ${req.url}`);
//   res.end('Hello, World!!');
// });

const server = http.createServer(app);

server.listen(port);
