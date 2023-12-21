import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Assignment1',
  templateUrl: './Assignment1.component.html',
  styleUrls: ['./Assignment1.component.css']
})
export class Assignment1Component implements OnInit {

  todayDate: string | undefined;
  message: string[] = ["Wow!", "Nice!", "Oh wow!", "Oh no!", "Yikes!"];


  constructor() { }
  clickMe(): void {
    alert(this.message[Math.floor(Math.random() * this.message.length)]);
  }
  ngOnInit(): void {
    this.todayDate = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
  }

}
