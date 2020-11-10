import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { FormValidations } from '../form-validations';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit {

  @Input()
  private control: FormControl;

  @Input()
  private label: string;

  constructor() { }

  ngOnInit(): void {}

  public get errorMessage(): any {
    for (const propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        const error = this.control.errors[propertyName];
        return FormValidations.getErrorMessage (this.label, propertyName, error);
      }
    }

    return null;
  }
}
