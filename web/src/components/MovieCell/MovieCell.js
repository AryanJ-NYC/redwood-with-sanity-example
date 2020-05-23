export const QUERY = gql`
  query($slug: String!) {
    movie(slug: $slug) {
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
  return JSON.stringify(movie)
}
