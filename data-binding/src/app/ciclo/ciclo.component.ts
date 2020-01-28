import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit, OnChanges, DoCheck, 
                                       AfterContentInit, AfterContentChecked, AfterViewInit, 
                                       AfterViewChecked, OnDestroy  {

  @Input() valorInicial: number;

  constructor() {
    this.log ('constructor');
    this.valorInicial = 10;
   }

  // Quando inicia
  // Utilizado para fazer chamadas para no servidor
  ngOnInit() {
    this.log ('ngOnInit');
  }

  ngOnChanges() {
    this.log ('ngOnChanges');
  }

  ngDoCheck() {
    this.log ('ngDoCheck');
  }

  ngAfterContentInit() {
    this.log ('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    this.log ('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    this.log ('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    this.log ('ngAfterViewChecked');
  }

  ngOnDestroy() {
    this.log ('ngOnDestroy');
  }

  private log(hook: string) {
    console.log(hook);
  }
}
