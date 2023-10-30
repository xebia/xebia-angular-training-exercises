import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/angular';
import { createMockWithValues } from '@testing-library/angular/jest-utils';
import userEvent from '@testing-library/user-event';

import { CounterService } from './counter.service';
import { WithProviderComponent } from './with-provider.component';


test('renders the current value and can increment and decrement with a mocked jest-utils service', async () => {
  const user = userEvent.setup();

  let fakeCounterValue = 50;
  const counter = createMockWithValues(CounterService, {
    increment: jest.fn().mockImplementation(() => (fakeCounterValue += 10)),
    decrement: jest.fn().mockImplementation(() => (fakeCounterValue -= 10)),
    value: jest.fn().mockImplementation(() => fakeCounterValue),
  });

  await render(WithProviderComponent, {
    componentProviders: [
      { provide: CounterService, useValue: counter },
    ],
  });

  const incrementControl = screen.getByRole('button', { name: /increment/i });
  const decrementControl = screen.getByRole('button', { name: /decrement/i });
  const valueControl = screen.getByTestId('value');

  // TODO: write the current value expectation

  await user.click(incrementControl);
  await user.click(incrementControl);

  // TODO: write the updated value expectation

  // TODO: decrement the value once

  // TODO: write the updated value expectation
});