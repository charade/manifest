import { Component, inject, OnDestroy } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {
  ModalsRoutesOutletsEnum,
  MainRoutesEnum,
  AuthenticationViewsEnum,
} from '@enums';
import { AuthenticationViewsTrackerService, AuthService } from '@services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-content',
  standalone: true,
  templateUrl: './login-modal-content.component.html',
  styleUrl: './login-modal-content.component.scss',
  imports: [FormsModule],
})
export class LoginModalContentComponent implements OnDestroy {
  RoutesEnum = MainRoutesEnum;
  ModalsRoutesOutletsEnum = ModalsRoutesOutletsEnum;
  #authenticationViewTrackerService = inject(AuthenticationViewsTrackerService);
  #authService = inject(AuthService);
  #subscription: Subscription[] = [];

  ngOnDestroy(): void {
    this.#subscription.forEach((s) => s.unsubscribe());
  }

  goToSignUpView() {
    this.#authenticationViewTrackerService.setValue(
      AuthenticationViewsEnum.Signup
    );
  }

  login(form: NgForm, email: string, password: string) {
    if (form.invalid) {
      return;
    }

    this.#subscription.push(
      this.#authService.login({ email, password }).subscribe()
    );
  }
}
