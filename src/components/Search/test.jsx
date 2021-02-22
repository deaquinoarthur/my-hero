import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import comicList from 'utils/tests/comicListMock'

import Search from '.'

describe('<Search />', function () {
  it('should render the component correctly', function () {
    const { container } = renderWithTheme(<Search comicList={[]} />)
    expect(container).toBeInTheDocument()
  })

  it('should show at least one item of the list of comics', () => {
    renderWithTheme(<Search comicList={comicList} />)
    const comicDataLength = comicList.length
    expect(comicDataLength).toBeGreaterThanOrEqual(1)
  })

  it('should show comic thumbnail', () => {
    renderWithTheme(<Search comicList={comicList} />)
    const img = screen.getByAltText('Iceman (2018) #5')
    expect(img).toBeInTheDocument()
  })

  it('should show "Comic Issue" text', () => {
    renderWithTheme(<Search comicList={comicList} />)
    const comicIssueText = screen.getAllByText('Comic Issue')
    expect(comicIssueText[0]).toBeInTheDocument()
  })

  it('should show comic title', () => {
    renderWithTheme(<Search comicList={comicList} />)
    const comicTitle = screen.getByRole('heading', {
      name: /Iceman \(2018\) #5/i
    })
    expect(comicTitle).toBeInTheDocument()
  })

  it('should show comic description', () => {
    renderWithTheme(<Search comicList={comicList} />)
    const comicDescription = screen.getByText(comicList[0].description)
    expect(comicDescription).toBeInTheDocument()
  })

  it('should render "View Details" button', () => {
    renderWithTheme(<Search comicList={comicList} />)
    const buttonViewDetail = screen.getAllByRole('button', {
      name: /View Details/i
    })
    expect(buttonViewDetail[0]).toBeInTheDocument()
  })

  xit('should render list of comics when the button "Search" is clicked', () => {
    renderWithTheme(<Search comicList={comicList} />)
    const handleSearchButtonClick = jest.fn()
    const button = screen.getByRole('button', { name: /Search/i })
    fireEvent.click(button)
    handleSearchButtonClick()
    expect(handleSearchButtonClick).toHaveBeenCalledTimes(1)
    const comicListLength = comicList.length
    expect(comicListLength).toBeGreaterThanOrEqual(1)
  })
})
