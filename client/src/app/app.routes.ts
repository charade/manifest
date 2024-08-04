import { Routes } from '@angular/router';
import { MainRoutesEnum } from '@enums';
import { authenticationGuard } from '@guards';
import { AuthenticationComponent } from './views/authentication/authentication.component';

export const routes: Routes = [
  {
    path: MainRoutesEnum.Root,
    loadComponent: () => AuthenticationComponent,
  },
  {
    path: MainRoutesEnum.Profile,
    canActivate: [authenticationGuard],
    loadComponent: () =>
      import('./views/profile/profile.component').then(
        (c) => c.ProfileComponent
      ),
  },
  {
    path: MainRoutesEnum.Feed,
    canActivate: [authenticationGuard],
    loadComponent: () =>
      import('./views/feed/feed.component').then((c) => c.FeedComponent),
  },
  {
    path: MainRoutesEnum.Groups,
    canActivate: [authenticationGuard],
    loadComponent: () =>
      import('./views/groups/groups.component').then((c) => c.GroupsComponent),
  },
  {
    path: MainRoutesEnum.Memos,
    canActivate: [authenticationGuard],
    loadComponent: () =>
      import('./views/memos/memos.component').then((c) => c.MemosComponent),
  },
  {
    path: MainRoutesEnum.Preferences,
    canActivate: [authenticationGuard],
    loadComponent: () =>
      import('./views/preferences/preferences.component').then(
        (c) => c.PreferencesComponent
      ),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: MainRoutesEnum.Root,
  },
];
