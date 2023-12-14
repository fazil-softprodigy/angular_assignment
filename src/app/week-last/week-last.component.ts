import { Component } from '@angular/core';
import { USER_TYPE } from '../interfaces/users.interfaces';
import { UsersService } from '../services/users.service';
@Component({
  selector: 'app-week-last',
  templateUrl: './week-last.component.html',
  styleUrls: ['./week-last.component.css']
})
export class WeekLastComponent {
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
// import { Component, OnInit } from '@angular/core';
// import { USER_TYPE } from '../interfaces/users.interfaces';
// import { UsersService } from '../services/users.service';

// @Component({
//   selector: 'app-week5',
//   templateUrl: './week5.component.html',
//   styleUrls: ['./week5.component.css','../week4p/week4p.component.css'],
// })
// export class Week5Component implements OnInit {
  
// }
