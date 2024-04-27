import { render } from '@redwoodjs/testing/web'

import News from './News'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('News', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<News />)
    }).not.toThrow()
  })
})
