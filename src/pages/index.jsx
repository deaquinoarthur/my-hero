import { useState } from 'react'
import axios from 'axios'
import Nav from 'components/Nav'
import Search from 'components/Search'
import Container from 'components/Container'
import { urls } from 'utils/helpers/config'
import Main from './styles'

export default function Home() {
  const [comicList, setComicList] = useState([])

  function isSearchInputNotEmpty(searchInputValue) {
    return searchInputValue !== ''
  }

  function fetchComicList(searchInputValue, setShowNotFoundMessage) {
    if (isSearchInputNotEmpty(searchInputValue)) {
      axios.get(urls.comicListUrl(searchInputValue)).then((response) => {
        const comicListResponse = response.data.data.results
        if (comicListResponse.length === 0) {
          setShowNotFoundMessage(true)
        } else {
          setShowNotFoundMessage(false)
        }
        setComicList(comicListResponse)
      })
    }
  }

  function handleSearchButtonClick(searchInputValue, setShowNotFoundMessage) {
    fetchComicList(searchInputValue, setShowNotFoundMessage)
  }

  function handleSearchInputKeyDown(
    e,
    searchInputValue,
    setShowNotFoundMessage
  ) {
    if (e.key === 'Enter') {
      fetchComicList(searchInputValue, setShowNotFoundMessage)
    }
  }

  return (
    <Main background="/img/spider-man.jpeg">
      <Nav />
      <Container>
        <Search
          comicList={comicList}
          handleSearchButtonClick={handleSearchButtonClick}
          handleSearchInputKeyDown={handleSearchInputKeyDown}
        />
      </Container>
    </Main>
  )
}
