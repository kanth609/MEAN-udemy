import { Component, output, signal } from '@angular/core';
import { FormField, form, minLength, required } from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { NewPost } from '../../../models/new-post.model';

@Component({
  selector: 'app-post-create',
  imports: [MatInputModule, MatCardModule, MatButtonModule, FormField],
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.css',
})
export class PostCreate {
  fetchPosts = output<void>();
  postSubmit = output<NewPost>();

  newPostModel = signal<NewPost>({
    title: '',
    content: '',
  });

  newPostForm = form(this.newPostModel, (schema) => {
    required(schema.title, { message: 'Title is required' });
    required(schema.content, { message: 'Content is required' });
    minLength(schema.title, 3, { message: 'Title must be at least 3 characters long' });
  });

  ngOnInit() {
    this.fetchPosts.emit();
  }

  onFormSubmit(event?: Event) {
    event?.preventDefault();
    this.postSubmit.emit(this.newPostModel());
    this.newPostForm().reset({
      title: '',
      content: '',
    });
  }
}
