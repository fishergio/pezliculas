import { RouterModule, Routes } from '@angular/router';
import {
  HomeComponent,
  PageComponent,
  SearchComponent
} from './components/index.components';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'movie/:id/:page', component: PageComponent },
  { path: 'search/:text', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true });