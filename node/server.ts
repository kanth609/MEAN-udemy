import http from 'http';

const server = http.createServer((req, res) => {
  console.log(`Received request for ${req.url}`);
  res.end('Hello, World!!');
});

server.listen(process.env.PORT || 4201);
