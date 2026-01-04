import { Component, signal } from '@angular/core';
import { Field, form, minLength, required } from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-post-create',
  imports: [MatInputModule, MatCardModule, MatButtonModule, Field],
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.css',
})
export class PostCreate {
  newPostModel = signal({
    title: '',
    content: '',
  });

  newPostForm = form(this.newPostModel, (schema) => {
    required(schema.title, { message: 'Title is required' });
    required(schema.content, { message: 'Content is required' });
    minLength(schema.title, 3, { message: 'Title must be at least 3 characters long' });
  });

  onFormSubmit(event?: Event) {
    event?.preventDefault();
    console.log(this.newPostModel());
    this.newPostForm().reset({
      title: '',
      content: '',
    });
  }
}
