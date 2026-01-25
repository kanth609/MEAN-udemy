import type { RequestHandler } from 'express';
import { failedPosts, PostModel as Post } from '../models/post.model';

export const updatePosts: RequestHandler = (req, res, _next) => {
  const post = new Post({ title: req.body.title, content: req.body.content });
  console.log('Received post:', post);
  post
    .save()
    .then((createdPost) => {
      res.status(200).json({
        message: 'Post added successfully',
        post: createdPost,
      });
    })
    .catch((err) => failedPosts(res, err));
};

export const postsList: RequestHandler = (_req, res, _next) => {
  Post.find()
    .then((posts) => {
      res.status(200).json({
        posts,
        message: 'Posts fetched successfully!',
      });
    })
    .catch((err) => failedPosts(res, err));
};
