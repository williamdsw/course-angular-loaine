import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html'
})
export class DataBindingComponent {

  public url = 'http://loaine.com';
  public cursoAngular = true;
  public ulrImagem = 'https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U';

  constructor() { }

  public getValor(): number {
    return 1;
  }

  public getCurtirCurso(): boolean {
    return true;
  }
}
