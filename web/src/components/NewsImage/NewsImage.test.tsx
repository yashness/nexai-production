import { render } from '@redwoodjs/testing/web'

import NewsImage from './NewsImage'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NewsImage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewsImage />)
    }).not.toThrow()
  })
})
