import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export const validarQueSeanIguales: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password1 = control.get('password1');
  const password2 = control.get('password2');
  return password1?.value === password2?.value ? null : { 'noSonIguales': true };
};
export const validarQueSeanTamano: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password1 = control.get('password1');
    const password2 = control.get('password2');
    return password1?.value && password2?.value <=6 ? null : { 'noSonTamano': true };
  };
