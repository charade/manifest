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
    path: MainRoutesEnum.Feed,
    canActivate: [authenticationGuard],
    loadComponent: () =>
      import('./views/feed/feed.component').then((c) => c.FeedComponent),
  },
  {
    path: MainRoutesEnum.Octagon,
    canActivate: [authenticationGuard],
    loadComponent: () =>
      import('./views/octagon/octagon.component').then(
        (c) => c.OctagonComponent
      ),
  },
  {
    path: MainRoutesEnum.MyCourses,
    canActivate: [authenticationGuard],
    loadComponent: () =>
      import('./views/my-courses/my-courses.component').then(
        (c) => c.MyCoursesComponent
      ),
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
