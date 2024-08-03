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
      import('./views/map/map.component').then((c) => c.MapComponent),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: MainRoutesEnum.Root,
  },
];
