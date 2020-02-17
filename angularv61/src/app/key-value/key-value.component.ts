import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-key-value',
  templateUrl: './key-value.component.html',
  styleUrls: ['./key-value.component.css']
})
export class KeyValueComponent implements OnInit {

  cursos = [
    { id: '1', nome: 'Angular' },
    { id: '2', nome: 'Java' },
  ];

  constructor() { }

  ngOnInit() {
  }

  cursosComparator(a: any, b: any) {
    if (a.key === b.key) {
      return 0;
    }

    return a.key > b.key ? -1 : 1;
  }

}
