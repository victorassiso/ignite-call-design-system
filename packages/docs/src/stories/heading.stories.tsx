import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@victorassis/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    size: 'md',
    children: 'Lorem ipsum dolor sit',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
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
