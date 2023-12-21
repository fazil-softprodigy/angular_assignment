import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Assignment1Component } from './Assignment1/assignment1.component';
import {Assignment2Component } from './Assignment2/Assignment2.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Assignment3Component } from './Assignment3/Assignment3.component';
import { UserslistComponent } from './userslist/userslist.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { FilterPipeComponent } from './FilterPipe/FilterPipe.component';
import { HttpInterceptors } from './services/http.interceptor';
import { searchByEmailPipe } from './userslist/user-search-by-name.pipe';
import { DebouncingComponent } from './Debouncing/Debouncing.component';
import { Assignment5Component } from './Assignment5/Assignment5.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    Assignment1Component,
    Assignment2Component,
    NavbarComponent,
    Assignment3Component,
    UserslistComponent,
    FooterComponent,
    FilterPipeComponent,
    searchByEmailPipe,
    DebouncingComponent,
    Assignment5Component,
    UserDetailsComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptors, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
