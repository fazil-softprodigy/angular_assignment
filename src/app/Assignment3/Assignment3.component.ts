import { Component } from '@angular/core';

interface UserForm {
  name: string;
  email: string;
  mobile: string;
  address: string;
  city: string;
  state: string;
  zip: string;
}

@Component({
  selector: 'app-Assignment3',
  templateUrl: './Assignment3.component.html',
  styleUrls: ['./Assignment3.component.css'],
})
export class Assignment3Component {
  Users: UserForm[] = [];
  user : UserForm = {
    name: "",
    email: "",
    mobile: "",
    address: "",
    city: "",
    state: "",
    zip: ""
  }


  onSubmit() {
    this.Users.push({...this.user})
  }
}
