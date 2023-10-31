import type { Meta, StoryObj } from '@storybook/react'

import Layout from '.'

const meta: Meta<typeof Layout> = {
  component: Layout,
}

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}

export default meta
