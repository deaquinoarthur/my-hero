import { CloseOutline } from '@styled-icons/evaicons-outline'

import * as Style from './styles'
import getDateFormated from 'utils/helpers/getDateFormated'
import Container from 'components/Container'
import comicDetailsMock from 'utils/tests/comicDetailsMock'

function DetailsModal() {
  const [publishedDate] = comicDetailsMock.dates.filter(
    (date) => date.type === 'onsaleDate'
  )
  const { date } = publishedDate

  const creators = comicDetailsMock.creators.items

  const thumbnailUrl = comicDetailsMock.thumbnail.path
  const thumbnailExtention = comicDetailsMock.thumbnail.extension
  const thumbnailSrc = `${thumbnailUrl}.${thumbnailExtention}`
  const thumbnailAlt = comicDetailsMock.title

  return (
    <>
      <Style.DetailsModal>
        <Container>
          <Style.Wrapper>
            <CloseOutline />

            <Style.Body>
              <img
                className="details__img"
                src={thumbnailSrc}
                alt={thumbnailAlt}
              />

              <Style.Info>
                <h1>{comicDetailsMock.title}</h1>

                <Style.InfoSection>
                  <Style.InfoGroup className="published">
                    <h2>Published:</h2>
                    <p>{getDateFormated(date)}</p>
                  </Style.InfoGroup>

                  {creators.map((creator, index) => (
                    <Style.InfoGroup key={index}>
                      <h2>{creator.role}</h2>
                      <p>{creator.name}</p>
                    </Style.InfoGroup>
                  ))}
                </Style.InfoSection>

                <Style.Description>
                  {comicDetailsMock.description}
                </Style.Description>
              </Style.Info>
            </Style.Body>
          </Style.Wrapper>
        </Container>
      </Style.DetailsModal>
    </>
  )
}

export default DetailsModal
