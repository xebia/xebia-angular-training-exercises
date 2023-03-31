import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-example-form',
  templateUrl: './example-form.component.html',
  styleUrls: ['./example-form.component.css'],
})
export class ExampleFormComponent {
  submitted = false;

  types = ['solid', 'liquid', 'gas'];

  exampleForm = new FormGroup({
    name: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    user: new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
    }),
  });

  get nameControl() {
    return this.exampleForm.get('name')!;
  }

  get typeControl() {
    return this.exampleForm.get('type')!;
  }

  get userControl() {
    return this.exampleForm.get('user')!;
  }

  onSubmit() {
    this.submitted = true;
  }
}
