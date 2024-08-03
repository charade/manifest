import { Routes } from '@angular/router';
import { MainRoutesEnum } from '@enums';

export const routes: Routes = [
  {
    path: MainRoutesEnum.Root,
    loadComponent: () =>
      import('./views/authentication/authentication.component').then(
        (c) => c.AuthenticationComponent
      ),
  },
  {
    path: MainRoutesEnum.Profile,
    loadComponent: () =>
      import('./views/profile/profile.component').then(
        (c) => c.ProfileComponent
      ),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: MainRoutesEnum.Root,
  },
];
