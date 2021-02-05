import Container from 'components/Container'
import * as Style from './styles'

import getFormatedPublishedDate from 'utils/helpers/getFormatedPublishedDate'

function DetailsModal({ comicDetails = {} }) {
  const [publishedDate] = comicDetails.dates.filter(
    date => date.type === 'onsaleDate'
  )
  const { date } = publishedDate

  const creators = comicDetails.creators.items

  const thumbnailUrl = comicDetails.thumbnail.path
  const thumbnailExtention = comicDetails.thumbnail.extension
  const thumbnailSrc = `${thumbnailUrl}.${thumbnailExtention}`
  const thumbnailAlt = comicDetails.title

  return (
    <Style.DetailsModal>
      <Container>
        <Style.Wrapper>
          <img
            className="details__img"
            src={thumbnailSrc}
            alt={thumbnailAlt}
          />

          <Style.Info>
            <h1>{comicDetails.title}</h1>

            <Style.InfoSection>
              <Style.InfoGroup className="published">
                <h2>Published:</h2>
                <p>{getFormatedPublishedDate(date)}</p>
              </Style.InfoGroup>

              {creators.map((creator, index) => (
                <Style.InfoGroup key={index}>
                  <h2>{creator.role}</h2>
                  <p>{creator.name}</p>
                </Style.InfoGroup>
              ))}
            </Style.InfoSection>

            <Style.Description>
              {comicDetails.description}
            </Style.Description>
          </Style.Info>
        </Style.Wrapper>
      </Container>
    </Style.DetailsModal>
  )
}

export default DetailsModal
