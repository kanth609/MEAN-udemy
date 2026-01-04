import { Component } from '@angular/core';
import { Header } from './header/header.component';
import { PostList } from './posts/post-list/post-list.component';
import { PostCreate } from './posts/post-create/post-create.component';
@Component({
  selector: 'app-root',
  imports: [Header, PostList, PostCreate],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class App {}
