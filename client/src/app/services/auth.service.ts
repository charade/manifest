import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LoginDto, SignUpDto } from '@dto';
import { HttpPathsEnum } from '@enums';

@Injectable({ providedIn: 'root' })
export class AuthService {
  isAuthenticated = false;

  #httpClient = inject(HttpClient);

  login(credentials: LoginDto) {
    return this.#httpClient.post(HttpPathsEnum.Login, credentials);
  }
  signup(userInfos: SignUpDto) {
    return this.#httpClient.post(HttpPathsEnum.SignUp, userInfos);
  }
}
