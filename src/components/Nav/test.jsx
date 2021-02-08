import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'
import Nav from '.'

describe('<Nav />', () => {
  it('should render the component correctly', function () {
    const { container } = renderWithTheme(<Nav />)
    expect(container).toBeInTheDocument()
  })

  it('should show the logo in the navbar', function () {
    renderWithTheme(<Nav />)
    const logo = screen.getByAltText('Where Is My Hero Logo')
    expect(logo).toBeInTheDocument()
  })
})
