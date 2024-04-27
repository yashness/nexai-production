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

import NewsHeading from './NewsHeading'

const meta: Meta<typeof NewsHeading> = {
  component: NewsHeading,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof NewsHeading>

export const Primary: Story = {
  args: {
    title: "Hello world",
    texture: "autumn"
  },
  parameters: {
    texture: {
      default: "autumn",
    }
  }
}

export const Secondary: Story = {
  args: {
    title: "Hello world",
    texture: "star"
  },
  parameters: {
    texture: {
      default: "star",
    }
  }
}
