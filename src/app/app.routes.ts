import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LogpageComponent } from './components/logpage/logpage.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./components/dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
    children: [
      {
        path: 'logpage',
        loadComponent: () =>
          import('./components/logpage/logpage.component').then(
            (c) => c.LogpageComponent
          ),
      },
      {
        path: 'homepage',
        loadComponent: () =>
          import('./components/homepage/homepage.component').then(
            (c) => c.HomepageComponent
          ),
      },
    ],
  },
];
