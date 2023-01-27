import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
    selector: 'app-kendo-form',
    templateUrl: './kendo-form.component.html',
    styleUrls: ['./kendo-form.component.scss']
})
export class KendoFormComponent {
    public min: Date = new Date(1917, 0, 1);
    public max: Date = new Date(2020, 4, 31);

    public registerForm: FormGroup = new FormGroup({
        firstName: new FormControl(),
        lastName: new FormControl(),
        birthDate: new FormControl(new Date(2000, 10, 10)),
        email: new FormControl("", Validators.email),
        acceptNews: new FormControl(),
    });

    public submitForm(): void {
        this.registerForm.markAllAsTouched();
    }

    public clearForm(): void {
        this.registerForm.reset();
    }
}
