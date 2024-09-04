import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from '../Skeleton';

const meta = {
  title: 'Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: '480px',
    rowCount: 1,
  },
};

export const MultiRows: Story = {
  args: {
    width: '15em',
    rowCount: 5,
    randomWidth: true,
  },
};

export const Avatar: Story = {
  args: {
    width: '128px',
    height: '128px',
    borderRadius: '50%',
  },
};
