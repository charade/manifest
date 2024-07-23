import { Routes } from '@angular/router';
import { ModalRoutesOutlet, RoutesEnum } from './enums/routes';
import { LoginComponent } from './modals/components/login/login.component';

export const routes: Routes = [
  {
    path: RoutesEnum.Modal.Root,
    loadComponent: () =>
      import('./modals/modal.component').then((c) => c.ModalComponent),
    children: [
      {
        path: RoutesEnum.Main.Login,
        loadComponent: () =>
          import('./modals/components/login/login.component').then(
            (_) => _.LoginComponent
          ),
      },
      {
        path: RoutesEnum.Main.Signup,
        loadComponent: () =>
          import('./modals/components/signup/signup.component').then(
            (_) => _.SignupComponent
          ),
      },
      { path: '', redirectTo: RoutesEnum.Main.Login, pathMatch: 'full' },
      {
        path: '**',
        loadComponent: () =>
          import('./modals/components/login/login.component').then(
            (_) => _.LoginComponent
          ),
      },
    ],
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: RoutesEnum.Modal.Root,
  },
];
