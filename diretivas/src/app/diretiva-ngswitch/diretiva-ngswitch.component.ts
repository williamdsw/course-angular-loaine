import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngswitch',
  templateUrl: './diretiva-ngswitch.component.html'
})
export class DiretivaNgswitchComponent implements OnInit {

  public aba: string;

  constructor() {
    this.aba = 'home';
  }

  ngOnInit() {
  }

}
