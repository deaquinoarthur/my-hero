import { ThemeProvider } from 'styled-components'
import { render } from '@testing-library/react'

import theme from 'styles/theme'

export function renderWithTheme(children) {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)
}
