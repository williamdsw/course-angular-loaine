import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss']
})
export class AlertModalComponent implements OnInit {

  @Input() public type = 'success';
  @Input() public message: string;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {}

  public onClose(): void {
    this.bsModalRef.hide ();
  }

}
