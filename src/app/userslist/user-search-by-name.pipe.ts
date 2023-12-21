import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByEmail',
  pure: true,
})
export class searchByEmailPipe implements PipeTransform {
  transform(value: any[], search: string): any[] {
    const regex = new RegExp(search.toLowerCase(), 'i');;
    const filteredData = value.filter((e) => regex.test(e.email.toLowerCase()));
    
    return filteredData;
  }
}
