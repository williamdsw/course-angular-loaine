import { Component } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {

  nomeSite: string;
  albuns: string[] = ['The Album', 'David Bowie', 'Star Fleet Project', 'Burn'];

  constructor() {
    this.nomeSite = 'https://williamdsw.github.io/listened-albums/';
  }

}
