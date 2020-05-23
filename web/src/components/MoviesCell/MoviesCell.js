import { urlFor } from 'src/lib/sanity'

export const QUERY = gql`
  query {
    movies {
      poster {
        asset {
          _ref
        }
      }
      slug {
        current
      }
      title
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ movies }) => {
  return movies.map((movie) => {
    return (
      <img key={movie.slug} src={urlFor(movie.poster.asset).width(200).url()} />
    )
  })
}
