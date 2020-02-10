import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    // 1a forma
    this.formulario = new FormGroup ({
      nome: new FormControl (null),
      email: new FormControl (null)
    });

    // 2a forma
    this.formulario = this.formBuilder.group ({
      nome: [null],
      email: [null],
    });

  }

}
