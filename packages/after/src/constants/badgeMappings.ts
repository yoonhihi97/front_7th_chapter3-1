/**
 * Badge 매핑 설정
 *
 * 역할(Role), 상태(Status), 카테고리(Category)를 Badge variant와 라벨로 매핑
 * 새로운 타입 추가 시 이 파일만 수정하면 됨 (확장성)
 */

/**
 * Badge variant 타입 정의 (shadcn/ui Badge 컴포넌트와 일치)
 */
type BadgeVariant = 'primary' | 'secondary' | 'destructive' | 'warning' | 'success' | 'info';

/**
 * Badge 매핑 항목 인터페이스
 */
interface BadgeMapping {
  variant: BadgeVariant;
  label: string;
}

/**
 * 역할(Role) 타입과 매핑
 */
export type UserRole = 'admin' | 'moderator' | 'user' | 'guest';

export const ROLE_MAPPINGS: Record<UserRole, BadgeMapping> = {
  admin: {
    variant: 'destructive',
    label: '관리자',
  },
  moderator: {
    variant: 'warning',
    label: '운영자',
  },
  user: {
    variant: 'primary',
    label: '사용자',
  },
  guest: {
    variant: 'secondary',
    label: '게스트',
  },
};

/**
 * 상태(Status) 타입과 매핑
 */
export type UserStatus = 'active' | 'inactive' | 'suspended';
export type PostStatus = 'published' | 'draft' | 'archived' | 'pending' | 'rejected';
export type Status = UserStatus | PostStatus;

export const STATUS_MAPPINGS: Record<Status, BadgeMapping> = {
  // Post 상태
  published: {
    variant: 'success',
    label: '게시됨',
  },
  draft: {
    variant: 'warning',
    label: '임시저장',
  },
  archived: {
    variant: 'secondary',
    label: '보관됨',
  },
  pending: {
    variant: 'info',
    label: '대기중',
  },
  rejected: {
    variant: 'destructive',
    label: '거부됨',
  },
  // User 상태
  active: {
    variant: 'success',
    label: '활성',
  },
  inactive: {
    variant: 'warning',
    label: '비활성',
  },
  suspended: {
    variant: 'destructive',
    label: '정지',
  },
};

/**
 * 카테고리(Category) 타입과 매핑
 */
export type PostCategory = 'development' | 'design' | 'accessibility';

export const CATEGORY_MAPPINGS: Record<PostCategory, BadgeMapping> = {
  development: {
    variant: 'primary',
    label: 'Development',
  },
  design: {
    variant: 'info',
    label: 'Design',
  },
  accessibility: {
    variant: 'destructive',
    label: 'Accessibility',
  },
};

/**
 * 역할 variant 가져오기 (fallback 포함)
 */
export const getRoleVariant = (role: string): BadgeVariant => {
  return ROLE_MAPPINGS[role as UserRole]?.variant ?? 'primary';
};

/**
 * 역할 라벨 가져오기 (fallback 포함)
 */
export const getRoleLabel = (role: string): string => {
  return ROLE_MAPPINGS[role as UserRole]?.label ?? role;
};

/**
 * 상태 variant 가져오기 (fallback 포함)
 */
export const getStatusVariant = (status: string): BadgeVariant => {
  return STATUS_MAPPINGS[status as Status]?.variant ?? 'secondary';
};

/**
 * 상태 라벨 가져오기 (fallback 포함)
 */
export const getStatusLabel = (status: string): string => {
  return STATUS_MAPPINGS[status as Status]?.label ?? status;
};

/**
 * 카테고리 variant 가져오기 (fallback 포함)
 */
export const getCategoryVariant = (category: string): BadgeVariant => {
  return CATEGORY_MAPPINGS[category as PostCategory]?.variant ?? 'secondary';
};

/**
 * 카테고리 라벨 가져오기 (fallback 포함)
 */
export const getCategoryLabel = (category: string): string => {
  return CATEGORY_MAPPINGS[category as PostCategory]?.label ?? category;
};
