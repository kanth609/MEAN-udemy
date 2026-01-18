import { createReducer, on } from '@ngrx/store';
import { fetchPostSuccess, savePost, savePostSuccess } from './posts.action';
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
  on(savePostSuccess, (state, { newPost }) => ({
    ...state,
    postList: [...state.postList, { ...newPost, id: String(state.postList.length + 1) }],
  }))
);
