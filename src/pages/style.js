import styled, { css } from 'styled-components'

const Main = styled.main`
  min-height: 100vh;
  padding-bottom: 3rem;

  ${({ theme }) => theme && css`
    background-image: linear-gradient(${theme.color.secondary5}, ${theme.color.secondary4});

    .Nav {
      margin-bottom: ${theme.space['16']};
    }
  `}
`

export default Main
