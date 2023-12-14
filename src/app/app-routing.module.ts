import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './login/login.component';
import { UserDetailsComponent } from './user-details/user-details.component';

import { WeekLastComponent } from './week-last/week-last.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'week5',
    component: WeekLastComponent,
    canActivate: [AuthGuard]
  } ,
  {
    path: 'week5/:id',
    component: UserDetailsComponent,
    canActivate: [AuthGuard]
  } 
  ,
  {
    path: 'login',
    component: LoginComponent,
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}