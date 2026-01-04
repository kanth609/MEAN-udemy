import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private _isDark = signal(false);

  constructor() {
    this.load();
  }

  private load() {
    const stored = localStorage.getItem('theme');
    if (stored) {
      this.setDark(stored === 'dark');
    } else if (window.matchMedia) {
      this.setDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }

  setDark(isDark: boolean) {
    this._isDark.set(isDark);
    document.documentElement.classList.toggle('dark', isDark);
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch {}
  }

  toggle() {
    this.setDark(!this.isDark());
  }

  isDark() {
    return this._isDark();
  }
}
