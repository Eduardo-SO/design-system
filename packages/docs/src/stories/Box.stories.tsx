import { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps } from '@izuka/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
