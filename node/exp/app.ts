import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log(`Received request for ${req.url}`);
  next();
});

app.use((req, res, next) => {
  res.send('Hello from Express!!');
});

export default app;
