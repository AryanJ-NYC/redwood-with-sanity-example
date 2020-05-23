import { render, cleanup, screen } from '@testing-library/react'

import { Loading, Empty, Failure, Success } from './MovieCell'

describe('MovieCell', () => {
  afterEach(() => {
    cleanup()
  })

  it('Loading renders successfully', () => {
    render(<Loading />)
    // Use screen.debug() to see output.
    expect(screen.queryByText('Loading...')).toBeInTheDocument()
  })

  it('Empty renders successfully', () => {
    render(<Empty />)
    expect(screen.queryByText('Empty')).toBeInTheDocument()
  })

  it('Failure renders successfully', () => {
    render(<Failure error={{ message: 'Oh no!' }} />)
    expect(screen.queryByText('Error: Oh no!')).toBeInTheDocument()
  })

  it('Success renders successfully', () => {
    render(
      <Success userExample={{ movie: { objectKey: 'objectValue' } }} />
    )
    expect(
      screen.queryByText('{"movie":{"objectKey":"objectValue"}}')
    ).toBeInTheDocument()
  })
})
