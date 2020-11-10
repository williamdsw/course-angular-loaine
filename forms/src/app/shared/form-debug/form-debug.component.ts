import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-debug',
  templateUrl: './form-debug.component.html'
})
export class FormDebugComponent implements OnInit {

  @Input() public form;

  constructor() { }

  ngOnInit() {}

}
