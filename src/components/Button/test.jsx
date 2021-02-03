import { fireEvent, render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Button from '.'

const onClick = jest.fn()

describe('<Button />', () => {
  it('should render the component correctly', () => {
    const { container } = renderWithTheme(<Button />)
    expect(container).toBeInTheDocument()
  })

  it('should render the primary button with the right color', () => {
    renderWithTheme(<Button primary>Primary Button</Button>)

    const button = screen.getByRole('button', { name: /Primary Button/i })
    expect(button).toHaveStyle({ 'background-color': '#ED8153' })
  })

  it('should render the secondary button with the right color', () => {
    renderWithTheme(<Button secondary>Secondary Button</Button>)

    const button = screen.getByRole('button', { name: /Secondary Button/i })
    expect(button).toHaveStyle({ 'background-color': '#5C3FE0' })
  })

  it('should be clicked one time', () => {
    renderWithTheme(<Button primary>Click Me</Button>)

    const button = screen.getByRole('button', { name: /Click Me/i })
    fireEvent.click(button)

    onClick()
    expect(onClick).toBeCalledTimes(1)
  })
})
