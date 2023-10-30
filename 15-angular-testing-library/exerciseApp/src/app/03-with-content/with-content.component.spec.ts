import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/angular';

import { WithContentComponent } from './with-content.component';

test('it is possible to test ng-content', async () => {
  const projection = 'it should be rendered wrapped in a paragraph!';

  await render(`<app-with-content data-testid="with-ng-content">${projection}</app-with-content>`, {
    declarations: [WithContentComponent],
  });

  // TODO: write an expectation that the given projection is rendered

  // TODO: write an expectation that the given projection is wrapped in a paragraph
});