import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngfor',
  templateUrl: './diretiva-ngfor.component.html'
})
export class DiretivaNgforComponent implements OnInit {

  public cursos: string[] = [
    'Angular 2', 'Java', 'PhoneGap'
  ];

  constructor() { }

  ngOnInit() {
  }

}
