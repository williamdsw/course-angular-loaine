import { FormArray } from '@angular/forms';

export class FormValidations {

    static requiredMinCheckbox (min = 1) {
        const validator = (formArray: FormArray) => {
          /* // estruturada
          const values = formArray.controls;
          let totalChecked = 0;
    
          for (let index = 0; index < values.length; index++) {
            if (values[index].value) {
              totalChecked++;
            }
          } */
    
          // funcional
          const totalChecked = formArray.controls
                                        .map (v => v.value)
                                        .reduce ((total, current) => current ? total + current : total, 0);
          return totalChecked >= min ? null : { required: true };
        };
    
        return validator;
      }
}