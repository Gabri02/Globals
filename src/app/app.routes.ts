import { Routes } from '@angular/router';
import { LogpageComponent } from './components/logpage/logpage.component';
import { HomepageComponent } from './components/homepage/homepage.component';

export const routes: Routes = [
    {path: 'logpage', component: LogpageComponent},
    {path: 'homepage', component: HomepageComponent}
];
