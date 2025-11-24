import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const meta = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the card content area where you can place any information.</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  ),
};

export const WithAction: Story = {
  name: 'With Header Action',
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages</CardDescription>
        <CardAction>
          <Button variant="ghost" size="sm">
            View All
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="text-sm">New message from John</div>
          <div className="text-sm">Your report is ready</div>
          <div className="text-sm">Meeting starts in 10 minutes</div>
        </div>
      </CardContent>
    </Card>
  ),
};

export const StatVariants: Story = {
  name: 'Stat Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-4 w-[500px]">
      <Card stat="info">
        <CardHeader className="py-0 pt-3 px-[15px] pb-1">
          <CardTitle className="text-xs text-gray-600 font-normal">
            Total Users
          </CardTitle>
        </CardHeader>
        <CardContent className="py-0 px-[15px] pb-3">
          <div className="text-2xl font-bold text-blue-600">1,234</div>
        </CardContent>
      </Card>

      <Card stat="success">
        <CardHeader className="py-0 pt-3 px-[15px] pb-1">
          <CardTitle className="text-xs text-gray-600 font-normal">
            Active
          </CardTitle>
        </CardHeader>
        <CardContent className="py-0 px-[15px] pb-3">
          <div className="text-2xl font-bold text-green-700">856</div>
        </CardContent>
      </Card>

      <Card stat="warning">
        <CardHeader className="py-0 pt-3 px-[15px] pb-1">
          <CardTitle className="text-xs text-gray-600 font-normal">
            Pending
          </CardTitle>
        </CardHeader>
        <CardContent className="py-0 px-[15px] pb-3">
          <div className="text-2xl font-bold text-orange-600">42</div>
        </CardContent>
      </Card>

      <Card stat="error">
        <CardHeader className="py-0 pt-3 px-[15px] pb-1">
          <CardTitle className="text-xs text-gray-600 font-normal">
            Inactive
          </CardTitle>
        </CardHeader>
        <CardContent className="py-0 px-[15px] pb-3">
          <div className="text-2xl font-bold text-red-600">23</div>
        </CardContent>
      </Card>

      <Card stat="neutral">
        <CardHeader className="py-0 pt-3 px-[15px] pb-1">
          <CardTitle className="text-xs text-gray-600 font-normal">
            Archived
          </CardTitle>
        </CardHeader>
        <CardContent className="py-0 px-[15px] pb-3">
          <div className="text-2xl font-bold text-gray-700">313</div>
        </CardContent>
      </Card>
    </div>
  ),
};

export const LoginForm: Story = {
  name: 'Login Form Example',
  render: () => (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="ghost">Cancel</Button>
        <Button>Login</Button>
      </CardFooter>
    </Card>
  ),
};

export const ProductCard: Story = {
  name: 'Product Card Example',
  render: () => (
    <Card className="w-[300px]">
      <CardHeader>
        <div className="aspect-video bg-gray-200 rounded-md mb-2" />
        <CardTitle>Premium Headphones</CardTitle>
        <CardDescription>High-quality wireless headphones with noise cancellation</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">$299</span>
          <span className="text-sm text-muted-foreground">In Stock</span>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>
  ),
};

export const StyleComparison: Story = {
  name: 'Before/After Style Comparison',
  render: () => (
    <div className="space-y-6 w-[600px]">
      <div>
        <h3 className="text-sm font-bold mb-3">
          After (shadcn Card + CVA variants)
        </h3>
        <div className="grid grid-cols-3 gap-2">
          <Card stat="info">
            <CardHeader className="py-0 pt-3 px-[15px] pb-1">
              <CardTitle className="text-xs text-gray-600 font-normal">
                Info
              </CardTitle>
            </CardHeader>
            <CardContent className="py-0 px-[15px] pb-3">
              <div className="text-2xl font-bold text-blue-600">123</div>
            </CardContent>
          </Card>

          <Card stat="success">
            <CardHeader className="py-0 pt-3 px-[15px] pb-1">
              <CardTitle className="text-xs text-gray-600 font-normal">
                Success
              </CardTitle>
            </CardHeader>
            <CardContent className="py-0 px-[15px] pb-3">
              <div className="text-2xl font-bold text-green-700">456</div>
            </CardContent>
          </Card>

          <Card stat="error">
            <CardHeader className="py-0 pt-3 px-[15px] pb-1">
              <CardTitle className="text-xs text-gray-600 font-normal">
                Error
              </CardTitle>
            </CardHeader>
            <CardContent className="py-0 px-[15px] pb-3">
              <div className="text-2xl font-bold text-red-600">789</div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="border-t pt-6">
        <p className="text-xs text-text-muted mb-2">
          <strong>개선 사항:</strong>
        </p>
        <ul className="text-xs text-text-muted space-y-1">
          <li>✓ CVA variant로 색상 관리 (타입 안전성)</li>
          <li>✓ className 반복 제거</li>
          <li>✓ CardHeader + CardTitle로 의미적 구조</li>
          <li>✓ Tailwind 유틸리티 클래스 사용</li>
          <li>✓ Before 스타일 완벽 재현 (padding, border-radius, 색상)</li>
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-bold mb-3">Default Card</h4>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>일반 카드</CardTitle>
            <CardDescription>shadcn 기본 스타일</CardDescription>
          </CardHeader>
          <CardContent>
            <p>rounded-xl, shadow-sm, gap-6 적용</p>
          </CardContent>
        </Card>
      </div>
    </div>
  ),
};
