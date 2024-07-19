import { Routes } from '@angular/router';
import { RoutesEnum } from '@enums';

export const routes: Routes = [
  {
    path: RoutesEnum.LOGIN,
    loadComponent: () =>
      import('../pages/login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: RoutesEnum.SIGNUP,
    loadComponent: () =>
      import('../pages/signup/signup.component').then((c) => c.SignupComponent),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: RoutesEnum.LOGIN,
  },
];
