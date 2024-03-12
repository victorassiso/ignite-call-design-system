import React, { ComponentProps, forwardRef, ElementRef } from 'react'
import { Input as StyledInput, Prefix, Container } from './styles'
import { currency, phone } from './masks'
import { VariantProps } from '@stitches/react'

export interface InputProps
  extends Omit<ComponentProps<typeof StyledInput>, 'size'> {
  prefix?: string
  mask: 'currency' | 'phone'
  locale: 'pt-BR' | 'en-US'
  size?: VariantProps<typeof Container>['size']
}

export const Input = forwardRef<ElementRef<typeof StyledInput>, InputProps>(
  ({ prefix, mask, locale, size, ...props }: InputProps, ref) => {
    function applyMask(e: React.ChangeEvent<HTMLInputElement>) {
      switch (mask) {
        case 'currency':
          return currency(e, locale)
        case 'phone':
          return phone(e)
        default:
          return e
      }
    }

    return (
      <Container size={size}>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <StyledInput ref={ref} {...props} onChange={applyMask} />
      </Container>
    )
  },
)

Input.displayName = 'Input'
