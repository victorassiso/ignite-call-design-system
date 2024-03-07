import { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos saepe
        quod velit vero aspernatur aliquam, minus veritatis, aut corporis porro
        nobis fugit perspiciatis numquam voluptatem error cupiditate dicta
        voluptates illum?
      </Text>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
