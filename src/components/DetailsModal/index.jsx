import { useEffect } from 'react'
import { CloseOutline } from '@styled-icons/evaicons-outline'
import * as Style from './styles'
import getDateFormated from 'utils/helpers/getDateFormated'
import Container from 'components/Container'
import comicDetailsMock from 'utils/tests/comicDetailsMock'

function DetailsModal({ comicDetails, setShowModal }) {
  const [publishedDate] = comicDetailsMock.dates.filter(
    (date) => date.type === 'onsaleDate'
  )
  const { date } = publishedDate
  const creators = comicDetails.creators.items
  const thumbnailUrl = comicDetails.thumbnail.path
  const thumbnailExtention = comicDetails.thumbnail.extension
  const thumbnailSrc = `${thumbnailUrl}.${thumbnailExtention}`
  const thumbnailAlt = comicDetails.title

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') setShowModal(false)
    })
  }, [setShowModal])

  return (
    <>
      <Style.DetailsModal>
        <Container>
          <Style.Wrapper>
            <CloseOutline onClick={() => setShowModal(false)} />
            <Style.Body>
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
                  {comicDetails.description}
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
