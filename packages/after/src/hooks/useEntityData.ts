import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { userService, type User } from '../services/userService';
import { postService, type Post } from '../services/postService';
import { messageFactory } from '../utils/messageFactory';
import type { EntityType, Entity, UserFormData, PostFormData } from '../types/forms';

/**
 * Entity 데이터 관리 Hook
 *
 * ManagementPage의 데이터 fetching, CRUD 로직 분리
 *
 * @param entityType 'user' | 'post'
 * @returns 데이터 및 CRUD 함수들
 */
export const useEntityData = (entityType: EntityType) => {
  const [data, setData] = useState<Entity[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * 데이터 로드
   */
  const loadData = async () => {
    setIsLoading(true);
    try {
      let result: Entity[];

      if (entityType === 'user') {
        result = await userService.getAll();
      } else {
        result = await postService.getAll();
      }

      setData(result);
    } catch (error) {
      const message = error instanceof Error ? error.message : messageFactory.error('load');
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Entity 생성
   */
  const createEntity = async (formData: UserFormData | PostFormData) => {
    try {
      if (entityType === 'user') {
        const userData = formData as UserFormData;
        await userService.create({
          username: userData.username,
          email: userData.email,
          role: userData.role || 'user',
          status: userData.status || 'active',
        });
      } else {
        const postData = formData as PostFormData;
        await postService.create({
          title: postData.title,
          content: postData.content || '',
          author: postData.author,
          category: postData.category,
          status: postData.status || 'draft',
        });
      }

      await loadData();
      toast.success(messageFactory.success('create', entityType));
    } catch (error) {
      const message = error instanceof Error ? error.message : messageFactory.error('create');
      toast.error(message);
      throw error;
    }
  };

  /**
   * Entity 수정
   */
  const updateEntity = async (id: number, formData: UserFormData | PostFormData) => {
    try {
      if (entityType === 'user') {
        await userService.update(id, formData as Partial<User>);
      } else {
        await postService.update(id, formData as Partial<Post>);
      }

      await loadData();
      toast.success(messageFactory.success('update', entityType));
    } catch (error) {
      const message = error instanceof Error ? error.message : messageFactory.error('update');
      toast.error(message);
      throw error;
    }
  };

  /**
   * Entity 삭제
   */
  const deleteEntity = async (id: number) => {
    if (!confirm('정말 삭제하시겠습니까?')) return;

    try {
      if (entityType === 'user') {
        await userService.delete(id);
      } else {
        await postService.delete(id);
      }

      await loadData();
      toast.success(messageFactory.success('delete', entityType));
    } catch (error) {
      const message = error instanceof Error ? error.message : messageFactory.error('delete');
      toast.error(message);
    }
  };

  /**
   * Post 상태 액션 (publish, archive, restore)
   */
  const handlePostStatusAction = async (id: number, action: 'publish' | 'archive' | 'restore') => {
    if (entityType !== 'post') return;

    try {
      if (action === 'publish') {
        await postService.publish(id);
      } else if (action === 'archive') {
        await postService.archive(id);
      } else if (action === 'restore') {
        await postService.restore(id);
      }

      await loadData();
      toast.success(messageFactory.postStatus.success(action));
    } catch (error) {
      const message = error instanceof Error ? error.message : messageFactory.postStatus.error(action);
      toast.error(message);
    }
  };

  // entityType 변경 시 데이터 초기화 후 재로드
  useEffect(() => {
    setData([]); // 이전 데이터 초기화
    loadData();
  }, [entityType]);

  return {
    data,
    isLoading,
    loadData,
    createEntity,
    updateEntity,
    deleteEntity,
    handlePostStatusAction,
  };
};
