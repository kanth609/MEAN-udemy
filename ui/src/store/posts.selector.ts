import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostsState } from './posts.reducer';
import { POSTS_FEATURE_KEY } from './index';

const postsFeature = createFeatureSelector<PostsState>(POSTS_FEATURE_KEY);

export const posts = createSelector(postsFeature, (state) => state.postList ?? []);
