import type { Meta, StoryObj } from '@storybook/react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './table';
import { Badge } from './badge';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>이름</TableHead>
          <TableHead>이메일</TableHead>
          <TableHead>역할</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>홍길동</TableCell>
          <TableCell>hong@example.com</TableCell>
          <TableCell>사용자</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>2</TableCell>
          <TableCell>김철수</TableCell>
          <TableCell>kim@example.com</TableCell>
          <TableCell>관리자</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>3</TableCell>
          <TableCell>이영희</TableCell>
          <TableCell>lee@example.com</TableCell>
          <TableCell>운영자</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const Striped: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>제목</TableHead>
          <TableHead>작성자</TableHead>
          <TableHead>조회수</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody striped>
        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>첫 번째 게시글</TableCell>
          <TableCell>홍길동</TableCell>
          <TableCell>150</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>2</TableCell>
          <TableCell>두 번째 게시글</TableCell>
          <TableCell>김철수</TableCell>
          <TableCell>230</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>3</TableCell>
          <TableCell>세 번째 게시글</TableCell>
          <TableCell>이영희</TableCell>
          <TableCell>180</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>4</TableCell>
          <TableCell>네 번째 게시글</TableCell>
          <TableCell>박민수</TableCell>
          <TableCell>95</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const WithBadges: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>사용자명</TableHead>
          <TableHead>이메일</TableHead>
          <TableHead>역할</TableHead>
          <TableHead>상태</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>홍길동</TableCell>
          <TableCell>hong@example.com</TableCell>
          <TableCell>
            <Badge variant="destructive">관리자</Badge>
          </TableCell>
          <TableCell>
            <Badge variant="success">활성</Badge>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>김철수</TableCell>
          <TableCell>kim@example.com</TableCell>
          <TableCell>
            <Badge variant="warning">운영자</Badge>
          </TableCell>
          <TableCell>
            <Badge variant="success">활성</Badge>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>이영희</TableCell>
          <TableCell>lee@example.com</TableCell>
          <TableCell>
            <Badge variant="primary">사용자</Badge>
          </TableCell>
          <TableCell>
            <Badge variant="secondary">비활성</Badge>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>박민수</TableCell>
          <TableCell>park@example.com</TableCell>
          <TableCell>
            <Badge variant="secondary">게스트</Badge>
          </TableCell>
          <TableCell>
            <Badge variant="warning">대기중</Badge>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const PostsWithCategories: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead style={{ width: '60px' }}>ID</TableHead>
          <TableHead>제목</TableHead>
          <TableHead style={{ width: '120px' }}>카테고리</TableHead>
          <TableHead style={{ width: '100px' }}>작성자</TableHead>
          <TableHead style={{ width: '100px' }}>상태</TableHead>
          <TableHead style={{ width: '80px' }}>조회수</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody striped>
        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>React 시작하기</TableCell>
          <TableCell>
            <Badge variant="primary" pill>
              기술
            </Badge>
          </TableCell>
          <TableCell>홍길동</TableCell>
          <TableCell>
            <Badge variant="success">게시됨</Badge>
          </TableCell>
          <TableCell>234</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>2</TableCell>
          <TableCell>디자인 시스템 구축</TableCell>
          <TableCell>
            <Badge variant="info" pill>
              디자인
            </Badge>
          </TableCell>
          <TableCell>김철수</TableCell>
          <TableCell>
            <Badge variant="warning">임시저장</Badge>
          </TableCell>
          <TableCell>89</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>3</TableCell>
          <TableCell>팀 협업 방법론</TableCell>
          <TableCell>
            <Badge variant="secondary" pill>
              업무
            </Badge>
          </TableCell>
          <TableCell>이영희</TableCell>
          <TableCell>
            <Badge variant="success">게시됨</Badge>
          </TableCell>
          <TableCell>412</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>4</TableCell>
          <TableCell>새해 맞이 이벤트</TableCell>
          <TableCell>
            <Badge variant="warning" pill>
              공지
            </Badge>
          </TableCell>
          <TableCell>박민수</TableCell>
          <TableCell>
            <Badge variant="info">대기중</Badge>
          </TableCell>
          <TableCell>1520</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const Empty: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>이름</TableHead>
          <TableHead>이메일</TableHead>
          <TableHead>역할</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell colSpan={4} style={{ textAlign: 'center', padding: '40px' }}>
            데이터가 없습니다
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};
