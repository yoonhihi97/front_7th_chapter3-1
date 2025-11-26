import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui';
import { cva } from 'class-variance-authority';
import type { StatItem } from '../../hooks/useEntityStats';

/**
 * 통계 값 텍스트 색상 variants (CVA)
 */
const statValueVariants = cva('text-2xl font-bold', {
  variants: {
    variant: {
      info: 'text-(--color-feedback-info)',
      success: 'text-(--color-feedback-success)',
      warning: 'text-(--color-feedback-warning)',
      error: 'text-(--color-feedback-error)',
      neutral: 'text-(--color-text-primary)',
    },
  },
});

interface StatCardProps {
  stat: StatItem;
}

/**
 * 개별 통계 카드 컴포넌트
 */
const StatCard: React.FC<StatCardProps> = ({ stat }) => {
  return (
    <Card stat={stat.variant}>
      <CardHeader className="px-[15px] py-0 pt-3 pb-1">
        <CardTitle className="text-xs font-normal text-(--color-text-secondary)">{stat.label}</CardTitle>
      </CardHeader>
      <CardContent className="px-[15px] py-0 pb-3">
        <div className={statValueVariants({ variant: stat.variant })}>{stat.value.toLocaleString()}</div>
      </CardContent>
    </Card>
  );
};

interface StatsCardsProps {
  stats: StatItem[];
}

/**
 * StatsCards - 통계 카드 그리드
 *
 * Entity의 통계 정보를 카드 형태로 표시
 * Grid 레이아웃으로 반응형 지원
 */
export const StatsCards: React.FC<StatsCardsProps> = ({ stats }) => {
  return (
    <div className="mb-4 grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-2.5">
      {stats.map((stat) => (
        <StatCard key={stat.id} stat={stat} />
      ))}
    </div>
  );
};
