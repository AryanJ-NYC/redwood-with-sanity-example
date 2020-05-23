import { render, cleanup } from '@testing-library/react'

import MovieDetailPage from './MovieDetailPage'

describe('MovieDetailPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<MovieDetailPage />)
    }).not.toThrow()
  })
})
