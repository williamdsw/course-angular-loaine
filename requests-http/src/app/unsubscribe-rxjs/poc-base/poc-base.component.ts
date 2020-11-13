import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-poc-base',
  templateUrl: './poc-base.component.html'
})
export class PocBaseComponent implements OnInit {

  @Input() public nome: string;
  @Input() public valor: string;
  @Input() public estilo: string;

  constructor() { }

  ngOnInit() {}

}
