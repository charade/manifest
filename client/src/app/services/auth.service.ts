import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LoginDto, SignUpDto } from '@dto';

@Injectable({ providedIn: 'root' })
export class AuthService {
  isAuthenticated = false;

  #httpClient = inject(HttpClient);

  login(credentials: LoginDto) {
    return this.#httpClient.post(
      'http://localhost:3000/memo/auth/login',
      credentials
    );
  }

  signup(userInfos: SignUpDto) {
    return this.#httpClient.post(
      'http://localhost:3000/memo/user/signup',
      userInfos
    );
  }
}
