import { ComponentProps } from 'react'
import { styled } from '../styles'

export const TextArea = styled('textarea', {
  minHeight: 80,
  padding: '$3 $4',
  border: '2px solid $gray900',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  resize: 'vertical',

  backgroundColor: '$gray900',
  color: '$white',

  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',

  '&:has(input:focus)': {
    outline: 0,
    borderColor: '$izuka300',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})

export interface TextAreaProps extends ComponentProps<typeof TextArea> {}
