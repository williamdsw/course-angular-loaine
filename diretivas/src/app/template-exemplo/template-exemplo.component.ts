import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-exemplo',
  templateUrl: './template-exemplo.component.html',
  styleUrls: ['./template-exemplo.component.scss']
})
export class TemplateExemploComponent implements OnInit {

  mostrarCursos: boolean;
  cursos: string[] = ['Java', 'C#', 'PHP'];

  constructor() {
    this.mostrarCursos = true;
   }

  ngOnInit() {
  }

}
