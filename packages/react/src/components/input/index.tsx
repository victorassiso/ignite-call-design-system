import React, { ComponentProps } from 'react'
import { Input as StyledInput, Prefix, Container } from './styles'
import { currency, phone } from './masks'

export interface InputProps extends ComponentProps<typeof StyledInput> {
  prefix?: string
  mask: 'currency' | 'phone'
  locale: 'pt-BR' | 'en-US'
}

export function Input({ prefix, mask, locale, ...props }: InputProps) {
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
    <Container>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <StyledInput {...props} onChange={applyMask} />
    </Container>
  )
}

Input.displayName = 'Input'
