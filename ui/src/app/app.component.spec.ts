import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app.component';
import { Header } from './header/header.component';
import { PostCreate } from './posts/post-create/post-create.component';
import { PostList } from './posts/post-list/post-list.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { POSTS_FEATURE_KEY } from '../store/index';

describe('App', () => {
  let component: App;
  let fixture: ComponentFixture<App>;
  let store: MockStore;

  const initialState = {
    [POSTS_FEATURE_KEY]: {
      postList: [],
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, Header, PostList, PostCreate],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    await fixture.whenStable();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
