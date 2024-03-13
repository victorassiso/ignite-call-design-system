import { Meta, StoryObj } from '@storybook/react'

import { Button } from '@victorassis/react'
import { ToastWrapper } from '../components/toast-wrapper'

export default {
  title: 'Utils/Toast',
  component: Button,
} as Meta<typeof Button>

export const Primary: StoryObj<typeof Button> = {
  render: () => <ToastWrapper />,
}
