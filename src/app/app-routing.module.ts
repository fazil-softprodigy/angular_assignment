import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Assignment1Component } from './Assignment1/assignment1.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './login/login.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { Assignment2Component } from './Assignment2/Assignment2.component';
import { Assignment3Component } from './Assignment3/Assignment3.component';
import { DebouncingComponent } from './Debouncing/Debouncing.component';
import { FilterPipeComponent } from './FilterPipe/FilterPipe.component';
import { Assignment5Component } from './Assignment5/Assignment5.component';
import { RoleGuard } from './guard/role.guard';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/Assignment1',
    pathMatch: 'full',
  },
  {
    path: 'Assignment1',
    component: Assignment1Component,
  },
  {
    path: 'Assignment2',
    component: Assignment2Component,
  },
  {
    path: 'Assignment3',
    component: Assignment3Component,
  },
  {
    path: 'FilterPipe',
    component: FilterPipeComponent,
  },
  {
    path: 'Debouncing',
    component: DebouncingComponent,
  },
  {
    path: 'Assignment5',
    component: Assignment5Component,
    canActivate: [AuthGuard]
  } ,
  {
    path: 'Assignment5/:id',
    component: UserDetailsComponent,
    canActivate: [AuthGuard, RoleGuard]
  } 
  ,
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path:'unauthorized',
    component: UnauthorizedComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
