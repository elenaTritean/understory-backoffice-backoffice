import type { Meta, StoryObj } from '@storybook/react';
import { ThemeToggle } from './ThemeToggle';

const meta = {
  title: 'Theme/ThemeToggle',
  component: ThemeToggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ThemeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithThemedBackground: Story = {
  decorators: [
    (Story) => (
      <div
        style={{
          padding: '40px',
          backgroundColor: 'var(--surface/base)',
          borderRadius: '8px',
          border: '1px solid var(--border/primary)',
        }}
      >
        <Story />
      </div>
    ),
  ],
};
