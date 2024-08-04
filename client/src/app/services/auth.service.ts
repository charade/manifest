import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LoginDto, LoginSuccessDto, SignUpDto } from '@dto';
import { HttpPathsEnum, StorageEnum } from '@enums';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  currentUser$: BehaviorSubject<LoginSuccessDto | null> =
    new BehaviorSubject<LoginSuccessDto | null>(null);

  #httpClient = inject(HttpClient);

  login(credentials: LoginDto) {
    return this.#httpClient
      .post<LoginSuccessDto>(HttpPathsEnum.Login, credentials)
      .pipe(
        tap((userInfo) => {
          this.currentUser$.next(userInfo);
          const JSON_USER = JSON.stringify(userInfo);
          localStorage.setItem(StorageEnum.AUTH_LOCAL, JSON_USER);
        })
      );
  }

  setCurrentUserInfos(user: LoginSuccessDto) {
    this.currentUser$.next(user);
  }

  signup(userInfos: SignUpDto) {
    return this.#httpClient.post(HttpPathsEnum.SignUp, userInfos);
  }
}
