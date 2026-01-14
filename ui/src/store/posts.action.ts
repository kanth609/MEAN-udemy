import { createAction, props } from '@ngrx/store';
import { NewPost } from '../models/new-post.model';
import { Post } from '../models/post.model';
import { POSTS_FEATURE_KEY } from './posts.reducer';

export const savePost = createAction(
  `${POSTS_FEATURE_KEY} Save Post`,
  props<{ newPost: NewPost }>()
);

export const fetchPosts = createAction(`${POSTS_FEATURE_KEY} Fetch Posts`);

export const fetchPostSuccess = createAction(
  `${POSTS_FEATURE_KEY} Fetch Post Success`,
  props<{ posts: Post[] }>()
);
