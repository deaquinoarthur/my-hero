const BASE_URL = 'https://gateway.marvel.com/v1/public/comics'
const API_KEY = 'a92205084518331620524f5dad666d24'
const TIMESTAMP = '1612268729'
const HASH = 'f8dad3f565aa79c04e04ffd867ac5d4e'

export const urls = {
  comicListUrl: (searchValue) =>
    `${BASE_URL}?title=${searchValue}&ts=${TIMESTAMP}&apikey=${API_KEY}&hash=${HASH}`,
  comicDetailsUrl: (comicId) =>
    `${BASE_URL}/${comicId}?ts=${TIMESTAMP}&apikey=${API_KEY}&hash=${HASH}`
}
