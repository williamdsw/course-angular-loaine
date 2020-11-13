import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html'
})
export class ConfirmModalComponent implements OnInit {

  @Input() public title: string;
  @Input() public body: string;
  @Input() public cancelButtonText = 'Não';
  @Input() public okButtonText = 'Sim';

  public confirmResult$: Subject<boolean>;

  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit() {
    this.confirmResult$ = new Subject ();
  }

  private confirmAndClose(value: boolean): void {
    this.bsModalRef.hide ();
    this.confirmResult$.next (value);
  }

  public onClose(): void {
    this.confirmAndClose (false);
  }

  public onConfirm(): void {
    this.confirmAndClose (true);
  }
}
