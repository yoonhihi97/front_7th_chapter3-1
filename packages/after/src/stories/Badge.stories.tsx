import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from '@/components/ui/badge';

const meta = {
  title: 'UI/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'destructive', 'warning', 'info'],
      description: 'The visual style variant of the badge',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the badge',
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Badge',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="info">Info</Badge>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
};

export const StatusExamples: Story = {
  name: 'Status Badges (Domain Example)',
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        <Badge variant="success">게시됨</Badge>
        <Badge variant="warning">임시저장</Badge>
        <Badge variant="secondary">보관됨</Badge>
        <Badge variant="info">대기중</Badge>
        <Badge variant="destructive">거부됨</Badge>
      </div>
      <div className="flex flex-wrap gap-2">
        <Badge variant="success">활성</Badge>
        <Badge variant="warning">비활성</Badge>
        <Badge variant="destructive">정지</Badge>
      </div>
    </div>
  ),
};

export const UserRoleExamples: Story = {
  name: 'User Role Badges (Domain Example)',
  render: () => (
    <div className="flex gap-2">
      <Badge variant="destructive">관리자</Badge>
      <Badge variant="warning">운영자</Badge>
      <Badge variant="primary">사용자</Badge>
      <Badge variant="secondary">게스트</Badge>
    </div>
  ),
};

export const CategoryExamples: Story = {
  name: 'Category Badges (Domain Example)',
  render: () => (
    <div className="flex gap-2">
      <Badge variant="primary">Development</Badge>
      <Badge variant="info">Design</Badge>
      <Badge variant="destructive">Accessibility</Badge>
      <Badge variant="success">Performance</Badge>
    </div>
  ),
};

export const SizeCombinations: Story = {
  name: 'Variant × Size Combinations',
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Badge variant="primary" size="sm">Small Primary</Badge>
        <Badge variant="primary" size="md">Medium Primary</Badge>
        <Badge variant="primary" size="lg">Large Primary</Badge>
      </div>
      <div className="flex items-center gap-2">
        <Badge variant="success" size="sm">Small Success</Badge>
        <Badge variant="success" size="md">Medium Success</Badge>
        <Badge variant="success" size="lg">Large Success</Badge>
      </div>
      <div className="flex items-center gap-2">
        <Badge variant="destructive" size="sm">Small Error</Badge>
        <Badge variant="destructive" size="md">Medium Error</Badge>
        <Badge variant="destructive" size="lg">Large Error</Badge>
      </div>
    </div>
  ),
};

export const InlineText: Story = {
  name: 'Badge in Inline Text',
  render: () => (
    <div className="space-y-2">
      <p className="text-sm">
        게시글 상태: <Badge variant="success">게시됨</Badge>
      </p>
      <p className="text-sm">
        사용자 역할: <Badge variant="destructive">관리자</Badge>
      </p>
      <p className="text-sm">
        알림 <Badge variant="info" size="sm">3</Badge>개가 있습니다.
      </p>
    </div>
  ),
};

export const InteractiveBadges: Story = {
  name: 'Clickable Badges',
  render: () => (
    <div className="flex gap-2">
      <Badge
        variant="primary"
        className="cursor-pointer hover:opacity-80 transition-opacity"
        onClick={() => alert('Primary badge clicked')}
      >
        Clickable
      </Badge>
      <Badge
        variant="success"
        className="cursor-pointer hover:opacity-80 transition-opacity"
        onClick={() => alert('Success badge clicked')}
      >
        Clickable Success
      </Badge>
    </div>
  ),
};

export const AccessibilityTest: Story = {
  render: () => (
    <div className="space-y-4">
      <Badge variant="success" aria-label="게시 완료됨">
        게시됨
      </Badge>
      <Badge variant="destructive" role="status" aria-live="polite">
        에러 발생
      </Badge>
      <p className="text-sm text-state-muted-foreground">
        Screen reader will announce badge content and ARIA attributes
      </p>
    </div>
  ),
  parameters: {
    a11y: {
      config: {
        rules: [{ id: 'color-contrast', enabled: true }],
      },
    },
  },
};
