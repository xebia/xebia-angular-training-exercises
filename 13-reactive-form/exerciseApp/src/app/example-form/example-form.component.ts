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

  // TODO add the exampleForm as a FormGroup with the following fields:
  // - name (string, required)
  // - type (string, required)
  // - user, new FormGroup:
  //   - username (string, required)
  //   - email (string, required, email validation)

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
