import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ModalService } from './services/modal/modal.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  providers: [ModalService],
  template: ` <router-outlet />`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'manifest';
}
