import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { SearchComponent } from './search/search';
import { DetailsComponent } from './details/details';
import { AboutComponent } from './about/about';
import { LoginComponent } from './login/login';
import { SignupComponent } from './signup/signup';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'recipe/:id', component: DetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', redirectTo: '' }
];