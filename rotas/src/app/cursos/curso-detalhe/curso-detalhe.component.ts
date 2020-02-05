import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit, OnDestroy {

  // FIELDS

  id: number;
  inscricao: Subscription;
  curso: any;

  // CONSTRUCTOR

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cursoService: CursosService) {}

  // LIFE CYCLE HOOKS

  ngOnInit() {
    this.inscricao = this.route.params.subscribe (
      (params: any) => {
        const key = 'id';
        this.id = params[key];
        this.curso = this.cursoService.getCursoById (this.id);

        if (this.curso == null) {
          this.router.navigate (['/cursos/curso-nao-encontrado']);
        }
      }, error => {
        console.log (error);
      }
    );
  }

  // Desinscreve da inscricao criada
  ngOnDestroy() {
    this.inscricao.unsubscribe ();
  }

}
