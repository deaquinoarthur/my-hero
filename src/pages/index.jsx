import Nav from '../components/Nav'
import styled, {css} from 'styled-components'

const Main = styled.main`
  min-height: 100vh;

  ${({ theme }) => theme && css`
    background-image: linear-gradient(${theme.color.secondary5}, ${theme.color.secondary4});
  `}
`

export default function Home() {
  return (
    <Main>
      <Nav />
    </Main>
  )
}
