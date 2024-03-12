import { Meta, StoryObj } from '@storybook/react'
import { Box, Multistep, MultistepProps } from '@victorassis/react'

export default {
  title: 'Form/Multistep',
  component: Multistep,
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<MultistepProps>

export const Primary: StoryObj<MultistepProps> = {}
