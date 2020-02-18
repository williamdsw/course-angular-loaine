import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from './alert-modal.component';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';

enum AlertTypes {
  DANGER = 'danger',
  SUCCESS = 'success',
}

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {

  constructor(private modalService: BsModalService) { }

  private showAlert(message: string, type: AlertTypes, dismissTimetout?: number)
  {
    const bsModalRef: BsModalRef = this.modalService.show (AlertModalComponent)
    bsModalRef.content.type = type;
    bsModalRef.content.message = message;

    if (dismissTimetout) {
      setTimeout (() => bsModalRef.hide (), dismissTimetout);
    }
  }

  showAlertDanger(message: string){
    this.showAlert (message, AlertTypes.DANGER);
  }

  showAlertSuccess(message: string){
    this.showAlert (message, AlertTypes.SUCCESS, 3000);
  }

  showConfirm(title: string, body: string, cancelButtonText?: string, okButtonText?: string) {
    const bsModalRef: BsModalRef = this.modalService.show (ConfirmModalComponent);
    bsModalRef.content.title = title;
    bsModalRef.content.body = body;

    if (cancelButtonText) {
      bsModalRef.content.cancelButtonText = cancelButtonText;
    }

    if (okButtonText) {
      bsModalRef.content.okButtonText = okButtonText;
    }

    return (<ConfirmModalComponent>bsModalRef.content).confirmResult;
  }
}
