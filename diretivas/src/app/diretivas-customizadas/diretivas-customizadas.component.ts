import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-customizadas',
  templateUrl: './diretivas-customizadas.component.html'
})
export class DiretivasCustomizadasComponent implements OnInit {

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
