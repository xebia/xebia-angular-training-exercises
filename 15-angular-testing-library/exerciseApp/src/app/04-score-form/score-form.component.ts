import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-score-form',
  templateUrl: './score-form.component.html',
  styleUrls: ['./score-form.component.css']
})
export class ScoreFormComponent {
  colors = [
    { id: 'R', value: 'Red' },
    { id: 'B', value: 'Blue' },
    { id: 'G', value: 'Green' },
  ];

  form = this.formBuilder.group({
    name: ['', [Validators.required]],
    score: [0, { validators: [Validators.min(1), Validators.max(10)], updateOn: 'blur' }],
    color: [null as string | null, Validators.required],
  });

  constructor(private formBuilder: FormBuilder) { }

  get formErrors() {
    return Object.keys(this.form.controls)
      .map((formKey) => {
        const controlErrors = this.form.get(formKey)?.errors;
        if (controlErrors) {
          return Object.keys(controlErrors).map((keyError) => {
            const error = controlErrors[keyError];
            switch (keyError) {
              case 'required':
                return `${formKey} is required`;
              case 'min':
                return `${formKey} must be greater than ${error.min}`;
              case 'max':
                return `${formKey} must be lesser than ${error.max}`;
              default:
                return `${formKey} is invalid`;
            }
          });
        }
        return [];
      })
      .reduce((errors, value) => errors.concat(value), [])
      .filter(Boolean);
  }
}
