import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {

  @Input() title: string;
  @Input() body: string;
  @Input() cancelButtonText: string = 'Não';
  @Input() okButtonText: string = 'Sim';

  confirmResult: Subject<boolean>;

  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit() {
    this.confirmResult = new Subject ();
  }

  private confirmAndClose (value: boolean) {
    this.bsModalRef.hide ();
    this.confirmResult.next (value);
  }

  onClose() {
    this.confirmAndClose (false);
  }

  onConfirm() {
    this.confirmAndClose (true);
  }
}
