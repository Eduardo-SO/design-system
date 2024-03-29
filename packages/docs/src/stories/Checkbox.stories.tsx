import { Meta, StoryObj } from '@storybook/react'
import { Box, Text, Checkbox, CheckboxProps } from '@izuka/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {
    disabled: false,
  },
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
        >
          {Story()}
          <Text size="sm">Aceito os termos de uso</Text>
        </Box>
      )
    },
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}

export const Disabled: StoryObj<CheckboxProps> = {
  args: {
    disabled: true,
  },
}
