import { Meta, StoryObj } from '@storybook/react'
import {
  Box,
  Text,
  TooltipContent,
  TooltipContentProps,
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  Button,
} from '@victorassis/react'

export default {
  title: 'Utils/Tooltip',
  component: TooltipContent,
  args: {
    children: <Text>This is a tip</Text>,
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            height: '$20',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '$gray500',
          }}
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button>
                  <Text>Hover Me</Text>
                </Button>
              </TooltipTrigger>
              {Story()}
            </Tooltip>
          </TooltipProvider>
        </Box>
      )
    },
  ],
} as Meta<TooltipContentProps>

export const Primary: StoryObj<TooltipContentProps> = {}
