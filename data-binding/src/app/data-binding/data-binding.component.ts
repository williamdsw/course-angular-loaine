import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  url = 'http://loaine.com';
  cursoAngular = true;
  ulrImagem = 'https://i.picsum.photos/id/200/400/300.jpg';

  constructor() { }

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }
}
