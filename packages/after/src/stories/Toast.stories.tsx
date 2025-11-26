import type { Meta, StoryObj } from '@storybook/react-vite';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/toast';
import { Button } from '@/components/ui/button';

const meta = {
  title: 'UI/Toast',
  component: Toaster,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="min-h-[300px] w-[500px]">
        <Story />
        <Toaster position="top-right" />
      </div>
    ),
  ],
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  render: () => (
    <Button onClick={() => toast.success('성공', { description: '작업이 성공적으로 완료되었습니다.' })}>
      Success Toast
    </Button>
  ),
};

export const Error: Story = {
  render: () => (
    <Button
      variant="destructive"
      onClick={() => toast.error('오류', { description: '작업을 처리하는 중 오류가 발생했습니다.' })}
    >
      Error Toast
    </Button>
  ),
};

export const Info: Story = {
  render: () => (
    <Button variant="outline" onClick={() => toast.info('알림', { description: '새로운 정보가 있습니다.' })}>
      Info Toast
    </Button>
  ),
};

export const Warning: Story = {
  render: () => (
    <Button
      variant="secondary"
      onClick={() => toast.warning('경고', { description: '이 작업은 되돌릴 수 없습니다.' })}
    >
      Warning Toast
    </Button>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button onClick={() => toast.success('성공', { description: '게시글이 생성되었습니다.' })}>Success</Button>
      <Button variant="destructive" onClick={() => toast.error('오류', { description: '삭제에 실패했습니다.' })}>
        Error
      </Button>
      <Button variant="outline" onClick={() => toast.info('알림', { description: '새로운 알림이 있습니다.' })}>
        Info
      </Button>
      <Button variant="secondary" onClick={() => toast.warning('경고', { description: '주의가 필요합니다.' })}>
        Warning
      </Button>
    </div>
  ),
};
