import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { GET_USER } from '../interfaces/users.interfaces';


@Component({
  selector: 'app-Assignment2',
  templateUrl: './Assignment2.component.html',
  styleUrls: ['./Assignment2.component.css']
})
export class Assignment2Component {
  constructor(
    private readonly UserService:UsersService
  ){}
  
  users: GET_USER[] = this.UserService.getUsers();
}
