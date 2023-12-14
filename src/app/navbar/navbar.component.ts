import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  loginDetails: any = {};

  constructor(private readonly router: Router) {}

  logout(): void {
    localStorage.clear();
    window.location.href="/";
  }

  ngOnInit(): void {
    this.loginDetails = JSON.parse(localStorage.getItem('login') || '');
  }
}
