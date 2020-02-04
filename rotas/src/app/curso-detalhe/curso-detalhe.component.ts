import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit, OnDestroy {

  // FIELDS

  id: string;
  inscricao: Subscription;

  // CONSTRUCTOR

  constructor(private route: ActivatedRoute) {}

  // LIFE CYCLE HOOKS

  ngOnInit() {
    this.inscricao = this.route.params.subscribe (
      (params: any) => {
        this.id = params['id'];
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
