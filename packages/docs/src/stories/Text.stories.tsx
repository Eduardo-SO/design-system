import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@izuka/react'

export default {
  title: 'Typografy/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum dolor iusto cupiditate atque error cum eaque consequatur, accusamus quaerat architecto!',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
