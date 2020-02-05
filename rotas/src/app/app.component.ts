import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from './login/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'rotas';
  mostrarMenu: boolean;

  constructor(private authenticationService: AuthenticationService) {
    this.mostrarMenu = false;
  }

  ngOnInit(): void {
    this.authenticationService.mostrarMenuEmitter.subscribe (
      mostrar => this.mostrarMenu = mostrar
    );
  }
}
