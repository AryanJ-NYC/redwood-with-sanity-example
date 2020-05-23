import MovieCell from 'src/components/MovieCell'

const MovieDetailPage = ({ slug }) => {
  console.log({ slug })
  return (
    <div>
      <MovieCell slug={slug} />
    </div>
  )
}

export default MovieDetailPage
