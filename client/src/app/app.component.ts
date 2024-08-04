import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ModalService } from './services/modal/modal.service';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent],
  providers: [ModalService],
  template: `
    <div class="main-container">
      <app-sidebar />
      <router-outlet />
    </div>
  `,
})
export class AppComponent {
  title = 'manifest';
  constructor() {}
}
