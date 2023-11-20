import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Assignment2 } from '../user/user.component';
import { UserPipe } from '../user/user-pipe.pipe';



@NgModule({
  declarations: [
    Assignment2,
    UserPipe
  ],
  exports: [Assignment2],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
