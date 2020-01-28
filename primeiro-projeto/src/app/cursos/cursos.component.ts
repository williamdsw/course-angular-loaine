import { Component } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {

  nomeSite: string;
  cursos: string[];

  constructor(private service: CursosService) {
    this.nomeSite = 'https://loaine.training';

    this.cursos = this.service.getCursos ();
  }

}
