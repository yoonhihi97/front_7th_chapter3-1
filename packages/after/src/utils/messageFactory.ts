/**
 * 메시지 생성 유틸리티
 *
 * CRUD 작업에 대한 성공/에러 메시지를 일관되게 생성
 * 새로운 entity 타입이나 액션 추가 시 이 파일만 수정
 */

/**
 * Entity 타입
 */
type EntityType = 'user' | 'post';

/**
 * CRUD 액션 타입
 */
type CrudAction = 'create' | 'update' | 'delete' | 'load';

/**
 * Post 상태 액션 타입
 */
type PostStatusAction = 'publish' | 'archive' | 'restore';

/**
 * Entity 타입별 메시지 정보
 */
const ENTITY_INFO: Record<EntityType, { subject: string; object: string }> = {
  user: { subject: '사용자가', object: '사용자를' },
  post: { subject: '게시글이', object: '게시글을' },
};

/**
 * CRUD 액션별 성공 메시지 템플릿
 */
const CRUD_SUCCESS_MESSAGES: Record<CrudAction, (entityInfo: { subject: string; object: string }) => string> = {
  create: (info) => `${info.subject} 생성되었습니다`,
  update: (info) => `${info.subject} 수정되었습니다`,
  delete: () => `삭제되었습니다`,
  load: (info) => `${info.object.slice(0, -1)} 목록을 불러왔습니다`,
};

/**
 * CRUD 액션별 에러 메시지 템플릿
 */
const CRUD_ERROR_MESSAGES: Record<CrudAction, string> = {
  create: '생성에 실패했습니다',
  update: '수정에 실패했습니다',
  delete: '삭제에 실패했습니다',
  load: '데이터를 불러오는데 실패했습니다',
};

/**
 * Post 상태 액션별 성공 메시지
 */
const POST_STATUS_SUCCESS_MESSAGES: Record<PostStatusAction, string> = {
  publish: '게시되었습니다',
  archive: '보관되었습니다',
  restore: '복원되었습니다',
};

/**
 * Post 상태 액션별 에러 메시지
 */
const POST_STATUS_ERROR_MESSAGES: Record<PostStatusAction, string> = {
  publish: '게시에 실패했습니다',
  archive: '보관에 실패했습니다',
  restore: '복원에 실패했습니다',
};

/**
 * CRUD 성공 메시지 생성
 *
 * @param action CRUD 액션 타입
 * @param entityType Entity 타입
 * @returns 성공 메시지 문자열
 *
 * @example
 * messageFactory.success('create', 'user') // "사용자가 생성되었습니다"
 * messageFactory.success('delete', 'post') // "삭제되었습니다"
 */
export const createSuccessMessage = (action: CrudAction, entityType: EntityType): string => {
  const entityInfo = ENTITY_INFO[entityType];
  const messageTemplate = CRUD_SUCCESS_MESSAGES[action];
  return messageTemplate(entityInfo);
};

/**
 * CRUD 에러 메시지 생성
 *
 * @param action CRUD 액션 타입
 * @param customMessage 커스텀 에러 메시지 (선택)
 * @returns 에러 메시지 문자열
 *
 * @example
 * messageFactory.error('create') // "생성에 실패했습니다"
 * messageFactory.error('update', '중복된 이메일입니다') // "중복된 이메일입니다"
 */
export const createErrorMessage = (action: CrudAction, customMessage?: string): string => {
  return customMessage ?? CRUD_ERROR_MESSAGES[action];
};

/**
 * Post 상태 변경 성공 메시지 생성
 *
 * @param action Post 상태 액션
 * @returns 성공 메시지 문자열
 *
 * @example
 * createPostStatusSuccessMessage('publish') // "게시되었습니다"
 */
export const createPostStatusSuccessMessage = (action: PostStatusAction): string => {
  return POST_STATUS_SUCCESS_MESSAGES[action];
};

/**
 * Post 상태 변경 에러 메시지 생성
 *
 * @param action Post 상태 액션
 * @param customMessage 커스텀 에러 메시지 (선택)
 * @returns 에러 메시지 문자열
 *
 * @example
 * createPostStatusErrorMessage('publish') // "게시에 실패했습니다"
 */
export const createPostStatusErrorMessage = (action: PostStatusAction, customMessage?: string): string => {
  return customMessage ?? POST_STATUS_ERROR_MESSAGES[action];
};

/**
 * 통합 메시지 팩토리 객체
 *
 * @example
 * ```tsx
 * import { messageFactory } from '@/utils/messageFactory';
 *
 * // 사용자 생성 성공
 * messageFactory.success('create', 'user');
 *
 * // 삭제 실패
 * messageFactory.error('delete');
 *
 * // Post 게시 성공
 * messageFactory.postStatus.success('publish');
 * ```
 */
export const messageFactory = {
  success: createSuccessMessage,
  error: createErrorMessage,
  postStatus: {
    success: createPostStatusSuccessMessage,
    error: createPostStatusErrorMessage,
  },
};
