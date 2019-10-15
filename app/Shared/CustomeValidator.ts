import { AbstractControl } from "@angular/forms";

export class CustomeValidator {
    static EmailDomain(emailDomain1: string) {
        return (control: AbstractControl): { [key: string]: any } | null => {
            const email: string = control.value;
            const emailDomain = email.substring(email.lastIndexOf('@') + 1);
            if (email === '' || emailDomain.toLowerCase() === emailDomain1.toLowerCase()) {
                return null;
            }
            return { "emailDomain": true };
        };
    }
}