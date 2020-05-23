import { render, cleanup } from '@testing-library/react'

import MovieListPage from './MovieListPage'

describe('MovieListPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<MovieListPage />)
    }).not.toThrow()
  })
})
