import { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@izuka/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/eduardo-so.png',
    alt: 'Eduardo Souza',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
