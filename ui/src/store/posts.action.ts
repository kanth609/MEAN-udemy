import { createAction, props } from '@ngrx/store';
import { Post } from '../models/post.model';
import { POSTS_FEATURE_KEY } from './index';

export const savePost = createAction(`${POSTS_FEATURE_KEY} Save Post`, props<{ newPost: Post }>());

export const savePostSuccess = createAction(
  `${POSTS_FEATURE_KEY} Save Post Success`,
  props<{ newPost: Post }>()
);

export const fetchPosts = createAction(`${POSTS_FEATURE_KEY} Fetch Posts`);

export const fetchPostSuccess = createAction(
  `${POSTS_FEATURE_KEY} Fetch Post Success`,
  props<{ posts: Post[] }>()
);
