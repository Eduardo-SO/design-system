import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  padding: '$3 $4',
  border: '2px solid $gray900',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  backgroundColor: '$gray900',

  variants: {
    size: {
      sm: {
        padding: '$2 $3',
      },
      md: {
        padding: '$3 $4',
      },
    },
  },

  '&:has(input:focus)': {
    borderColor: '$izuka300',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  defaultVariants: {
    size: 'md',
  },
})

export const Prefix = styled('span', {
  color: '$gray400',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
})

export const Input = styled('input', {
  width: '100%',
  border: 0,
  backgroundColor: 'transparent',
  color: '$white',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: '$gray400',
  },
})
