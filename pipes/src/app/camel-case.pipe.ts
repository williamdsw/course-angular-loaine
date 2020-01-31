import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase' // seria o seletor
})
export class CamelCasePipe implements PipeTransform {

  // OVERRIDED FUNCTIONS

  transform(value: any, ...args: any[]): any {
    const values = value.split (' ');
    let result = '';

    for (const v of values) {
      result += this.capitalize (v) + ' ';
    }

    return result;
  }

  // HELPER FUNCTIONS

  capitalize(value: string) {
    const first = value.substr (0, 1).toUpperCase ();
    const rest = value.substr (1).toLowerCase ();
    return first + rest;
  }

}
