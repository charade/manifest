import { Routes } from '@angular/router';
import { ModalsRoutesOutletsEnum, RoutesEnum } from '@enums/routes';

export const routes: Routes = [
  {
    path: RoutesEnum.Login,
    outlet: ModalsRoutesOutletsEnum.Login,

    loadComponent: () =>
      import('./modals/components/login/login.component').then(
        (_) => _.LoginComponent
      ),
  },
  {
    path: RoutesEnum.Signup,
    loadComponent: () =>
      import('./modals/components/signup/signup.component').then(
        (_) => _.SignupComponent
      ),
  },
  {
    path: '',
    redirectTo: RoutesEnum.Login,
    pathMatch: 'prefix',
    outlet: ModalsRoutesOutletsEnum.Login,
  },

  {
    path: '**',
    pathMatch: 'full',
    redirectTo: RoutesEnum.Login,
  },
];
