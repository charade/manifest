import { Component, inject, OnDestroy } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ModalsRoutesOutletsEnum,
  MainRoutesEnum,
  AuthenticationViewsEnum,
} from '@enums';
import { AuthenticationViewsTrackerService, AuthService } from '@services';
import { Subscription, tap } from 'rxjs';

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
  #router = inject(Router);
  #route = inject(ActivatedRoute);

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
      this.#authService
        .login({ email, password })
        .pipe(
          tap(() => {
            this.#router.navigate([MainRoutesEnum.Feed], {
              relativeTo: this.#route,
            });
          })
        )
        .subscribe()
    );
  }
}
