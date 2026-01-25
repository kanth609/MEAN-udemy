import express from 'express';
import bodyParser from 'body-parser';
import { postsList, updatePosts } from '../routes/posts.api';
import { connect } from 'mongoose';
import {
  connectionString,
  connectionStringCertificate,
  tlsCertFilePath,
} from '../../keys';

const app = express();

connect(connectionString)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(console.error);

app.use(bodyParser.json());

// app.use((req, res, next) => {
//   console.log(`Received request for ${req.url}`);
//   next();
// });

// app.use((_req, res, next) => {
//   // res.setHeader('Access-Control-Allow-Origin', '*');
//   // res.setHeader(
//   //   'Access-Control-Allow-Methods',
//   //   'GET, POST, PUT, PATCH, DELETE, OPTIONS'
//   // );
//   // res.setHeader(
//   //   'Access-Control-Allow-Headers',
//   //   'Content-Type, Authorization, Origin, X-Requested-With, Accept'
//   // );
//   next();
// });

app.post('/api/posts', updatePosts);

app.get('/api/posts', postsList);

export default app;
