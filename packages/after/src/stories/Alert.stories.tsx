import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { InfoIcon, CheckCircle2Icon, AlertTriangleIcon, XCircleIcon } from 'lucide-react';

const meta = {
  title: 'UI/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'info', 'success', 'warning', 'error'],
      description: 'The visual style variant of the alert',
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>알림</AlertTitle>
      <AlertDescription>기본 알림 메시지입니다.</AlertDescription>
    </Alert>
  ),
};

export const Info: Story = {
  args: {
    variant: 'info',
  },
  render: (args) => (
    <Alert {...args}>
      <InfoIcon />
      <AlertTitle>정보</AlertTitle>
      <AlertDescription>이것은 정보 알림입니다. 사용자에게 유용한 정보를 제공합니다.</AlertDescription>
    </Alert>
  ),
};

export const Success: Story = {
  args: {
    variant: 'success',
  },
  render: (args) => (
    <Alert {...args}>
      <CheckCircle2Icon />
      <AlertTitle>성공</AlertTitle>
      <AlertDescription>작업이 성공적으로 완료되었습니다.</AlertDescription>
    </Alert>
  ),
};

export const Warning: Story = {
  args: {
    variant: 'warning',
  },
  render: (args) => (
    <Alert {...args}>
      <AlertTriangleIcon />
      <AlertTitle>경고</AlertTitle>
      <AlertDescription>이 작업을 계속하기 전에 주의가 필요합니다.</AlertDescription>
    </Alert>
  ),
};

export const Error: Story = {
  args: {
    variant: 'error',
  },
  render: (args) => (
    <Alert {...args}>
      <XCircleIcon />
      <AlertTitle>오류</AlertTitle>
      <AlertDescription>작업을 처리하는 중 오류가 발생했습니다. 다시 시도해주세요.</AlertDescription>
    </Alert>
  ),
};

export const WithoutTitle: Story = {
  args: {
    variant: 'info',
  },
  render: (args) => (
    <Alert {...args}>
      <InfoIcon />
      <AlertDescription>제목 없이 설명만 표시하는 알림입니다.</AlertDescription>
    </Alert>
  ),
};

export const WithoutIcon: Story = {
  args: {
    variant: 'success',
  },
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>성공</AlertTitle>
      <AlertDescription>아이콘 없이 텍스트만 표시하는 알림입니다.</AlertDescription>
    </Alert>
  ),
};

export const LongContent: Story = {
  args: {
    variant: 'warning',
  },
  render: (args) => (
    <Alert {...args}>
      <AlertTriangleIcon />
      <AlertTitle>중요한 경고</AlertTitle>
      <AlertDescription>
        이것은 긴 내용을 포함하는 알림 예제입니다.
        여러 줄의 텍스트가 포함될 수 있으며,
        사용자에게 상세한 정보를 제공할 때 유용합니다.
        알림 컴포넌트는 내용의 길이에 따라 자동으로 높이가 조정됩니다.
      </AlertDescription>
    </Alert>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Alert variant="default">
        <AlertTitle>기본</AlertTitle>
        <AlertDescription>기본 스타일의 알림입니다.</AlertDescription>
      </Alert>

      <Alert variant="info">
        <InfoIcon />
        <AlertTitle>정보</AlertTitle>
        <AlertDescription>정보 알림입니다.</AlertDescription>
      </Alert>

      <Alert variant="success">
        <CheckCircle2Icon />
        <AlertTitle>성공</AlertTitle>
        <AlertDescription>성공 알림입니다.</AlertDescription>
      </Alert>

      <Alert variant="warning">
        <AlertTriangleIcon />
        <AlertTitle>경고</AlertTitle>
        <AlertDescription>경고 알림입니다.</AlertDescription>
      </Alert>

      <Alert variant="error">
        <XCircleIcon />
        <AlertTitle>오류</AlertTitle>
        <AlertDescription>오류 알림입니다.</AlertDescription>
      </Alert>
    </div>
  ),
};
