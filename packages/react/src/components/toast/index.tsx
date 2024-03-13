import { ComponentProps } from 'react'
import {
  ToastRoot,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastTitle,
  ToastViewport,
} from './styles'
import { X } from 'phosphor-react'
import { ToastProvider } from '@radix-ui/react-toast'
import { colors } from '@victorassis/tokens'

export interface ToastProps extends ComponentProps<typeof ToastRoot> {
  title?: string
  description?: string
  open?: boolean
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

export function Toast({ title, description, open, setOpen }: ToastProps) {
  return (
    <ToastRoot open={open} onOpenChange={setOpen}>
      <ToastTitle>{title}</ToastTitle>
      <ToastDescription>{description}</ToastDescription>
      <ToastClose>
        <X size={20} color={colors.gray200} />
      </ToastClose>
    </ToastRoot>
  )
}

export {
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastTitle,
  ToastViewport,
  ToastProvider,
}
