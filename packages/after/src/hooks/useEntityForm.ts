import { useState } from 'react';
import type { User } from '../services/userService';
import type { Post } from '../services/postService';
import type { EntityType, Entity, UserFormData, PostFormData } from '../types/forms';

/**
 * Entity Form 관리 Hook
 *
 * Form 데이터, 모달 상태, 선택된 아이템 관리
 *
 * @param entityType 'user' | 'post'
 * @returns Form 상태 및 핸들러들
 */
export const useEntityForm = (entityType: EntityType) => {
  const [formData, setFormData] = useState<UserFormData | PostFormData>(
    getDefaultFormData(entityType)
  );
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Entity | null>(null);

  /**
   * 생성 모달 열기
   */
  const openCreateModal = () => {
    setFormData(getDefaultFormData(entityType));
    setIsCreateModalOpen(true);
  };

  /**
   * 생성 모달 닫기
   */
  const closeCreateModal = () => {
    setIsCreateModalOpen(false);
    setFormData(getDefaultFormData(entityType));
  };

  /**
   * 수정 모달 열기
   */
  const openEditModal = (item: Entity) => {
    setSelectedItem(item);

    if (entityType === 'user') {
      const user = item as User;
      setFormData({
        username: user.username,
        email: user.email,
        role: user.role,
        status: user.status,
      });
    } else {
      const post = item as Post;
      setFormData({
        title: post.title,
        content: post.content,
        author: post.author,
        category: post.category,
        status: post.status,
      });
    }

    setIsEditModalOpen(true);
  };

  /**
   * 수정 모달 닫기
   */
  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setFormData(getDefaultFormData(entityType));
    setSelectedItem(null);
  };

  /**
   * Form 필드 업데이트
   */
  const updateFormField = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return {
    formData,
    setFormData,
    updateFormField,
    isCreateModalOpen,
    isEditModalOpen,
    selectedItem,
    openCreateModal,
    closeCreateModal,
    openEditModal,
    closeEditModal,
  };
};

/**
 * Entity 타입별 기본 Form 데이터 생성
 */
function getDefaultFormData(entityType: EntityType): UserFormData | PostFormData {
  if (entityType === 'user') {
    const userData: UserFormData = {
      username: '',
      email: '',
      role: 'user',
      status: 'active',
    };
    return userData;
  } else {
    const postData: PostFormData = {
      title: '',
      content: '',
      author: '',
      category: '',
      status: 'draft',
    };
    return postData;
  }
}
