import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Lorem ipsum dolor sit',
  },
  tags: ['autodocs'],
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'Lorem ipsum dolor sit',
    as: 'strong',
  },
  parameters: {
    docs: {
      description: {
        story:
          'By default, the heading component uses the `h2` tag, but it can be changed with the property `as`.',
      },
    },
  },
}
