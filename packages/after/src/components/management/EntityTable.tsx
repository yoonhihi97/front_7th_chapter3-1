import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell, Button, Badge } from '../ui';
import {
  getRoleVariant,
  getRoleLabel,
  getStatusVariant,
  getStatusLabel,
  getCategoryVariant,
  getCategoryLabel,
} from '../../constants/badgeMappings';
import type { User } from '../../services/userService';
import type { Post } from '../../services/postService';
import type { EntityType, Entity } from '../../types/forms';

interface EntityTableProps {
  entityType: EntityType;
  data: Entity[];
  onEdit: (item: Entity) => void;
  onDelete: (id: number) => void;
  onPostAction?: (id: number, action: 'publish' | 'archive' | 'restore') => void;
}

/**
 * EntityTable - User/Post 테이블 렌더링
 *
 * entityType에 따라 동적으로 컬럼과 행 렌더링
 */
export const EntityTable: React.FC<EntityTableProps> = ({ entityType, data, onEdit, onDelete, onPostAction }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {entityType === 'user' ? (
            <>
              <TableHead className="w-16 text-center">ID</TableHead>
              <TableHead>사용자명</TableHead>
              <TableHead>이메일</TableHead>
              <TableHead className="w-24 text-center">역할</TableHead>
              <TableHead className="w-24 text-center">상태</TableHead>
              <TableHead className="w-32 text-center">작업</TableHead>
            </>
          ) : (
            <>
              <TableHead className="w-16 text-center">ID</TableHead>
              <TableHead className="max-w-xs">제목</TableHead>
              <TableHead className="w-28">작성자</TableHead>
              <TableHead className="w-28 text-center">카테고리</TableHead>
              <TableHead className="w-24 text-center">상태</TableHead>
              <TableHead className="w-24 text-center">조회수</TableHead>
              <TableHead className="w-64 text-center">작업</TableHead>
            </>
          )}
        </TableRow>
      </TableHeader>
      <TableBody>
        {entityType === 'user'
          ? (data as User[]).map((user) => (
              <UserRow key={user.id} user={user} onEdit={onEdit} onDelete={onDelete} />
            ))
          : (data as Post[]).map((post) => (
              <PostRow key={post.id} post={post} onEdit={onEdit} onDelete={onDelete} onAction={onPostAction} />
            ))}
      </TableBody>
    </Table>
  );
};

/**
 * User 테이블 행
 */
interface UserRowProps {
  user: User;
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
}

const UserRow: React.FC<UserRowProps> = ({ user, onEdit, onDelete }) => {
  return (
    <TableRow>
      <TableCell className="text-center">{user.id}</TableCell>
      <TableCell>{user.username}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell className="text-center">
        <Badge variant={getRoleVariant(user.role)}>{getRoleLabel(user.role)}</Badge>
      </TableCell>
      <TableCell className="text-center">
        <Badge variant={getStatusVariant(user.status)}>{getStatusLabel(user.status)}</Badge>
      </TableCell>
      <TableCell className="text-center">
        <div className="flex justify-center gap-2">
          <Button variant="outline" size="sm" onClick={() => onEdit(user)}>
            수정
          </Button>
          <Button variant="destructive" size="sm" onClick={() => onDelete(user.id)}>
            삭제
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
};

/**
 * Post 테이블 행
 */
interface PostRowProps {
  post: Post;
  onEdit: (post: Post) => void;
  onDelete: (id: number) => void;
  onAction?: (id: number, action: 'publish' | 'archive' | 'restore') => void;
}

const PostRow: React.FC<PostRowProps> = ({ post, onEdit, onDelete, onAction }) => {
  return (
    <TableRow>
      <TableCell className="text-center">{post.id}</TableCell>
      <TableCell>{post.title}</TableCell>
      <TableCell>{post.author}</TableCell>
      <TableCell className="text-center">
        <Badge variant={getCategoryVariant(post.category)} pill>
          {getCategoryLabel(post.category)}
        </Badge>
      </TableCell>
      <TableCell className="text-center">
        <Badge variant={getStatusVariant(post.status)}>{getStatusLabel(post.status)}</Badge>
      </TableCell>
      <TableCell className="text-center">{(post.views ?? 0).toLocaleString()}</TableCell>
      <TableCell className="text-center">
        <div className="flex flex-wrap justify-center gap-2">
          {post.status === 'draft' && onAction && (
            <Button variant="default" size="sm" onClick={() => onAction(post.id, 'publish')}>
              게시
            </Button>
          )}
          {post.status === 'published' && onAction && (
            <Button variant="secondary" size="sm" onClick={() => onAction(post.id, 'archive')}>
              보관
            </Button>
          )}
          {post.status === 'archived' && onAction && (
            <Button variant="default" size="sm" onClick={() => onAction(post.id, 'restore')}>
              복원
            </Button>
          )}
          <Button variant="outline" size="sm" onClick={() => onEdit(post)}>
            수정
          </Button>
          <Button variant="destructive" size="sm" onClick={() => onDelete(post.id)}>
            삭제
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
};
