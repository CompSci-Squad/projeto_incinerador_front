import type { Meta, StoryObj } from '@storybook/react'

import LinkHeader from '.'

const meta: Meta<typeof LinkHeader> = {
  component: LinkHeader,
}

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    path: 'test',
    title: 'test',
  },
}

export default meta
