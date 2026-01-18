import { Component, computed, effect, input, signal } from '@angular/core';
import { Post } from '../../../models/post.model';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-post-list',
  imports: [MatExpansionModule, MatButtonModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss',
})
export class PostList {
  posts = input.required<Post[] | undefined>();
  postsList = computed(() => this.posts() ?? []);
}
