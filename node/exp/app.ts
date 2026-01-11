import express from 'express';
import { postsList } from '../routes/posts.api';

const app = express();

// app.use((req, res, next) => {
//   console.log(`Received request for ${req.url}`);
//   next();
// });

app.use('/api/posts', postsList);

export default app;
