import { createReducer, on } from '@ngrx/store';
import { deletePostSuccess, fetchPostSuccess, savePost, savePostSuccess } from './posts.action';
import { Post } from '../models/post.model';

export interface PostsState {
  postList: Post[];
}

const initialState: PostsState = {
  postList: [],
};

export const postsReducer = createReducer(
  initialState,
  on(savePost, (state) => state),
  on(fetchPostSuccess, (state, { posts }) => ({
    ...state,
    postList: posts,
  })),
  on(savePostSuccess, (state, { posts }) => ({
    ...state,
    postList: posts,
  })),
  on(deletePostSuccess, (state, { posts }) => ({
    ...state,
    postList: posts,
  })),
);
