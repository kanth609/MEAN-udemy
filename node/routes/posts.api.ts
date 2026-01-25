import type { RequestHandler } from 'express';
import { failedPosts, PostModel as Post } from '../models/post.model';

export const savePost: RequestHandler = (req, res, _next) => {
  const post = new Post({ title: req.body.title, content: req.body.content });
  console.log('Received post:', post);
  post
    .save()
    .then(async () => {
      res.status(200).json({
        message: 'Post added successfully',
        posts: await Post.find(),
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

export const deletePosts: RequestHandler = (req, res, _next) => {
  const postId = req.params.id;
  Post.deleteOne({ _id: postId })
    .then(async () => {
      res.status(200).json({
        posts: await Post.find(),
        message: 'Post deleted successfully!',
      });
    })
    .catch((err) => failedPosts(res, err));
};
