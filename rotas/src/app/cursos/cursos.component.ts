import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit, OnDestroy {

  // FIELDS

  public cursos: any[];
  public pagina: number;
  public inscricao$: Subscription;

  // CONSTRUCTORS

  constructor(
    private cursosService: CursosService,
    private route: ActivatedRoute,
    private router: Router) { }

  // LIFE CYCLE HOOKS

  ngOnInit() {
    this.cursos = this.cursosService.getCursos ();

    this.inscricao$ = this.route.queryParams.subscribe (
      (queryParams: any) => {
        this.pagina = queryParams['pagina'];
      },
      error => { console.log (error); }
    );
  }

  ngOnDestroy() {
    this.inscricao$.unsubscribe ();
  }

  public proximaPagina(): void {
    this.router.navigate (['/cursos'],
      { queryParams: { pagina: ++this.pagina }
    });
  }

}
