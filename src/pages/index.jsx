import styled, { css } from 'styled-components'

import Main from './style'
import comicData from 'utils/tests/comicsDataMock'
import Nav from 'components/Nav'
import Search from 'components/Search'
import Container from 'components/Container'

export default function Home() {
  return (
    <Main>
      <Nav />
      <Container>
        <Search comicData={comicData} />
      </Container>
    </Main>
  )
}
