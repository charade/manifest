import { Component } from '@angular/core';
import { ModalService } from 'app/modals/modal.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  #modalService: ModalService;
}
