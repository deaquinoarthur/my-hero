function getFormatedPublishedDate(date) {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  function createDate(date, type) {
    switch (type) {
      case 'day':
        return new Date(date).getDay()
      case 'month':
        return new Date(date).getMonth()
      case 'year':
        return new Date(date).getFullYear()
    }
  }

  const day = createDate(date, 'day')
  const month = monthNames[createDate(date, 'month')]
  const year = createDate(date, 'year')

  return `${month} ${day}, ${year}`
}

export default getFormatedPublishedDate
