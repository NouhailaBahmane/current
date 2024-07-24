import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstNameFormat'
})
export class FirstNameFormatPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if(!value){
      return value;
    }
    return value.charAt(0).toUpperCase()+value.substring(1).toLocaleLowerCase();
  }

}
