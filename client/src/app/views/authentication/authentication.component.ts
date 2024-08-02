import { Component, inject, effect, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from '../../services/modal/modal.service';
import { AuthenticationViewsTrackerService } from '@services';
import { AuthenticationViewsEnum } from '@enums';
import { LoginModalContentComponent } from './login-modal-content/login-modal-content.component';
import { SignUpModalContentComponent } from './sign-up-modal-content/sign-up-modal-content.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  template: '',
  styleUrl: './authentication.component.scss',
  providers: [ModalService],
})
export class AuthenticationComponent implements OnDestroy {
  #modalService = inject(ModalService);
  #authenticationViewsTrackerService = inject(
    AuthenticationViewsTrackerService
  );

  #subscription: Subscription;

  constructor() {
    this.#subscription = this.#authenticationViewsTrackerService.current$
      .pipe()
      .subscribe((view) =>
        this.#modalService.open(
          view === AuthenticationViewsEnum.Login
            ? LoginModalContentComponent
            : SignUpModalContentComponent,
          {
            config: { width: ' 37rem', minHeight: '65rem' },
          }
        )
      );
  }

  ngOnDestroy(): void {
    if (this.#subscription) {
      this.#subscription.unsubscribe();
    }
  }
}
