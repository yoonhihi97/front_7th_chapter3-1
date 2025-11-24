import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Field, FieldDescription, FieldMessage } from '@/components/ui/field';
import { Label } from '@/components/ui/label';

const meta = {
  title: 'UI/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const frameworkOptions = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'solid', label: 'Solid' },
];

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <div className="w-80">
        <Select value={value} onValueChange={setValue}>
          <SelectTrigger>
            <SelectValue placeholder="Select a framework" />
          </SelectTrigger>
          <SelectContent>
            {frameworkOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    );
  },
};

export const WithLabel: Story = {
  name: 'With Label',
  render: () => {
    const [value, setValue] = useState('');

    return (
      <div className="w-80">
        <Field>
          <Label htmlFor="framework">Framework</Label>
          <Select value={value} onValueChange={setValue}>
            <SelectTrigger id="framework">
              <SelectValue placeholder="Choose your framework" />
            </SelectTrigger>
            <SelectContent>
              {frameworkOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
      </div>
    );
  },
};

export const WithHelperText: Story = {
  name: 'With Helper Text',
  render: () => {
    const [value, setValue] = useState('');

    return (
      <div className="w-80">
        <Field>
          <Label htmlFor="framework">Framework</Label>
          <Select value={value} onValueChange={setValue}>
            <SelectTrigger id="framework">
              <SelectValue placeholder="Select framework" />
            </SelectTrigger>
            <SelectContent>
              {frameworkOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FieldDescription>Choose your preferred JavaScript framework</FieldDescription>
        </Field>
      </div>
    );
  },
};

export const WithError: Story = {
  name: 'With Error',
  render: () => {
    const [value, setValue] = useState('');

    return (
      <div className="w-80">
        <Field>
          <Label htmlFor="framework">Framework</Label>
          <Select value={value} onValueChange={setValue}>
            <SelectTrigger id="framework" error>
              <SelectValue placeholder="Select framework" />
            </SelectTrigger>
            <SelectContent>
              {frameworkOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FieldMessage>Framework is required</FieldMessage>
        </Field>
      </div>
    );
  },
};

export const Required: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <div className="w-80">
        <Field>
          <Label htmlFor="framework">
            Framework <span className="text-feedback-error ml-1">*</span>
          </Label>
          <Select value={value} onValueChange={setValue}>
            <SelectTrigger id="framework" aria-required>
              <SelectValue placeholder="Select framework" />
            </SelectTrigger>
            <SelectContent>
              {frameworkOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FieldDescription>This field is required</FieldDescription>
        </Field>
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    return (
      <div className="w-80">
        <Field>
          <Label htmlFor="framework">Framework</Label>
          <Select value="react" disabled>
            <SelectTrigger id="framework">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {frameworkOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
      </div>
    );
  },
};

export const LongOptionsList: Story = {
  name: 'Long Options List',
  render: () => {
    const longOptions = Array.from({ length: 30 }, (_, i) => ({
      value: `option-${i}`,
      label: `Option ${i + 1}`,
    }));

    const [value, setValue] = useState('');

    return (
      <div className="w-80">
        <Field>
          <Label htmlFor="long-list">Long List</Label>
          <Select value={value} onValueChange={setValue}>
            <SelectTrigger id="long-list">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              {longOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FieldDescription>Scroll to see all 30 options</FieldDescription>
        </Field>
      </div>
    );
  },
};

export const MultipleSelects: Story = {
  name: 'Multiple Selects',
  render: () => {
    const [category, setCategory] = useState('');
    const [status, setStatus] = useState('');
    const [priority, setPriority] = useState('');

    return (
      <div className="space-y-4 w-96">
        <Field>
          <Label htmlFor="category">
            Category <span className="text-feedback-error ml-1">*</span>
          </Label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger id="category">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="development">Development</SelectItem>
              <SelectItem value="design">Design</SelectItem>
              <SelectItem value="accessibility">Accessibility</SelectItem>
            </SelectContent>
          </Select>
          <FieldDescription>Select a post category</FieldDescription>
        </Field>

        <Field>
          <Label htmlFor="status">Status</Label>
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger id="status">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="published">Published</SelectItem>
              <SelectItem value="archived">Archived</SelectItem>
            </SelectContent>
          </Select>
        </Field>

        <Field>
          <Label htmlFor="priority">Priority</Label>
          <Select value={priority} onValueChange={setPriority}>
            <SelectTrigger id="priority">
              <SelectValue placeholder="Select priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Low</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="high">High</SelectItem>
            </SelectContent>
          </Select>
        </Field>
      </div>
    );
  },
};

export const FullFormExample: Story = {
  name: 'Full Form Example',
  render: () => {
    const [role, setRole] = useState('');
    const [status, setStatus] = useState('');
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleSubmit = () => {
      const newErrors: Record<string, string> = {};
      if (!role) newErrors.role = 'Role is required';
      if (!status) newErrors.status = 'Status is required';
      setErrors(newErrors);
    };

    return (
      <div className="space-y-4 w-96">
        <Field>
          <Label htmlFor="role">
            Role <span className="text-feedback-error ml-1">*</span>
          </Label>
          <Select
            value={role}
            onValueChange={(value) => {
              setRole(value);
              setErrors((prev) => ({ ...prev, role: '' }));
            }}
          >
            <SelectTrigger id="role" error={!!errors.role}>
              <SelectValue placeholder="Select role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="user">User</SelectItem>
              <SelectItem value="moderator">Moderator</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
            </SelectContent>
          </Select>
          {!errors.role && <FieldDescription>Choose the user's role</FieldDescription>}
          {errors.role && <FieldMessage>{errors.role}</FieldMessage>}
        </Field>

        <Field>
          <Label htmlFor="status">
            Status <span className="text-feedback-error ml-1">*</span>
          </Label>
          <Select
            value={status}
            onValueChange={(value) => {
              setStatus(value);
              setErrors((prev) => ({ ...prev, status: '' }));
            }}
          >
            <SelectTrigger id="status" error={!!errors.status}>
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
              <SelectItem value="suspended">Suspended</SelectItem>
            </SelectContent>
          </Select>
          {!errors.status && <FieldDescription>Choose the account status</FieldDescription>}
          {errors.status && <FieldMessage>{errors.status}</FieldMessage>}
        </Field>

        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-action-primary text-action-primary-foreground rounded-md hover:bg-action-primary-hover"
        >
          Validate Form
        </button>
      </div>
    );
  },
};

export const StyleComparison: Story = {
  name: 'Before/After Style Comparison',
  render: () => {
    const [value, setValue] = useState('');

    return (
      <div className="space-y-6 w-96">
        <div>
          <h3 className="text-sm font-bold mb-3">After (TailwindCSS + CVA + Radix UI)</h3>
          <Field>
            <Label htmlFor="after">Framework</Label>
            <Select value={value} onValueChange={setValue}>
              <SelectTrigger id="after">
                <SelectValue placeholder="Select framework" />
              </SelectTrigger>
              <SelectContent>
                {frameworkOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FieldDescription>Modern design with design tokens</FieldDescription>
          </Field>
        </div>

        <div className="border-t pt-6">
          <p className="text-xs text-text-muted mb-2">
            <strong>개선 사항:</strong>
          </p>
          <ul className="text-xs text-text-muted space-y-1">
            <li>✓ CVA variants로 타입 안전한 스타일링</li>
            <li>✓ TailwindCSS 디자인 토큰 사용</li>
            <li>✓ Radix UI로 향상된 접근성</li>
            <li>✓ 조합 가능한 컴포넌트 패턴 (shadcn/ui)</li>
            <li>✓ 키보드 네비게이션 지원</li>
            <li>✓ Portal 기반 드롭다운 (z-index 문제 해결)</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold mb-3">Error 상태</h4>
          <Field>
            <Label htmlFor="error-state">Framework</Label>
            <Select value="" onValueChange={() => {}}>
              <SelectTrigger id="error-state" error>
                <SelectValue placeholder="Select framework" />
              </SelectTrigger>
              <SelectContent>
                {frameworkOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FieldMessage>This field is required</FieldMessage>
          </Field>
        </div>

        <div>
          <h4 className="text-sm font-bold mb-3">Disabled 상태</h4>
          <Field>
            <Label htmlFor="disabled-state">Framework</Label>
            <Select value="react" disabled>
              <SelectTrigger id="disabled-state">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {frameworkOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
        </div>
      </div>
    );
  },
};

export const AccessibilityTest: Story = {
  name: 'Accessibility Test',
  render: () => {
    const [value, setValue] = useState('');
    const [errorValue, setErrorValue] = useState('');

    return (
      <div className="space-y-4 w-96">
        <Field>
          <Label htmlFor="accessible-select">
            Accessible Select <span className="text-feedback-error ml-1">*</span>
          </Label>
          <Select value={value} onValueChange={setValue}>
            <SelectTrigger id="accessible-select" aria-required>
              <SelectValue placeholder="Select framework" />
            </SelectTrigger>
            <SelectContent>
              {frameworkOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FieldDescription>This select has proper ARIA attributes</FieldDescription>
        </Field>

        <Field>
          <Label htmlFor="error-accessible">Error State Accessibility</Label>
          <Select value={errorValue} onValueChange={setErrorValue}>
            <SelectTrigger id="error-accessible" error aria-invalid>
              <SelectValue placeholder="Select framework" />
            </SelectTrigger>
            <SelectContent>
              {frameworkOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FieldMessage>This field is required</FieldMessage>
        </Field>

        <div className="border-t pt-4 mt-4">
          <p className="text-xs text-text-muted">
            <strong>접근성 체크리스트:</strong>
          </p>
          <ul className="text-xs text-text-muted space-y-1 mt-2">
            <li>✓ Label과 Select가 id/htmlFor로 연결</li>
            <li>✓ Description이 aria-describedby로 연결</li>
            <li>✓ Error 메시지가 aria-describedby로 연결</li>
            <li>✓ Error 상태에서 aria-invalid="true"</li>
            <li>✓ Required 필드에 aria-required="true"</li>
            <li>✓ 키보드로 열기/닫기/선택 가능</li>
            <li>✓ 스크린 리더가 선택된 값 읽음</li>
            <li>✓ Radix UI의 내장 ARIA 지원</li>
          </ul>
        </div>
      </div>
    );
  },
  parameters: {
    a11y: {
      config: {
        rules: [
          { id: 'label', enabled: true },
          { id: 'color-contrast', enabled: true },
          { id: 'aria-required-attr', enabled: true },
        ],
      },
    },
  },
};
