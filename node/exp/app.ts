import express from 'express';
import { postsList, updatePosts } from '../routes/posts.api';

const app = express();

// app.use((req, res, next) => {
//   console.log(`Received request for ${req.url}`);
//   next();
// });

app.use((_req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE, OPTIONS'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, Origin, X-Requested-With, Accept'
  );
  next();
});

app.post('/api/posts', updatePosts);

app.use('/api/posts', postsList);

export default app;
