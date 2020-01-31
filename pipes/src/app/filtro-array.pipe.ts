import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroArray'
})
export class FiltroArrayPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    // Verifica array ou args
    if (value.length === 0 || args === undefined) {
      return;
    }

    const filter = args.toLocaleString ().toLocaleLowerCase ();
    return value.filter (v => v.toLocaleLowerCase ().includes (filter));
  }

}
