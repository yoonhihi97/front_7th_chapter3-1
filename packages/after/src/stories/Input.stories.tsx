import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FormField, FormDescription, FormMessage } from '@/components/ui/form';

const meta = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'url'],
      description: 'Input 타입',
    },
    error: {
      control: 'boolean',
      description: '에러 상태',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 상태',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder 텍스트',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithLabel: Story = {
  name: 'With Label',
  render: () => (
    <FormField className="w-80">
      <Label htmlFor="email">이메일</Label>
      <Input id="email" type="email" placeholder="name@example.com" />
    </FormField>
  ),
};

export const WithHelperText: Story = {
  name: 'With Helper Text',
  render: () => (
    <FormField className="w-80">
      <Label htmlFor="username">사용자명</Label>
      <Input id="username" placeholder="사용자명 입력" />
      <FormDescription>3자 이상 입력하세요</FormDescription>
    </FormField>
  ),
};

export const WithError: Story = {
  name: 'With Error',
  render: () => (
    <FormField className="w-80">
      <Label htmlFor="password">비밀번호</Label>
      <Input id="password" type="password" error />
      <FormMessage>비밀번호는 8자 이상이어야 합니다</FormMessage>
    </FormField>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'Disabled input',
  },
};

export const InputTypes: Story = {
  name: 'Input Types',
  render: () => (
    <div className="space-y-4 w-80">
      <FormField>
        <Label htmlFor="text">Text</Label>
        <Input id="text" type="text" placeholder="Text input" />
      </FormField>

      <FormField>
        <Label htmlFor="email-type">Email</Label>
        <Input id="email-type" type="email" placeholder="email@example.com" />
      </FormField>

      <FormField>
        <Label htmlFor="password-type">Password</Label>
        <Input id="password-type" type="password" placeholder="Enter password" />
      </FormField>

      <FormField>
        <Label htmlFor="number">Number</Label>
        <Input id="number" type="number" placeholder="Enter number" />
      </FormField>

      <FormField>
        <Label htmlFor="url">URL</Label>
        <Input id="url" type="url" placeholder="https://example.com" />
      </FormField>
    </div>
  ),
};

export const FullFormExample: Story = {
  name: 'Full Form Example',
  render: () => (
    <div className="space-y-4 w-96">
      <FormField>
        <Label htmlFor="name">
          이름 <span className="text-feedback-error">*</span>
        </Label>
        <Input id="name" placeholder="홍길동" />
      </FormField>

      <FormField>
        <Label htmlFor="email-form">
          이메일 <span className="text-feedback-error">*</span>
        </Label>
        <Input id="email-form" type="email" placeholder="name@example.com" />
        <FormDescription>회사 이메일을 입력하세요</FormDescription>
      </FormField>

      <FormField>
        <Label htmlFor="bio">소개</Label>
        <Input id="bio" placeholder="간단한 자기소개" />
        <FormDescription>선택 사항입니다</FormDescription>
      </FormField>

      <FormField>
        <Label htmlFor="error-example">사용자명</Label>
        <Input id="error-example" placeholder="사용자명 입력" error />
        <FormMessage>이미 사용 중인 사용자명입니다</FormMessage>
      </FormField>
    </div>
  ),
};

export const StyleComparison: Story = {
  name: 'Before/After Style Comparison',
  render: () => (
    <div className="space-y-6 w-96">
      <div>
        <h3 className="text-sm font-bold mb-3">After (TailwindCSS + 디자인 토큰)</h3>
        <FormField>
          <Label htmlFor="test1">사용자명</Label>
          <Input id="test1" placeholder="사용자명 입력" />
          <FormDescription>3자 이상 입력하세요</FormDescription>
        </FormField>
      </div>

      <div className="border-t pt-6">
        <p className="text-xs text-text-muted mb-2">
          <strong>스타일 재현 확인:</strong>
        </p>
        <ul className="text-xs text-text-muted space-y-1">
          <li>• padding: 8px 10px (py-2 px-2.5)</li>
          <li>• font-size: 14px (text-base)</li>
          <li>• label font-size: 13px (text-sm)</li>
          <li>• helper font-size: 12px (text-xs)</li>
          <li>• border-radius: 3px</li>
          <li>• focus: #1976d2 (border-focus)</li>
          <li>• error: #d32f2f (feedback-error)</li>
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-bold mb-3">Error 상태</h4>
        <FormField>
          <Label htmlFor="error-state">비밀번호</Label>
          <Input id="error-state" type="password" error />
          <FormMessage>비밀번호는 8자 이상이어야 합니다</FormMessage>
        </FormField>
      </div>

      <div>
        <h4 className="text-sm font-bold mb-3">Disabled 상태</h4>
        <FormField>
          <Label htmlFor="disabled-state">비활성화 입력</Label>
          <Input id="disabled-state" value="Disabled" disabled />
          <FormDescription>이 필드는 비활성화되었습니다</FormDescription>
        </FormField>
      </div>
    </div>
  ),
};

export const AccessibilityTest: Story = {
  name: 'Accessibility Test',
  render: () => (
    <div className="space-y-4 w-96">
      <FormField>
        <Label htmlFor="accessible-input">접근성 테스트 입력</Label>
        <Input id="accessible-input" placeholder="입력하세요" aria-describedby="help-text" />
        <FormDescription id="help-text">이 필드는 필수 입력 항목입니다</FormDescription>
      </FormField>

      <FormField>
        <Label htmlFor="error-accessible">에러 메시지 접근성</Label>
        <Input id="error-accessible" error aria-invalid="true" aria-describedby="error-message" />
        <FormMessage id="error-message">유효하지 않은 입력입니다</FormMessage>
      </FormField>

      <div className="border-t pt-4 mt-4">
        <p className="text-xs text-text-muted">
          <strong>접근성 체크리스트:</strong>
        </p>
        <ul className="text-xs text-text-muted space-y-1 mt-2">
          <li>✓ Label htmlFor와 Input id 연결</li>
          <li>✓ Error 메시지에 role="alert"</li>
          <li>✓ aria-describedby로 도움말 연결</li>
          <li>✓ aria-invalid for error state</li>
          <li>✓ focus-visible로 키보드 네비게이션</li>
        </ul>
      </div>
    </div>
  ),
  parameters: {
    a11y: {
      config: {
        rules: [
          { id: 'label', enabled: true },
          { id: 'color-contrast', enabled: true },
        ],
      },
    },
  },
};
