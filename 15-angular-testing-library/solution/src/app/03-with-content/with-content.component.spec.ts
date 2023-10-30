import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/angular';

import { WithContentComponent } from './with-content.component';

test('it is possible to test ng-content', async () => {
  const projection = 'it should be rendered wrapped in a paragraph!';

  await render(`<app-with-content data-testid="with-ng-content">${projection}</app-with-content>`, {
    declarations: [WithContentComponent],
  });

  expect(screen.getByText(projection)).toBeInTheDocument();
  expect(screen.getByTestId('with-ng-content').firstChild?.nodeName).toEqual('P')
});