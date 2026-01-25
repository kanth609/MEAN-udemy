import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostList } from './post-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

describe('PostList', () => {
  let component: PostList;
  let fixture: ComponentFixture<PostList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostList, MatExpansionModule, MatButtonModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PostList);
    fixture.componentRef.setInput('posts', []);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
