import { Component, computed, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonToggleModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class Header {
  private theme = inject(ThemeService);
  isDark = computed(() => this.theme.isDark());

  toggleTheme() {
    this.theme.toggle();
  }
}
