import { render } from '@redwoodjs/testing/web'

import NewsSummary from './NewsSummary'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NewsSummary', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewsSummary />)
    }).not.toThrow()
  })
})
