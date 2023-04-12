import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@izuka/react'

export default {
  title: 'Typography/Headings',
  component: Heading,
  args: {
    children: 'Heading test',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '3xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `h2`, mas nós podemos alterar isso com a propriedade `as`.',
      },
    },
  },
}
