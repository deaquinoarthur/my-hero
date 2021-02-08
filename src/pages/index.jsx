import Main from './styles'
import Nav from 'components/Nav'
import Search from 'components/Search'
import Container from 'components/Container'

export default function Home() {
  return (
    <Main background="/img/spider-man.jpeg">
      <Nav />
      <Container>
        <Search />
      </Container>
    </Main>
  )
}
