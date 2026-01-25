import { Component, inject } from '@angular/core';
import { Header } from './header/header.component';
import { PostList } from './posts/post-list/post-list.component';
import { PostCreate } from './posts/post-create/post-create.component';
import { Store } from '@ngrx/store';
import * as PostsSelectors from '../store/posts.selector';
import * as PostsActions from '../store/posts.action';
import { Post } from '../models/post.model';
@Component({
  selector: 'app-root',
  imports: [Header, PostList, PostCreate],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class App {
  #store = inject(Store);
  posts = this.#store.selectSignal(PostsSelectors.posts);

  onFetchPosts() {
    this.#store.dispatch(PostsActions.fetchPosts());
  }

  onPostSubmit(newPost: Post) {
    this.#store.dispatch(PostsActions.savePost({ newPost }));
  }

  postDelete(postId: string) {
    this.#store.dispatch(PostsActions.deletePost({ postId }));
  }
}
