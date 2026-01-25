import { Schema, model } from 'mongoose';

interface Post {
  id: string;
  title: string;
  content: string;
}

export interface PostResponse {
  posts: Post[];
  message: string;
}

const postSchema = new Schema<Post>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true, default: '' },
  },
  {
    collection: 'posts',
    toJSON: {
      virtuals: true,
      transform: (_doc, ret) => {
        ret.id = ret._id.toString();
      },
    },
  },
);

export const PostModel = model('Post', postSchema);

export const failedPosts = (res: any, err: any) =>
  res.status(500).json({
    error: err,
    message: 'Fetching posts failed!',
  });
