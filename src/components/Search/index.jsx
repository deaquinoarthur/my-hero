import * as Style from './styles'
import  { Search as SearchIcon } from '@styled-icons/boxicons-regular/Search'
import Button from '../Button'

function Search({ comicData = [] }) {
  return (
    <>
      <Style.InputWrapper>
        <SearchIcon />
        <label>
          <Style.Input
            type="text"
            placeholder="Search your comics..."
            name="search"
            id="search"
          />
        </label>
      </Style.InputWrapper>

      <Style.ComicList>
        <ul>
          {comicData.length > 0 ? comicData.map((comic, index) => (
            <li key={index}>
              <img
                src={comic.imgPath}
                alt={comic.imgAlt}
              />

              <div className="comicInfo">
                <span className="comicInfo__issue">Comic Issue</span>
                <h2 className="comicInfo__title">{comic.title}</h2>
                <p className="comicInfo__description">{comic.variantDescription}</p>
              </div>

              <div className="buttonGroup">
                <Button
                  primary
                  type="button"
                >
                  View Details
                </Button>

                <Button
                  secondary
                  type="button"
                >
                  Select Issue
                </Button>
              </div>
            </li>
          )) : (
            <li className="notFound">We could not find what you were searching for</li>
          )}

        </ul>
      </Style.ComicList>
    </>
  )
}

export default Search
