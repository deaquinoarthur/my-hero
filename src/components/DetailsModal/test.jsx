import { render, screen } from '@testing-library/react'
import getFormatedPublishedDate from 'utils/helpers/getFormatedPublishedDate'

import comicDetails from 'utils/tests/comicDetailsDataMock'
import { renderWithTheme } from 'utils/tests/helpers'
import DetailsModal from '.'

describe('<DetailsModal />', () => {
  beforeEach(() => {
    renderWithTheme(<DetailsModal comicDetails={comicDetails} />)
  })

  it('should render the component correctly', () => {
    const { container } = renderWithTheme(
      <DetailsModal comicDetails={comicDetails} />
    )
    expect(container).toBeInTheDocument()
  })

  it('should receive the comic details', () => {
    const comicDetailsLength = Object.keys(comicDetails).length
    expect(comicDetailsLength).toBeGreaterThanOrEqual(1)
  })

  it('should render the comic thumbnail', () => {
    const comicThumbnail = screen.getByAltText('Iceman (1984) #3')
    expect(comicThumbnail).toBeInTheDocument()
  })

  it('should show comic title', () => {
    const comicTitle = screen.getByRole('heading', { name: /Iceman \(1984\) #3/i })
    expect(comicTitle).toBeInTheDocument()
  })

  it('should show the published data', () => {
    const [publishedDate] = comicDetails.dates.filter(
      date => date.type === 'onsaleDate'
    )
    const { date } = publishedDate

    const publishedAt = screen.getByText(getFormatedPublishedDate(date))
    expect(publishedAt).toBeInTheDocument()
  })

  it('should show the creators role and name', () => {
    const creators = comicDetails.creators.items

    creators.map(creator => {
      const creatorRole = screen.getByText(creator.role)
      expect(creatorRole).toBeInTheDocument()

      const creatorName = screen.getByText(creator.name)
      expect(creatorName).toBeInTheDocument()
    })
  })

  it('should render the comic description', () => {
    const comicDescription = screen.getByText(comicDetails.description)
    expect(comicDescription).toBeInTheDocument()
  })
})
