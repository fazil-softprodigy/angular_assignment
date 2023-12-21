import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface LOGIN_INTERFACE {
  email: string;
  password: string;
  role: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private readonly router: Router) {}

  loginDetails: LOGIN_INTERFACE = {
    email: '',
    password: '',
    role: 'admin',
  };

  Login() {
    const data = {
      ...this.loginDetails,
      login: true,
    };

    localStorage.setItem('login', JSON.stringify(data));
    window.location.href="/"
  }
}