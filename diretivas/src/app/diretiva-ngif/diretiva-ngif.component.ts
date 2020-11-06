import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html'
})
export class DiretivaNgifComponent implements OnInit {

  public cursos: string[] = [
    'Angular 2', 'Java', 'C#', 'PHP', 'C++'
  ];
  public mostrarCursos: boolean;

  constructor() {
    this.mostrarCursos = false;
   }

  ngOnInit() {
  }

  public onMostrarCursos(): void {
    this.mostrarCursos = !this.mostrarCursos;
  }

}
