import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'logpage' },
  {
    path: 'logpage',
    loadChildren: () =>
      import('./modules/login/login.module').then((c) => c.LoginModule),
  },
  { path: 'homepage', component: HomepageComponent },
];
