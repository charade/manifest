import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ModalService } from './modals/modal.service';
import { ModalsRoutesOutletsEnum } from '@enums/routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  providers: [ModalService],
  template: `<router-outlet
    [name]="ModalsRoutesOutletsEnum.Login"
  ></router-outlet>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'manifest';

  ModalsRoutesOutletsEnum = ModalsRoutesOutletsEnum;
  ngOnInit(): void {}
}
