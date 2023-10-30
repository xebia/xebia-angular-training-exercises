import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { ReactiveFormsModule } from '@angular/forms';

import { ScoreFormComponent } from './score-form.component';

test('is possible to fill in a form and verify error messages', async () => {
  const user = userEvent.setup();
  await render(ScoreFormComponent, {
    imports: [ReactiveFormsModule]
  });

  const nameControl = screen.getByRole('textbox', { name: /name/i });
  const scoreControl = screen.getByRole('spinbutton', { name: /score/i });
  const colorControl = screen.getByRole('combobox', { name: /color/i });
  const errors = screen.getByRole('alert');

  expect(errors).toContainElement(screen.queryByText('name is required'));
  // TODO: write the other error messages expectations

  expect(nameControl).toBeInvalid();
  await user.type(nameControl, 'Tim');
  await user.clear(scoreControl);
  await user.type(scoreControl, '12');
  fireEvent.blur(scoreControl);
  await user.selectOptions(colorControl, 'G');

  expect(screen.queryByText('name is required')).not.toBeInTheDocument();
  // TODO: write the other error messages expectations

  expect(scoreControl).toBeInvalid();
  await user.clear(scoreControl);
  await user.type(scoreControl, '7');
  fireEvent.blur(scoreControl);
  expect(scoreControl).toBeValid();

  // TODO: write an expectation that the errors are not in the document

  expect(nameControl).toHaveValue('Tim');
  // TODO: write the other control values expectations

  const form = screen.getByRole('form');
  expect(form).toHaveFormValues({
    name: 'Tim',
    // TODO: write the other form values expectations
  });
});