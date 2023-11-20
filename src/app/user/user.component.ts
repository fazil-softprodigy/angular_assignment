import { Component, Input } from '@angular/core';

interface User {
  serial_no: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class Assignment2 {
  @Input() users: any;
  // users: User[] = [
  //   { serial_no: 1, name: 'Fazil', email: 'fazil123@gmail.com'},
  //   { serial_no: 2, name: 'Nashra', email: 'nashra123@gmail.com'},
  //   { serial_no: 3, name: 'Amit', email: 'amit123@gmail.com'}
  // ]
}
