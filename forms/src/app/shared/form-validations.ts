import { FormArray, FormControl } from '@angular/forms';

export class FormValidations {

    static requiredMinCheckbox(min = 1) {
        const validator = (formArray: FormArray) => {

            const totalChecked = formArray.controls
                .map(v => v.value)
                .reduce((total, current) => current ? total + current : total, 0);
            return totalChecked >= min ? null : { required: true };
        };

        return validator;
    }

    static cepValidator(control: FormControl) {

        const CEP = control.value;
        if (CEP && CEP !== '') {
            const VALIDA_CEP = /^[0-9]{8}$/;
            return VALIDA_CEP.test (CEP) ? null : { cepInvalido: true };
        }

        return null;
    }
}