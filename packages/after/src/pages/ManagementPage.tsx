import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui';
import { EntityTabs, StatsCards, EntityTable, EntityFormModal } from '../components/management';
import { useEntityData } from '../hooks/useEntityData';
import { useEntityForm } from '../hooks/useEntityForm';
import { useEntityStats } from '../hooks/useEntityStats';
import type { EntityType, Entity } from '../types/forms';

export const ManagementPage: React.FC = () => {
  const [entityType, setEntityType] = useState<EntityType>('post');

  // Custom Hooks
  const { data, createEntity, updateEntity, deleteEntity, handlePostStatusAction } = useEntityData(entityType);
  const {
    formData,
    isCreateModalOpen,
    isEditModalOpen,
    selectedItem,
    openCreateModal,
    closeCreateModal,
    openEditModal,
    closeEditModal,
    updateFormField,
  } = useEntityForm(entityType);
  const stats = useEntityStats(data, entityType);

  // entityType 변경 시 폼 초기화
  useEffect(() => {
    closeCreateModal();
    closeEditModal();
  }, [entityType]);

  // 생성 핸들러
  const handleCreate = async () => {
    try {
      await createEntity(formData);
      closeCreateModal();
    } catch {
      // 에러는 useEntityData에서 처리
    }
  };

  // 수정 핸들러
  const handleUpdate = async () => {
    if (!selectedItem) return;
    try {
      await updateEntity(selectedItem.id, formData);
      closeEditModal();
    } catch {
      // 에러는 useEntityData에서 처리
    }
  };

  // 수정 모달 열기
  const handleEdit = (item: Entity) => {
    openEditModal(item);
  };

  // 삭제 핸들러
  const handleDelete = async (id: number) => {
    await deleteEntity(id);
  };

  return (
    <div className="min-h-screen bg-(--color-bg-secondary)">
      <div className="mx-auto max-w-7xl p-5">
        {/* 페이지 헤더 */}
        <div className="mb-5">
          <h1 className="mb-1 text-2xl font-bold text-(--color-text-primary)">관리 시스템</h1>
          <p className="text-sm text-(--color-text-secondary)">사용자와 게시글을 관리하세요</p>
        </div>

        {/* 메인 컨텐츠 */}
        <div className="border border-(--card-border) bg-(--card-bg) p-4">
          {/* 탭 */}
          <EntityTabs activeTab={entityType} onTabChange={setEntityType} />

          {/* 새로 만들기 버튼 */}
          <div className="mb-4 text-right">
            <Button variant="default" size="md" onClick={openCreateModal}>
              새로 만들기
            </Button>
          </div>

          {/* 통계 카드 */}
          <StatsCards stats={stats} />

          {/* 테이블 */}
          <div className="overflow-auto border border-(--table-border) bg-(--table-bg)">
            <EntityTable
              entityType={entityType}
              data={data}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onPostAction={handlePostStatusAction}
            />
          </div>
        </div>
      </div>

      {/* 생성 모달 */}
      <EntityFormModal
        isOpen={isCreateModalOpen}
        onClose={closeCreateModal}
        onSubmit={handleCreate}
        entityType={entityType}
        formData={formData}
        onFieldChange={updateFormField}
        mode="create"
      />

      {/* 수정 모달 */}
      <EntityFormModal
        isOpen={isEditModalOpen}
        onClose={closeEditModal}
        onSubmit={handleUpdate}
        entityType={entityType}
        formData={formData}
        onFieldChange={updateFormField}
        mode="edit"
        selectedItem={selectedItem}
      />
    </div>
  );
};
