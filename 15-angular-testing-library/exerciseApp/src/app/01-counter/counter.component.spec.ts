import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/angular'
import { CounterComponent } from './counter.component'

describe('Counter', () => {
  test('should render counter', async () => {
    await render(CounterComponent, {
      componentProperties: { counter: 5 },
    })

    expect(screen.getByText('Current Count: 5')).toBeInTheDocument()
  })

  test('should increment the counter on click', async () => {
    await render(CounterComponent, {
      componentProperties: { counter: 5 },
    })

    fireEvent.click(screen.getByText('+'))

    // TODO: write an expectation that the counter was incremented
  })
})