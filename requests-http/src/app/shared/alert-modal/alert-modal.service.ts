import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from './alert-modal.component';

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
}
