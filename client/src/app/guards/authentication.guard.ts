import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { MainRoutesEnum, StorageEnum } from '@enums';
import { AuthService } from '@services';

export const authenticationGuard: CanActivateFn = () => {
  const router = inject(Router);
  const authService = inject(AuthService);
  const auth = localStorage.getItem(StorageEnum.AUTH_LOCAL);

  if (auth) {
    authService.setCurrentUserInfos(JSON.parse(auth));
    return true;
  }

  router.parseUrl(MainRoutesEnum.Root);
  return false;
};
