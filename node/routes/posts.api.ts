import express from 'express';

const posts = [
  {
    id: '1',
    title: 'First Post',
    content: "This is the first post's content",
  },
  {
    id: '2',
    title: 'Second Post',
    content: "This is the second post's content",
  },
  {
    id: '3',
    title: 'Third Post',
    content: "This is the third post's content",
  },
];

const app = express();

export const updatePosts: express.RequestHandler = (req, res, _next) => {
  console.log('Received data:', req.body);
  res.status(200).json({
    message: 'Post Received successfully!',
    post: req.body,
  });
};

export const postsList: express.RequestHandler = (_req, res, _next) => {
  res.status(200).json({
    posts,
    message: 'Posts fetched successfully!',
  });
};
