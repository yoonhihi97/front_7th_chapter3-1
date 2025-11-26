import type { User } from '../services/userService';
import type { Post } from '../services/postService';
import type { EntityType, Entity } from '../types/forms';

/**
 * 통계 카드 variant 타입
 */
export type StatVariant = 'info' | 'success' | 'warning' | 'error' | 'neutral';

/**
 * 통계 항목 구조
 */
export interface StatItem {
  id: string;
  label: string;
  value: number;
  variant: StatVariant;
}

/**
 * Entity 통계 계산 Hook
 *
 * User/Post의 통계 데이터를 계산하여 배열로 반환
 * 새로운 entity 타입 추가 시 이 함수에 case만 추가하면 됨
 *
 * @param data Entity 배열
 * @param entityType 'user' | 'post'
 * @returns 통계 데이터 배열
 *
 * @example
 * ```tsx
 * const stats = useEntityStats(users, 'user');
 * stats.forEach(stat => <StatCard {...stat} />)
 * ```
 */
export const useEntityStats = (data: Entity[], entityType: EntityType): StatItem[] => {
  if (entityType === 'user') {
    const users = data as User[];

    return [
      {
        id: 'total',
        label: '전체',
        value: users.length,
        variant: 'info',
      },
      {
        id: 'active',
        label: '활성',
        value: users.filter((u) => u.status === 'active').length,
        variant: 'success',
      },
      {
        id: 'inactive',
        label: '비활성',
        value: users.filter((u) => u.status === 'inactive').length,
        variant: 'warning',
      },
      {
        id: 'suspended',
        label: '정지',
        value: users.filter((u) => u.status === 'suspended').length,
        variant: 'error',
      },
      {
        id: 'admin',
        label: '관리자',
        value: users.filter((u) => u.role === 'admin').length,
        variant: 'neutral',
      },
    ];
  }

  // entityType === 'post'
  const posts = data as Post[];

  return [
    {
      id: 'total',
      label: '전체',
      value: posts.length,
      variant: 'info',
    },
    {
      id: 'published',
      label: '게시됨',
      value: posts.filter((p) => p.status === 'published').length,
      variant: 'success',
    },
    {
      id: 'draft',
      label: '임시저장',
      value: posts.filter((p) => p.status === 'draft').length,
      variant: 'warning',
    },
    {
      id: 'archived',
      label: '보관됨',
      value: posts.filter((p) => p.status === 'archived').length,
      variant: 'error',
    },
    {
      id: 'total-views',
      label: '총 조회수',
      value: posts.reduce((sum, p) => sum + p.views, 0),
      variant: 'neutral',
    },
  ];
};
