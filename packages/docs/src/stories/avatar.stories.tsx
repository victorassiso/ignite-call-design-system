import { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@victorassis/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/victorassiso.png',
    alt: 'Victor Assis',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const withFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
