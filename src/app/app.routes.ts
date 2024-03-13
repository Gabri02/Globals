import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/' },
  {
    path: 'logpage',
    loadComponent: () =>
      import('./components/logpage/logpage.component').then(
        (mod) => mod.LogpageComponent
      ),
  },
  {
    path: 'homepage',
    loadComponent: () =>
      import('./components/homepage/homepage.component').then(
        (mod) => mod.HomepageComponent
      ),
  },
];
