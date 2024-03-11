import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, Input, InputProps } from '@ignite-ui/react'

export default {
  title: 'Form/Input',
  component: Input,
} as Meta<InputProps>

export const Primary: StoryObj<InputProps> = {
  args: {
    placeholder: 'Type your email',
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Email address</Text>
          {Story()}
        </Box>
      )
    },
  ],
}

export const Disabled: StoryObj<InputProps> = {
  args: {
    placeholder: 'Type your email',
    disabled: true,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Email address</Text>
          {Story()}
        </Box>
      )
    },
  ],
}

export const WithPrefix: StoryObj<InputProps> = {
  args: {
    prefix: 'github.com/',
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">GitHub account</Text>
          {Story()}
        </Box>
      )
    },
  ],
}

export const WithCurrencyMask: StoryObj<InputProps> = {
  args: {
    prefix: 'R$ ',
    placeholder: '0,00',
    mask: 'currency',
    locale: 'pt-BR',
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Price</Text>
          {Story()}
        </Box>
      )
    },
  ],
}

export const WithPhoneMask: StoryObj<InputProps> = {
  args: {
    prefix: '+55 ',
    mask: 'phone',
    placeholder: '(xx) x xxxx-xxxx',
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Price</Text>
          {Story()}
        </Box>
      )
    },
  ],
}
