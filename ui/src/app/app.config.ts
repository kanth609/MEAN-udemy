import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  isDevMode,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { postsReducer } from '../store/posts.reducer';
import { provideEffects } from '@ngrx/effects';
import { PostsEffects } from '../store/posts.effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { POSTS_FEATURE_KEY } from '../store/index';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideStore({ [POSTS_FEATURE_KEY]: postsReducer }),
    provideEffects(PostsEffects),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
