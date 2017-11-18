import { FormGroup } from '@angular/forms';

export class EqualPasswordValidator {
    
    public static validate(firstField, secondField){
        return (f: FormGroup) => {
            return (f.controls && f.controls[firstField].value === f.controls[secondField].value) ? null : {
                passwordEqual: {
                    valid: true
                }
            };
        }
    }
}