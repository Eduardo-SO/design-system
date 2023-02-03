import { ComponentProps } from 'react'

import { styled } from './styles'

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$izuka500',
  borderRadius: '$sm',
  border: 0,
  fontWeight: 'bold',
  color: '$white',
  transition: 'all 0.2s ease',

  '&:hover': {
    backgroundColor: '$izuka700',
  },

  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: '$2 $4',
      },
      big: {
        fontSize: 16,
        padding: '$3 $6',
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
})

export type ButtonProps = ComponentProps<typeof Button>
