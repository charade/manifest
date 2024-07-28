import { Routes } from '@angular/router';
import { ModalsRoutesOutletsEnum, MainRoutesEnum } from '@enums';
import { MapComponent } from './views/map/map.component';
import { AuthenticationComponent } from './views/authentication/authentication.component';

export const routes: Routes = [
  {
    path: MainRoutesEnum.Root,
    component: MapComponent,
  },

  {
    path: MainRoutesEnum.Root,
    outlet: ModalsRoutesOutletsEnum.Authentication,
    component: AuthenticationComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: MainRoutesEnum.Root,
  },
];
