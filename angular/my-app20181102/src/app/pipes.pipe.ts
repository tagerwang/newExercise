import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperCaseOk'
})
export class PipesPipe implements PipeTransform {
  transform(value: any, ...args): any {
    for (const arg of args) {
      console.log(value, arg);
    }
    return value.toUpperCase();
  }

}
