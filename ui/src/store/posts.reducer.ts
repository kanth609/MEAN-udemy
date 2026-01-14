import { createReducer, on } from '@ngrx/store';
import { fetchPostSuccess, savePost } from './posts.action';
import { Post } from '../models/post.model';

export const POSTS_FEATURE_KEY = 'posts';

export interface PostsState {
  postList: Post[];
}

const initialState: PostsState = {
  postList: [],
};

export const postsReducer = createReducer(
  initialState,
  on(savePost, (state) => state),
  on(fetchPostSuccess, (state, { posts }) => {
    return {
      ...state,
      postList: posts,
    };
  })
);
