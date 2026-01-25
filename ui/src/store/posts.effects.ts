import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  deletePost,
  deletePostSuccess,
  fetchPosts,
  fetchPostSuccess,
  savePost,
  savePostSuccess,
} from './posts.action';
import { exhaustMap, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PostResponse } from '../models/post.model';

@Injectable()
export class PostsEffects {
  action$ = inject(Actions);
  http = inject(HttpClient);

  fetchPosts$ = createEffect(() => {
    return this.action$.pipe(
      ofType(fetchPosts),
      exhaustMap(() => {
        return this.http
          .get<PostResponse>(`/api/posts`)
          .pipe(map((response) => fetchPostSuccess({ posts: response.posts })));
      }),
    );
  });

  saveOrUpdatePost$ = createEffect(() => {
    return this.action$.pipe(
      ofType(savePost),
      exhaustMap(({ newPost }) => {
        return this.http
          .post<PostResponse>(`/api/posts`, newPost)
          .pipe(map((res) => savePostSuccess({ posts: res.posts })));
      }),
    );
  });

  deletePost$ = createEffect(() => {
    return this.action$.pipe(
      ofType(deletePost),
      exhaustMap(({ postId }) => {
        return this.http
          .delete<PostResponse>(`/api/posts/${postId}`)
          .pipe(map((res) => deletePostSuccess({ posts: res.posts })));
      }),
    );
  });
}
