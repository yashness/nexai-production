// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import NewsSummary from './NewsSummary'

const meta: Meta<typeof NewsSummary> = {
  component: NewsSummary,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof NewsSummary>

export const Primary: Story = {
  args: {
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt commodi laborum quasi debitis fugit dolor quidem tempore error eius voluptatem fugiat consequatur, delectus at deleniti earum pariatur facilis omnis exercitationem."
  }
}
