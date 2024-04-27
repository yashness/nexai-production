import { render } from '@redwoodjs/testing/web'

import VideoLayout from './VideoLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('VideoLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<VideoLayout />)
    }).not.toThrow()
  })
})
