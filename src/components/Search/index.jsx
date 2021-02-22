/* eslint-disable no-unused-vars */
import * as Style from './styles'
import { Search as SearchIcon } from '@styled-icons/boxicons-regular/Search'
import Button from 'components/Button'
import DetailsModal from 'components/DetailsModal'
import { useState } from 'react'

function Search({
  comicList,
  handleSearchButtonClick,
  handleSearchInputKeyDown,
  noComicsFound
}) {
  const [showNotFoundMessage, setShowNotFoundMessage] = useState(false)
  const [comicDetails, setComicDetails] = useState({})
  const [showModal, setShowModal] = useState(false)
  const [searchInputValue, setSearchInputValue] = useState('')

  function searchInputOnChange(e) {
    setSearchInputValue(e.target.value)
  }

  return (
    <>
      {showModal && (
        <DetailsModal comicDetails={comicDetails} setShowModal={setShowModal} />
      )}
      <Style.SearchInputWrapper>
        <Style.InputGroup>
          <SearchIcon />
          <label>
            <Style.Input
              type="text"
              placeholder="Search your comics..."
              name="search"
              id="search"
              hasIcon
              onChange={(e) => searchInputOnChange(e)}
              onKeyDown={(e) =>
                handleSearchInputKeyDown(
                  e,
                  searchInputValue,
                  setShowNotFoundMessage
                )
              }
            />
          </label>
          <Button
            primary
            onClick={(e) =>
              handleSearchButtonClick(searchInputValue, setShowNotFoundMessage)
            }
          >
            Search
          </Button>
        </Style.InputGroup>
      </Style.SearchInputWrapper>

      <Style.ComicList>
        <ul>
          {comicList &&
            comicList.map((comic, index) => (
              <li key={index}>
                <img
                  src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                  alt={comic.title}
                />
                <div className="comicInfo">
                  <span className="comicInfo__issue">Comic Issue</span>
                  <h2 className="comicInfo__title">{comic.title}</h2>
                  <p className="comicInfo__description">{comic.description}</p>
                </div>
                <div className="buttonGroup">
                  <Button
                    onClick={() => {
                      setComicDetails(comic)
                      setShowModal(true)
                    }}
                    primary
                    type="button"
                  >
                    View Details
                  </Button>
                </div>
              </li>
            ))}
          {showNotFoundMessage && (
            <li className="notFound">
              We could not find what you were searching for
            </li>
          )}
        </ul>
      </Style.ComicList>
    </>
  )
}

export default Search
