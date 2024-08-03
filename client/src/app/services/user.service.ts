import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { HttpPathsEnum } from '@enums';
import { UserLoginPositionDto } from 'app/dtos/user-login-position.dto';
import { map, Observable } from 'rxjs';

@Injectable()
export class UserService {
  #http = inject(HttpClient);

  getLoginPosition(): Observable<{ lng: number; lat: number }> {
    return this.#http
      .get<UserLoginPositionDto>(HttpPathsEnum.UserLoginPosition)
      .pipe(map((data) => ({ lng: data.longitude, lat: data.latitude })));
  }
}
