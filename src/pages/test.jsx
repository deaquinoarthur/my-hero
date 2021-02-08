import { renderWithTheme } from 'utils/tests/helpers'

import Home from '.'

describe('<Home />', () => {
  it('should render the component correctly', function () {
    const { container } = renderWithTheme(<Home />)
    expect(container).toBeInTheDocument()
  })
})
