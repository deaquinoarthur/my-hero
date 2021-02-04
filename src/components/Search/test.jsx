import { render, screen } from '@testing-library/react'
import {renderWithTheme} from 'utils/tests/helpers'

import Search from '.'

const comicData = [
  {
    title: 'Spider Man',
    variantDescription: 'Anka Mighty Men Variant',
    imgPath: 'http://i.annihil.us/u/prod/marvel/i/mg/b/a0/600f0ecde5b41.jpg',
    imgAlt: 'Spider Man Issue'
  },
]

describe('<Search />', function() {
  it('should render the component correctly', function() {
    const { container } = renderWithTheme(<Search comicData={[]} />)
    expect(container).toBeInTheDocument()
  })

  it('should show at least one item of the list of comics', () => {
    renderWithTheme(<Search comicData={comicData} />)

    const comicDataLength = comicData.length
    expect(comicDataLength).toBeGreaterThanOrEqual(1)
  })

  it('should show a feedback message when what was searched is not found', () => {
    renderWithTheme(<Search comicData={[]} />)

    const comicDataLength = [].length
    expect(comicDataLength).toBeLessThanOrEqual(0)

    const notFoundText = screen.getByText('We could not find what you were searching for')
    expect(notFoundText).toBeInTheDocument()
  })

  it('should show comic thumbnail', () => {
    renderWithTheme(<Search comicData={comicData} />)

    const img = screen.getByAltText('Spider Man Issue')
    expect(img).toBeInTheDocument()
  })

  it('should show "Comic Issue" text', () => {
    renderWithTheme(<Search comicData={comicData} />)

    const comicIssueText = screen.getByText('Comic Issue')
    expect(comicIssueText).toBeInTheDocument()
  })

  it('should show comic title', () => {
    renderWithTheme(<Search comicData={comicData} />)

    const comicTitle = screen.getByRole('heading', { name: /Spider Man/i })
    expect(comicTitle).toBeInTheDocument()
  })

  it('should show comic description', () => {
    renderWithTheme(<Search comicData={comicData} />)

    const comicDescription = screen.getByText('Anka Mighty Men Variant')
    expect(comicDescription).toBeInTheDocument()
  })

  it('should render "View Details" button', () => {
    renderWithTheme(<Search comicData={comicData} />)

    const buttonViewDetail = screen.getByRole('button', { name: /View Details/i })
    expect(buttonViewDetail).toBeInTheDocument()
  })

  it('should render "Select Issue" button', () => {
    renderWithTheme(<Search comicData={comicData} />)

    const buttonSelectIssue = screen.getByRole('button', { name: /Select Issue/i })
    expect(buttonSelectIssue).toBeInTheDocument()
  })
})
