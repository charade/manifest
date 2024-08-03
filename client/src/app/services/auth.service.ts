import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { LoginDto, LoginSuccessDto, SignUpDto } from '@dto';
import { HttpPathsEnum } from '@enums';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  isAuthenticated = false;
  currentUser$: BehaviorSubject<LoginSuccessDto | null> =
    new BehaviorSubject<LoginSuccessDto | null>(null);

  #httpClient = inject(HttpClient);

  login(credentials: LoginDto) {
    return this.#httpClient
      .post<LoginSuccessDto>(HttpPathsEnum.Login, credentials)
      .pipe(tap((userInfo) => this.currentUser$.next(userInfo)));
  }

  signup(userInfos: SignUpDto) {
    return this.#httpClient.post(HttpPathsEnum.SignUp, userInfos);
  }
}
