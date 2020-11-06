import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-exemplo',
  templateUrl: './template-exemplo.component.html'
})
export class TemplateExemploComponent implements OnInit {

  public mostrarCursos: boolean;
  public cursos: string[] = [
    'Java', 'C#', 'PHP'
  ];

  constructor() {
    this.mostrarCursos = true;
   }

  ngOnInit() {
  }

}
