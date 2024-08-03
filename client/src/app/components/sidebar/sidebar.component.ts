import { Component, inject } from '@angular/core';
import { AvatarComponent } from '../avatar/avatar.component';
import { AuthService } from '@services';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [AvatarComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  userInfo = toSignal(inject(AuthService).currentUser$);
}
