import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Assignment2 } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { UserModule } from './user/user.module';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { Week4assignmentComponent } from './week4assignment/week4assignment.component';
import { HttpInterceptors } from './services/http.interceptor';
import { SharedComponent } from './components/shared/shared.component';
import { AdminModuleComponent } from './modules/admin-module/admin-module.component';
import { UserModuleComponent } from './modules/user-module/user-module.component';
import { WeekLastComponent } from './week-last/week-last.component';
import { LoginComponent } from './login/login.component';
import { UserDetailsComponent } from './user-details/user-details.component';
@NgModule({
  declarations: [
    AppComponent,
    // Assignment2,
    HomeComponent,
    NavbarComponent,
    Week4assignmentComponent,
    SharedComponent,
    AdminModuleComponent,
    UserModuleComponent,
    WeekLastComponent,
    LoginComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptors, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
