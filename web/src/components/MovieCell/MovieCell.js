import { urlFor } from 'src/lib/sanity'

export const QUERY = gql`
  query($slug: String!) {
    movie(slug: $slug) {
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

export const Success = ({ movie }) => {
  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={urlFor(movie.poster.asset).width(500).url()} />
    </div>
  )
}
