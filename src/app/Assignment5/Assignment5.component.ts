import { Component, OnInit } from '@angular/core';
import { USER_TYPE } from '../interfaces/users.interfaces';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-Assignment5',
  templateUrl: './Assignment5.component.html',
  styleUrls: ['./Assignment5.component.css','../FilterPipe/FilterPipe.component.css'],
})
export class Assignment5Component implements OnInit {
  constructor(private readonly userService: UsersService) {}

  allUsers: USER_TYPE[] = [];
  isLoading: boolean = false;

  ngOnInit(): void {
    this.isLoading = true;
    this.userService.getAllUsers().subscribe((response: USER_TYPE[]) => {
      this.isLoading = false;
      this.allUsers = response;
    });
  }
}
