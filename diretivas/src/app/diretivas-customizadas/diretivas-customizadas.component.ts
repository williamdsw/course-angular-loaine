import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-customizadas',
  templateUrl: './diretivas-customizadas.component.html',
  styleUrls: ['./diretivas-customizadas.component.scss']
})
export class DiretivasCustomizadasComponent implements OnInit {

  mostrarCursos: boolean;

  constructor() {
    this.mostrarCursos = false;
  }

  ngOnInit() {
  }

  onMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos;
  }

}
