import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/angular';

import { AsyncLoadComponent } from './async-load.component';

describe('AsyncLoadComponent', () => {
  test('use fakeTimer utilities', async () => {
    jest.useFakeTimers();
    await render(AsyncLoadComponent);

    const load = await screen.findByRole('button', { name: /load/i });

    fireEvent.click(load);
    jest.advanceTimersByTime(3_000);

    // TODO: wait for the text 'Loaded' to be in the document 
  });
});
