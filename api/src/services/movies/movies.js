import { sanity } from '../../lib/sanity'

const moviesQuery = /* groq */ `*[_type == "movie"]`
export const movies = () => {
  return sanity.fetch(moviesQuery)
}

const movieBySlugQuery = /* groq */ `*[_type == "movie" && slug.current == $slug][0]`
export const movie = ({ slug }) => {
  return sanity.fetch(movieBySlugQuery, { slug })
}
