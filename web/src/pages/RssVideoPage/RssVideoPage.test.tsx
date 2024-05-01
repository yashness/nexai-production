import { render } from '@redwoodjs/testing/web'

import RssVideoPage from './RssVideoPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('RssVideoPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RssVideoPage />)
    }).not.toThrow()
  })
})
