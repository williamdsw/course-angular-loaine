import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from './authentication.service';

import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // FIELDS

  public usuario: Usuario = new Usuario ();

  // CONSTRUCTORS

  constructor(private authenticationService: AuthenticationService) { }

  // LIFE CYCLE HOOKS

  ngOnInit() {
  }

  // HELPER FUNCTIONS

  public fazerLogin(): void {
    console.log (this.usuario);
    this.authenticationService.fazerLogin (this.usuario);
  }

}
