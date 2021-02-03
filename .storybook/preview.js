import { addDecorator } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { withNextRouter } from 'storybook-addon-next-router'

import theme from '../src/styles/theme'
import GlobalStyles from '../src/styles/global'

export const parameters = {
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#1F154A'
      },
      {
        name: 'light',
        value: '#f4F5F7'
      }
    ]
  }
}

addDecorator(withNextRouter())

export const decorators = [
  (Story) => (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    </>
  )
]
