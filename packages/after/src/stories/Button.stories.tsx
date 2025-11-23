import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@/components/ui/button';
import { Plus, Trash2, Edit, Loader2 } from 'lucide-react';

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'success', 'outline', 'ghost', 'link'],
      description: 'The visual style variant of the button',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    asChild: {
      control: 'boolean',
      description: 'Render as a child component (polymorphic)',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'default',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Destructive',
    variant: 'destructive',
  },
};

export const Success: Story = {
  args: {
    children: 'Success',
    variant: 'success',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline',
    variant: 'outline',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Ghost',
    variant: 'ghost',
  },
};

export const Link: Story = {
  args: {
    children: 'Link',
    variant: 'link',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="success">Success</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button>
        <Plus className="h-4 w-4" />
        Create New
      </Button>
      <Button variant="destructive">
        <Trash2 className="h-4 w-4" />
        Delete
      </Button>
      <Button variant="secondary">
        <Edit className="h-4 w-4" />
        Edit
      </Button>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button disabled>Default Disabled</Button>
      <Button variant="secondary" disabled>
        Secondary Disabled
      </Button>
      <Button variant="destructive" disabled>
        Destructive Disabled
      </Button>
    </div>
  ),
};

export const AsLink: Story = {
  render: () => (
    <Button asChild>
      <a href="https://example.com" target="_blank" rel="noopener noreferrer">
        External Link
      </a>
    </Button>
  ),
};

export const Loading: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button disabled>
        <Loader2 className="h-4 w-4 animate-spin" />
        Loading...
      </Button>
      <Button variant="secondary" disabled>
        <Loader2 className="h-4 w-4 animate-spin" />
        Processing
      </Button>
    </div>
  ),
};

export const ManagementActions: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button>
          <Plus className="h-4 w-4" />
          Create New
        </Button>
      </div>
      <div className="flex gap-2">
        <Button variant="secondary">Cancel</Button>
        <Button>Save</Button>
      </div>
      <div className="flex gap-2">
        <Button variant="secondary" size="sm">
          Edit
        </Button>
        <Button variant="destructive" size="sm">
          Delete
        </Button>
        <Button variant="success" size="sm">
          Publish
        </Button>
      </div>
    </div>
  ),
};

export const AccessibilityTest: Story = {
  render: () => (
    <div className="space-y-4">
      <Button aria-label="Add new item">
        <Plus className="h-4 w-4" />
      </Button>
      <Button aria-describedby="delete-help" variant="destructive">
        Delete
      </Button>
      <p id="delete-help" className="text-sm text-state-muted-foreground">
        This action cannot be undone
      </p>
    </div>
  ),
  parameters: {
    a11y: {
      config: {
        rules: [{ id: 'button-name', enabled: true }],
      },
    },
  },
};
