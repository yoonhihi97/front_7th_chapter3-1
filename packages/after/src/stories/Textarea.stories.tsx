import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Field, FieldDescription, FieldMessage } from '@/components/ui/field';

const meta = {
  title: 'UI/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
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
    rows: {
      control: 'number',
      description: '텍스트 영역 높이 (행 수)',
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
    rows: 4,
  },
};

export const WithLabel: Story = {
  name: 'With Label',
  render: () => (
    <Field className="w-[500px]">
      <Label htmlFor="content">내용</Label>
      <Textarea id="content" placeholder="내용을 입력하세요..." rows={5} />
    </Field>
  ),
};

export const WithHelperText: Story = {
  name: 'With Helper Text',
  render: () => (
    <Field className="w-[500px]">
      <Label htmlFor="description">설명</Label>
      <Textarea id="description" placeholder="상세 설명을 입력하세요" rows={4} />
      <FieldDescription>최소 10자 이상 입력하세요</FieldDescription>
    </Field>
  ),
};

export const WithError: Story = {
  name: 'With Error',
  render: () => (
    <Field className="w-[500px]">
      <Label htmlFor="message">메시지</Label>
      <Textarea id="message" error rows={4} />
      <FieldMessage>메시지는 필수 입력 항목입니다</FieldMessage>
    </Field>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'This textarea is disabled',
    rows: 4,
  },
};

export const DifferentSizes: Story = {
  name: 'Different Sizes (Rows)',
  render: () => (
    <div className="space-y-4 w-[500px]">
      <Field>
        <Label htmlFor="small">Small (3 rows)</Label>
        <Textarea id="small" placeholder="작은 텍스트 영역" rows={3} />
      </Field>

      <Field>
        <Label htmlFor="medium">Medium (5 rows)</Label>
        <Textarea id="medium" placeholder="중간 텍스트 영역" rows={5} />
      </Field>

      <Field>
        <Label htmlFor="large">Large (8 rows)</Label>
        <Textarea id="large" placeholder="큰 텍스트 영역" rows={8} />
      </Field>
    </div>
  ),
};

export const FullFormExample: Story = {
  name: 'Full Form Example',
  render: () => (
    <div className="space-y-4 w-[600px]">
      <Field>
        <Label htmlFor="post-title">
          게시글 제목 <span className="text-feedback-error">*</span>
        </Label>
        <Textarea id="post-title" placeholder="제목을 입력하세요" rows={2} />
      </Field>

      <Field>
        <Label htmlFor="post-content">
          게시글 내용 <span className="text-feedback-error">*</span>
        </Label>
        <Textarea id="post-content" placeholder="내용을 입력하세요..." rows={6} />
        <FieldDescription>최소 100자 이상 작성해주세요</FieldDescription>
      </Field>

      <Field>
        <Label htmlFor="note">추가 노트</Label>
        <Textarea id="note" placeholder="선택 사항입니다" rows={3} />
        <FieldDescription>추가 정보가 있으면 입력하세요</FieldDescription>
      </Field>

      <Field>
        <Label htmlFor="error-example">피드백</Label>
        <Textarea id="error-example" placeholder="피드백 입력" rows={4} error />
        <FieldMessage>피드백 내용이 너무 짧습니다 (최소 10자)</FieldMessage>
      </Field>
    </div>
  ),
};

export const StyleComparison: Story = {
  name: 'Before/After Style Comparison',
  render: () => (
    <div className="space-y-6 w-[600px]">
      <div>
        <h3 className="text-sm font-bold mb-3">After (TailwindCSS + 디자인 토큰)</h3>
        <Field>
          <Label htmlFor="test1">게시글 내용</Label>
          <Textarea id="test1" placeholder="내용을 입력하세요..." rows={6} />
          <FieldDescription>최소 100자 이상 작성해주세요</FieldDescription>
        </Field>
      </div>

      <div className="border-t pt-6">
        <p className="text-xs text-text-muted mb-2">
          <strong>스타일 재현 확인:</strong>
        </p>
        <ul className="text-xs text-text-muted space-y-1">
          <li>• padding: 16.5px 14px (디자인 토큰)</li>
          <li>• font-size: 16px (text-lg)</li>
          <li>• line-height: 1.1876</li>
          <li>• min-height: 6em</li>
          <li>• border-radius: 4px</li>
          <li>• resize: vertical</li>
          <li>• focus: border-width 2px + padding 조정</li>
          <li>• focus border-color: #1976d2</li>
          <li>• error border-color: #d32f2f</li>
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-bold mb-3">Error 상태</h4>
        <Field>
          <Label htmlFor="error-state">내용</Label>
          <Textarea id="error-state" rows={4} error />
          <FieldMessage>내용은 필수 입력 항목입니다</FieldMessage>
        </Field>
      </div>

      <div>
        <h4 className="text-sm font-bold mb-3">Disabled 상태</h4>
        <Field>
          <Label htmlFor="disabled-state">비활성화 텍스트 영역</Label>
          <Textarea id="disabled-state" value="This textarea is disabled" rows={3} disabled />
          <FieldDescription>이 필드는 비활성화되었습니다</FieldDescription>
        </Field>
      </div>
    </div>
  ),
};

export const AccessibilityTest: Story = {
  name: 'Accessibility Test',
  render: () => (
    <div className="space-y-4 w-[600px]">
      <Field>
        <Label htmlFor="accessible-textarea">접근성 테스트 텍스트 영역</Label>
        <Textarea
          id="accessible-textarea"
          placeholder="내용을 입력하세요"
          rows={5}
          aria-describedby="help-text"
        />
        <FieldDescription id="help-text">이 필드는 필수 입력 항목입니다</FieldDescription>
      </Field>

      <Field>
        <Label htmlFor="error-accessible">에러 메시지 접근성</Label>
        <Textarea
          id="error-accessible"
          rows={4}
          error
          aria-invalid="true"
          aria-describedby="error-message"
        />
        <FieldMessage id="error-message">유효하지 않은 입력입니다</FieldMessage>
      </Field>

      <div className="border-t pt-4 mt-4">
        <p className="text-xs text-text-muted">
          <strong>접근성 체크리스트:</strong>
        </p>
        <ul className="text-xs text-text-muted space-y-1 mt-2">
          <li>✓ Label htmlFor와 Textarea id 연결</li>
          <li>✓ Error 메시지에 role="alert"</li>
          <li>✓ aria-describedby로 도움말 연결</li>
          <li>✓ aria-invalid for error state</li>
          <li>✓ focus-visible로 키보드 네비게이션</li>
          <li>✓ resize: vertical로 사용자 조정 가능</li>
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
