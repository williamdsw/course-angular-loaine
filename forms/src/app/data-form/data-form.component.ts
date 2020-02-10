import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit, OnDestroy {

  // FIELDS

  formulario: FormGroup;
  private inscricao: Subscription;
  private postUrl: string;

  // CONSTRUCTOR

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient) {

    this.postUrl = 'https://httpbin.org/post';
  }

  // LIFE CYCLE HOOKS

  ngOnInit() {

    this.inscricao = new Subscription();

    // 1a forma
    /*this.formulario = new FormGroup ({
      nome: new FormControl (null),
      email: new FormControl (null)
    });*/

    // 2a forma
    this.formulario = this.formBuilder.group({
      nome: [null],
      email: [null],
    });

  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  // HELPER FUNCTIONS

  onSubmit() {
    console.log (this.formulario);

    this.inscricao = this.httpClient.post (this.postUrl, JSON.stringify (this.formulario.value)).subscribe (
      response => { console.log (response); },
      error => { console.log (error); });
  }

}
