import { render } from '@redwoodjs/testing/web'

import NewsHeading from './NewsHeading'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NewsHeading', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewsHeading />)
    }).not.toThrow()
  })
})
