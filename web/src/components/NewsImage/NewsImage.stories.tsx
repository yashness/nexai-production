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

import NewsImage from './NewsImage'

const meta: Meta<typeof NewsImage> = {
  component: NewsImage,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof NewsImage>

export const Primary: Story = {
  args: {
    image: "https://static.toiimg.com/photo/msid-109637849,imgsize-68478.cms"
  }
}
