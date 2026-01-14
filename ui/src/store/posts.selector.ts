import { createFeatureSelector, createSelector } from '@ngrx/store';
import { POSTS_FEATURE_KEY, PostsState } from './posts.reducer';

const postsFeature = createFeatureSelector<PostsState>(POSTS_FEATURE_KEY);

export const posts = createSelector(postsFeature, (state) => state.postList ?? []);
