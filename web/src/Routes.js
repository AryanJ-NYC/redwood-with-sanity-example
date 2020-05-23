import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/movies/{slug}" page={MovieDetailPage} name="movieDetail" />
      <Route path="/movies" page={MovieListPage} name="movieList" />
      <Route path="/" page={MovieListPage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
