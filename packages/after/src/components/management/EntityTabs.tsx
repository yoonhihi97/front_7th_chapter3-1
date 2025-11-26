import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import type { EntityType } from '../../types/forms';

/**
 * Tab 버튼 variants 정의 (CVA 패턴)
 */
const tabButtonVariants = cva(
  [
    'px-4',
    'py-2',
    'text-sm',
    'font-medium',
    'border',
    'border-neutral-400',
    'rounded-sm',
    'transition-colors',
  ],
  {
    variants: {
      active: {
        true: ['bg-blue-700', 'text-white'],
        false: ['bg-neutral-100', 'text-neutral-800', 'hover:bg-neutral-200'],
      },
    },
    defaultVariants: {
      active: false,
    },
  }
);

interface TabButtonProps extends VariantProps<typeof tabButtonVariants> {
  onClick: () => void;
  children: React.ReactNode;
}

/**
 * 개별 탭 버튼 컴포넌트
 */
const TabButton: React.FC<TabButtonProps> = ({ active, onClick, children }) => {
  return (
    <button onClick={onClick} className={tabButtonVariants({ active })}>
      {children}
    </button>
  );
};

interface EntityTabsProps {
  activeTab: EntityType;
  onTabChange: (tab: EntityType) => void;
}

/**
 * EntityTabs - Entity 타입 전환 탭 UI
 *
 * User와 Post 사이를 전환하는 탭 버튼
 * CVA 패턴을 사용하여 variant 관리
 */
export const EntityTabs: React.FC<EntityTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="mb-4 border-b-2 border-neutral-300 pb-1">
      <TabButton active={activeTab === 'post'} onClick={() => onTabChange('post')}>
        게시글
      </TabButton>
      <span className="inline-block w-1" /> {/* 버튼 사이 간격 */}
      <TabButton active={activeTab === 'user'} onClick={() => onTabChange('user')}>
        사용자
      </TabButton>
    </div>
  );
};
