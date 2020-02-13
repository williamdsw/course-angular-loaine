import { FormArray, FormControl, FormGroup } from '@angular/forms';

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

    static equalsTo(otherField: string) {
        const validator = (formControl: FormControl) => {

            // Caso campo nao for informado
            if (otherField == null) {
                throw new Error ('É necessário informar um campo.');
            }

            const root = (<FormGroup> formControl.root);

            // Caso campo ou root formGroup nao forem renderizados
            if (!formControl.root || !root.controls) {
                return null;
            }

            const field = root.get (otherField);

            // Caso campo for invalido
            if (!field) {
                throw new Error ('É necessário informar um campo válido.')
            }

            // Caso valores dos campos forem diferentes
            if (field.value !== formControl.value) {
                return { equalsTo : otherField };
            }

            return null;
        };

        return validator;
    }
}