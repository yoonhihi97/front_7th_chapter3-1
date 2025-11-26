import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  Button,
  Input,
  Textarea,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Card,
  CardContent,
} from '../ui';
import type { Entity, EntityType, UserFormData, PostFormData } from '../../types/forms';
import type { Post } from '../../services/postService';

/**
 * 폼 에러 타입
 */
interface FormErrors {
  [key: string]: string;
}

interface EntityFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  entityType: EntityType;
  formData: UserFormData | PostFormData;
  onFieldChange: (field: string, value: string) => void;
  mode: 'create' | 'edit';
  selectedItem?: Entity | null;
}

/**
 * EntityFormModal - User/Post 생성/수정 모달
 *
 * entityType에 따라 동적으로 폼 필드 렌더링
 * 인라인 유효성 검사 에러 메시지 표시
 */
export const EntityFormModal: React.FC<EntityFormModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  entityType,
  formData,
  onFieldChange,
  mode,
  selectedItem,
}) => {
  const [errors, setErrors] = useState<FormErrors>({});

  const title = mode === 'create' ? `새 ${entityType === 'user' ? '사용자' : '게시글'} 만들기` : '수정하기';

  const description =
    mode === 'create'
      ? entityType === 'user'
        ? '새로운 사용자 정보를 입력하세요.'
        : '새로운 게시글 정보를 입력하세요.'
      : entityType === 'user'
        ? '사용자 정보를 수정하세요.'
        : '게시글 정보를 수정하세요.';

  // 모달 열릴 때 에러 초기화
  useEffect(() => {
    if (isOpen) {
      setErrors({});
    }
  }, [isOpen]);

  /**
   * 필드별 실시간 유효성 검사
   */
  const validateField = (field: string, value: string): string => {
    if (!value) return '';

    if (entityType === 'user') {
      if (field === 'username' && value.trim().length < 2) {
        return '사용자명은 2자 이상이어야 합니다';
      }
      if (field === 'email' && !value.includes('@')) {
        return '올바른 이메일 형식을 입력하세요';
      }
    } else {
      if (field === 'title' && value.trim().length < 5) {
        return '제목은 5자 이상이어야 합니다';
      }
      if (field === 'author' && value.trim().length < 2) {
        return '작성자명은 2자 이상이어야 합니다';
      }
    }
    return '';
  };

  /**
   * 필드 변경 핸들러 (실시간 유효성 검사 포함)
   */
  const handleFieldChange = (field: string, value: string) => {
    onFieldChange(field, value);
    const error = validateField(field, value);
    setErrors((prev) => ({
      ...prev,
      [field]: error,
    }));
  };

  /**
   * 전체 폼 유효성 검사
   */
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (entityType === 'user') {
      const data = formData as UserFormData;
      if (!data.username || data.username.trim().length < 2) {
        newErrors.username = '사용자명은 2자 이상이어야 합니다';
      }
      if (!data.email || !data.email.includes('@')) {
        newErrors.email = '올바른 이메일 형식을 입력하세요';
      }
    } else {
      const data = formData as PostFormData;
      if (!data.title || data.title.trim().length < 5) {
        newErrors.title = '제목은 5자 이상이어야 합니다';
      }
      if (!data.author || data.author.trim().length < 2) {
        newErrors.author = '작성자명은 2자 이상이어야 합니다';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4 py-4">
            {entityType === 'user' ? (
              <UserFormFields formData={formData as UserFormData} onFieldChange={handleFieldChange} errors={errors} />
            ) : (
              <PostFormFields formData={formData as PostFormData} onFieldChange={handleFieldChange} errors={errors} />
            )}

            {/* 수정 모드일 때 추가 정보 표시 */}
            {mode === 'edit' && selectedItem && (
              <Card stat="info">
                <CardContent className="px-3 py-2 text-sm text-blue-900">
                  ID: {selectedItem.id} | 생성일: {selectedItem.createdAt}
                  {entityType === 'post' && ` | 조회수: ${(selectedItem as Post).views}`}
                </CardContent>
              </Card>
            )}
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              취소
            </Button>
            <Button type="submit">{mode === 'create' ? '생성' : '저장'}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

/**
 * 에러 메시지 컴포넌트
 */
const FieldError: React.FC<{ message?: string }> = ({ message }) => {
  if (!message) return null;
  return <p className="text-sm text-red-600">{message}</p>;
};

/**
 * User 폼 필드
 */
interface UserFormFieldsProps {
  formData: UserFormData;
  onFieldChange: (field: string, value: string) => void;
  errors: FormErrors;
}

const UserFormFields: React.FC<UserFormFieldsProps> = ({ formData, onFieldChange, errors }) => {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="username">사용자명</Label>
        <Input
          id="username"
          value={formData.username}
          onChange={(e) => onFieldChange('username', e.target.value)}
          placeholder="사용자명을 입력하세요"
        />
        <FieldError message={errors.username} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">이메일</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => onFieldChange('email', e.target.value)}
          placeholder="이메일을 입력하세요"
        />
        <FieldError message={errors.email} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="role">역할</Label>
        <Select value={formData.role} onValueChange={(value) => onFieldChange('role', value)}>
          <SelectTrigger>
            <SelectValue placeholder="역할 선택" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="admin">관리자</SelectItem>
            <SelectItem value="moderator">운영자</SelectItem>
            <SelectItem value="user">사용자</SelectItem>
            <SelectItem value="guest">게스트</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="status">상태</Label>
        <Select value={formData.status} onValueChange={(value) => onFieldChange('status', value)}>
          <SelectTrigger>
            <SelectValue placeholder="상태 선택" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="active">활성</SelectItem>
            <SelectItem value="inactive">비활성</SelectItem>
            <SelectItem value="suspended">정지</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </>
  );
};

/**
 * Post 폼 필드
 */
interface PostFormFieldsProps {
  formData: PostFormData;
  onFieldChange: (field: string, value: string) => void;
  errors: FormErrors;
}

const PostFormFields: React.FC<PostFormFieldsProps> = ({ formData, onFieldChange, errors }) => {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="title">제목</Label>
        <Input
          id="title"
          value={formData.title}
          onChange={(e) => onFieldChange('title', e.target.value)}
          placeholder="제목을 입력하세요"
        />
        <FieldError message={errors.title} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="content">내용</Label>
        <Textarea
          id="content"
          value={formData.content}
          onChange={(e) => onFieldChange('content', e.target.value)}
          placeholder="내용을 입력하세요"
          rows={4}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="author">작성자</Label>
        <Input
          id="author"
          value={formData.author}
          onChange={(e) => onFieldChange('author', e.target.value)}
          placeholder="작성자를 입력하세요"
        />
        <FieldError message={errors.author} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="category">카테고리</Label>
        <Select value={formData.category} onValueChange={(value) => onFieldChange('category', value)}>
          <SelectTrigger>
            <SelectValue placeholder="카테고리 선택" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="development">Development</SelectItem>
            <SelectItem value="design">Design</SelectItem>
            <SelectItem value="accessibility">Accessibility</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="postStatus">상태</Label>
        <Select value={formData.status} onValueChange={(value) => onFieldChange('status', value)}>
          <SelectTrigger>
            <SelectValue placeholder="상태 선택" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="draft">임시저장</SelectItem>
            <SelectItem value="published">게시됨</SelectItem>
            <SelectItem value="archived">보관됨</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </>
  );
};
