import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ModalService } from './services/modal/modal.service';
import { ModalsRoutesOutletsEnum } from '@enums';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  providers: [ModalService],
  template: `
    <router-outlet />
    <router-outlet
      [name]="ModalsRoutesOutletsEnum.Authentication"
    ></router-outlet>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'manifest';

  ModalsRoutesOutletsEnum = ModalsRoutesOutletsEnum;
}
