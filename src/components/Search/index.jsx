/* eslint-disable no-unused-vars */
import * as Style from './styles'
import { Search as SearchIcon } from '@styled-icons/boxicons-regular/Search'
import Button from 'components/Button'
import DetailsModal from 'components/DetailsModal'
import { useState } from 'react'

function Search({ comicList }) {
  const [showNotFoundMessage, setShowNotFoundMessage] = useState(false)
  const [showModal, setShowModal] = useState(false)

  function handleSearchClick() {}

  return (
    <>
      {showModal && <DetailsModal />}

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
            />
          </label>

          <Button primary onClick={handleSearchClick}>
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
                  <Button primary type="button">
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
