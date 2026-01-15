import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetchPosts, fetchPostSuccess, savePost } from './posts.action';
import { exhaustMap, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../environments/environment';
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
          .get<PostResponse>(`${apiUrl}posts`)
          .pipe(map((response) => fetchPostSuccess({ posts: response.posts })));
      })
    );
  });

  // saveOrUpdatePost$ = createEffect(() => {
  //   return this.action$.pipe(
  //     ofType(savePost),
  //     exhaustMap(({ newPost }) => {
  //       return this.http
  //         .post<PostResponse>(`${apiUrl}posts`, newPost)
  //         .pipe(map((response) => fetchPostSuccess({ posts: [] })));
  //     })
  //   );
  // });
}
