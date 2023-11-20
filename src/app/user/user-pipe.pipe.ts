import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userPipe'
})
export class UserPipe implements PipeTransform {

  transform(value: string): string {
    return value.toUpperCase();
  }
}
