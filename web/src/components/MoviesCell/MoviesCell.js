export const QUERY = gql`
  query {
    movies {
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
  return JSON.stringify(movies)
}
