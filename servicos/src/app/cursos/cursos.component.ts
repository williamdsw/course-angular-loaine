import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  // FIELDS

  cursos: string[] = [];
  cursosService: CursosService;

  // CONSTRUCTOR

  constructor() {
    this.cursosService = new CursosService();
  }

  // LIFE CYCLE HOOKS

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
  }

}
