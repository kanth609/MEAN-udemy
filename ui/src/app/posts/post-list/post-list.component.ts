import { Component, signal } from '@angular/core';
import { Post } from '../post.model';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-post-list',
  imports: [MatExpansionModule, MatButtonModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostList {
  posts = signal<Post[]>([
    { id: '1', title: 'First Post', content: "This is the first post's content" },
    { id: '2', title: 'Second Post', content: "This is the second post's content" },
    { id: '3', title: 'Third Post', content: "This is the third post's content" },
  ]);
}
