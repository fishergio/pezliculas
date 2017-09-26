import { RouterModule, Routes } from '@angular/router';
import {
  HomeComponent,
  PageComponent,
  SearchComponent
} from './components/index.components';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },  
  { path: 'search/:text', component: SearchComponent },
  { path: 'movie/:id/:page', component: PageComponent },
  { path: 'movie/:id/:page/:search', component: PageComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true });