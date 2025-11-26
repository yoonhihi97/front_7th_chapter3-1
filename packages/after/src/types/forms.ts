/**
 * Form 관련 타입 정의
 */

import type { User } from '../services/userService';
import type { Post } from '../services/postService';

/**
 * User 생성/수정 폼 데이터
 */
export interface UserFormData {
  username: string;
  email: string;
  role: User['role'];
  status: User['status'];
}

/**
 * Post 생성/수정 폼 데이터
 */
export interface PostFormData {
  title: string;
  content: string;
  author: string;
  category: string;
  status: Post['status'];
}

/**
 * Entity 타입
 */
export type EntityType = 'user' | 'post';

/**
 * Entity Union 타입
 */
export type Entity = User | Post;
