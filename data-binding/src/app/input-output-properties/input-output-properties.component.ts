import { Component } from '@angular/core';

@Component({
  selector: 'app-input-output-properties',
  templateUrl: './input-output-properties.component.html',
  styleUrls: ['./input-output-properties.component.css']
})
export class InputOutputPropertiesComponent {

  nomeDoCurso: string;

  constructor() {
    this.nomeDoCurso = 'Angular';
  }
}
