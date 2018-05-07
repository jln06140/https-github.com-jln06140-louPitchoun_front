import { ValidationErrors, FormControl, ValidatorFn, FormGroup, FormGroupDirective, NgForm } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material";

export class CustomValidators {

    static childrenEqual: ValidatorFn = (formGroup: FormGroup) => {
        const [firstControlName, ...otherControlNames] = Object.keys(formGroup.controls || {});
        const isValid = otherControlNames.every(controlName => formGroup.get(controlName).value === formGroup.get(firstControlName).value);
        return isValid ? null : { childrenNotEqual: true };
    }
    
    static telephoneNumber(c :FormControl): ValidationErrors{
        const isValidNumber = /^\d{3,3}-\d{3,3}-\d{3,3}$/.test(c.value);
        const message = {
            'telephoneNumber' : {
                'message' : 'numero de telephone non valide'
            }
        };
        return isValidNumber ? null : message;
    }
}

export class ConfirmValidParentMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        return control.parent.invalid && control.touched;
    }
}

export const errorMessages: { [key: string]: string } = {
    matricule: 'Matricule obligatoire',
    email: 'Email must be a valid email address (username@domain)',
    telephone: 'Format telephone non conforme',
    password: 'Password must be between 7 and 15 characters, and contain at least one number and special character',
    confMdp: 'Mot de passe ne correspond pas'
};