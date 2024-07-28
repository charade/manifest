/**
 * Track which one between login and sign view
 * to display when user is  authenticating
 * NB: helps to switch between login && sign up views
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthenticationViewsEnum } from '@enums';

@Injectable({ providedIn: 'root' })
export class AuthenticationViewsTrackerService {
  current$ = new BehaviorSubject<AuthenticationViewsEnum>(
    AuthenticationViewsEnum.Login
  );

  setValue(route: AuthenticationViewsEnum) {
    this.current$.next(route);
  }
}
