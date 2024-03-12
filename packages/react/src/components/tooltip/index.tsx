import { VariantProps } from '@stitches/react'
import { TooltipArrow, TooltipContent as StyledTooltipContent } from './styles'
import { ComponentProps, ReactNode } from 'react'

export interface TooltipContentProps
  extends ComponentProps<typeof StyledTooltipContent> {
  children: ReactNode
  size?: VariantProps<typeof StyledTooltipContent>['size']
}

export function TooltipContent({ children, size }: TooltipContentProps) {
  return (
    <StyledTooltipContent size={size}>
      {children}
      <TooltipArrow />
    </StyledTooltipContent>
  )
}

TooltipContent.displayName = 'TooltipContent'

export {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipPortal,
} from '@radix-ui/react-tooltip'
