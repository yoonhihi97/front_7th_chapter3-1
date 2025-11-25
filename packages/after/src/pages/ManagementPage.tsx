import React, { useState, useEffect } from 'react';
import {
  Button,
  Input,
  Label,
  Field,
  Textarea,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Badge,
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  Alert,
  AlertTitle,
  AlertDescription,
} from '../components/ui';
import { userService } from '../services/userService';
import { postService } from '../services/postService';
import type { User } from '../services/userService';
import type { Post } from '../services/postService';
import '../styles/components.css';

type EntityType = 'user' | 'post';
type Entity = User | Post;

export const ManagementPage: React.FC = () => {
  const [entityType, setEntityType] = useState<EntityType>('post');
  const [data, setData] = useState<Entity[]>([]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Entity | null>(null);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState<any>({});

  useEffect(() => {
    loadData();
    setFormData({});
    setIsCreateModalOpen(false);
    setIsEditModalOpen(false);
    setSelectedItem(null);
  }, [entityType]);

  const loadData = async () => {
    try {
      let result: Entity[];

      if (entityType === 'user') {
        result = await userService.getAll();
      } else {
        result = await postService.getAll();
      }

      setData(result);
    } catch (error: any) {
      setErrorMessage('데이터를 불러오는데 실패했습니다');
      setShowErrorAlert(true);
    }
  };

  const handleCreate = async () => {
    try {
      if (entityType === 'user') {
        await userService.create({
          username: formData.username,
          email: formData.email,
          role: formData.role || 'user',
          status: formData.status || 'active',
        });
      } else {
        await postService.create({
          title: formData.title,
          content: formData.content || '',
          author: formData.author,
          category: formData.category,
          status: formData.status || 'draft',
        });
      }

      await loadData();
      setIsCreateModalOpen(false);
      setFormData({});
      setAlertMessage(`${entityType === 'user' ? '사용자' : '게시글'}가 생성되었습니다`);
      setShowSuccessAlert(true);
    } catch (error: any) {
      setErrorMessage(error.message || '생성에 실패했습니다');
      setShowErrorAlert(true);
    }
  };

  const handleEdit = (item: Entity) => {
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

  const handleUpdate = async () => {
    if (!selectedItem) return;

    try {
      if (entityType === 'user') {
        await userService.update(selectedItem.id, formData);
      } else {
        await postService.update(selectedItem.id, formData);
      }

      await loadData();
      setIsEditModalOpen(false);
      setFormData({});
      setSelectedItem(null);
      setAlertMessage(`${entityType === 'user' ? '사용자' : '게시글'}가 수정되었습니다`);
      setShowSuccessAlert(true);
    } catch (error: any) {
      setErrorMessage(error.message || '수정에 실패했습니다');
      setShowErrorAlert(true);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('정말 삭제하시겠습니까?')) return;

    try {
      if (entityType === 'user') {
        await userService.delete(id);
      } else {
        await postService.delete(id);
      }

      await loadData();
      setAlertMessage('삭제되었습니다');
      setShowSuccessAlert(true);
    } catch (error: any) {
      setErrorMessage(error.message || '삭제에 실패했습니다');
      setShowErrorAlert(true);
    }
  };

  const handleStatusAction = async (id: number, action: 'publish' | 'archive' | 'restore') => {
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
      const message = action === 'publish' ? '게시' : action === 'archive' ? '보관' : '복원';
      setAlertMessage(`${message}되었습니다`);
      setShowSuccessAlert(true);
    } catch (error: any) {
      setErrorMessage(error.message || '작업에 실패했습니다');
      setShowErrorAlert(true);
    }
  };

  const getStats = () => {
    if (entityType === 'user') {
      const users = data as User[];
      return {
        total: users.length,
        stat1: {
          label: '활성',
          value: users.filter((u) => u.status === 'active').length,
          color: '#2e7d32',
        },
        stat2: {
          label: '비활성',
          value: users.filter((u) => u.status === 'inactive').length,
          color: '#ed6c02',
        },
        stat3: {
          label: '정지',
          value: users.filter((u) => u.status === 'suspended').length,
          color: '#d32f2f',
        },
        stat4: {
          label: '관리자',
          value: users.filter((u) => u.role === 'admin').length,
          color: '#1976d2',
        },
      };
    } else {
      const posts = data as Post[];
      return {
        total: posts.length,
        stat1: {
          label: '게시됨',
          value: posts.filter((p) => p.status === 'published').length,
          color: '#2e7d32',
        },
        stat2: {
          label: '임시저장',
          value: posts.filter((p) => p.status === 'draft').length,
          color: '#ed6c02',
        },
        stat3: {
          label: '보관됨',
          value: posts.filter((p) => p.status === 'archived').length,
          color: 'rgba(0, 0, 0, 0.6)',
        },
        stat4: {
          label: '총 조회수',
          value: posts.reduce((sum, p) => sum + p.views, 0),
          color: '#1976d2',
        },
      };
    }
  };

  // Helper functions for Badge mapping
  const getRoleVariant = (role: string): 'primary' | 'secondary' | 'destructive' | 'warning' => {
    const map: Record<string, 'primary' | 'secondary' | 'destructive' | 'warning'> = {
      admin: 'destructive',
      moderator: 'warning',
      user: 'primary',
      guest: 'secondary',
    };
    return map[role] || 'primary';
  };

  const getRoleLabel = (role: string) => {
    const labels: Record<string, string> = {
      admin: '관리자',
      moderator: '운영자',
      user: '사용자',
      guest: '게스트',
    };
    return labels[role] || role;
  };

  const getStatusVariant = (status: string): 'success' | 'warning' | 'secondary' | 'info' | 'destructive' => {
    const map: Record<string, 'success' | 'warning' | 'secondary' | 'info' | 'destructive'> = {
      published: 'success',
      active: 'success',
      draft: 'warning',
      inactive: 'warning',
      archived: 'secondary',
      pending: 'info',
      rejected: 'destructive',
      suspended: 'destructive',
    };
    return map[status] || 'secondary';
  };

  const getStatusLabel = (status: string) => {
    const labels: Record<string, string> = {
      published: '게시됨',
      draft: '임시저장',
      archived: '보관됨',
      pending: '대기중',
      rejected: '거부됨',
      active: '활성',
      inactive: '비활성',
      suspended: '정지',
    };
    return labels[status] || status;
  };

  const getCategoryVariant = (category: string): 'primary' | 'info' | 'destructive' | 'secondary' => {
    const map: Record<string, 'primary' | 'info' | 'destructive' | 'secondary'> = {
      development: 'primary',
      design: 'info',
      accessibility: 'destructive',
    };
    return map[category] || 'secondary';
  };

  const stats = getStats();

  return (
    <div style={{ minHeight: '100vh', background: '#f0f0f0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        <div style={{ marginBottom: '20px' }}>
          <h1
            style={{
              fontSize: '24px',
              fontWeight: 'bold',
              marginBottom: '5px',
              color: '#333',
            }}
          >
            관리 시스템
          </h1>
          <p style={{ color: '#666', fontSize: '14px' }}>사용자와 게시글을 관리하세요</p>
        </div>

        <div
          style={{
            background: 'white',
            border: '1px solid #ddd',
            padding: '10px',
          }}
        >
          <div
            style={{
              marginBottom: '15px',
              borderBottom: '2px solid #ccc',
              paddingBottom: '5px',
            }}
          >
            <button
              onClick={() => setEntityType('post')}
              style={{
                padding: '8px 16px',
                marginRight: '5px',
                fontSize: '14px',
                fontWeight: entityType === 'post' ? 'bold' : 'normal',
                border: '1px solid #999',
                background: entityType === 'post' ? '#1976d2' : '#f5f5f5',
                color: entityType === 'post' ? 'white' : '#333',
                cursor: 'pointer',
                borderRadius: '3px',
              }}
            >
              게시글
            </button>
            <button
              onClick={() => setEntityType('user')}
              style={{
                padding: '8px 16px',
                fontSize: '14px',
                fontWeight: entityType === 'user' ? 'bold' : 'normal',
                border: '1px solid #999',
                background: entityType === 'user' ? '#1976d2' : '#f5f5f5',
                color: entityType === 'user' ? 'white' : '#333',
                cursor: 'pointer',
                borderRadius: '3px',
              }}
            >
              사용자
            </button>
          </div>

          <div>
            <div style={{ marginBottom: '15px', textAlign: 'right' }}>
              <Button variant="default" size="md" onClick={() => setIsCreateModalOpen(true)}>
                새로 만들기
              </Button>
            </div>

            {showSuccessAlert && (
              <div style={{ marginBottom: '10px' }}>
                <Alert variant="success">
                  <AlertTitle>성공</AlertTitle>
                  <AlertDescription>{alertMessage}</AlertDescription>
                </Alert>
              </div>
            )}

            {showErrorAlert && (
              <div style={{ marginBottom: '10px' }}>
                <Alert variant="error">
                  <AlertTitle>오류</AlertTitle>
                  <AlertDescription>{errorMessage}</AlertDescription>
                </Alert>
              </div>
            )}

            <div className="grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-2.5 mb-4">
              <Card stat="info">
                <CardHeader className="py-0 pt-3 px-[15px] pb-1">
                  <CardTitle className="text-xs text-gray-600 font-normal">
                    전체
                  </CardTitle>
                </CardHeader>
                <CardContent className="py-0 px-[15px] pb-3">
                  <div className="text-2xl font-bold text-blue-600">
                    {stats.total}
                  </div>
                </CardContent>
              </Card>

              <Card stat="success">
                <CardHeader className="py-0 pt-3 px-[15px] pb-1">
                  <CardTitle className="text-xs text-gray-600 font-normal">
                    {stats.stat1.label}
                  </CardTitle>
                </CardHeader>
                <CardContent className="py-0 px-[15px] pb-3">
                  <div className="text-2xl font-bold text-green-700">
                    {stats.stat1.value}
                  </div>
                </CardContent>
              </Card>

              <Card stat="warning">
                <CardHeader className="py-0 pt-3 px-[15px] pb-1">
                  <CardTitle className="text-xs text-gray-600 font-normal">
                    {stats.stat2.label}
                  </CardTitle>
                </CardHeader>
                <CardContent className="py-0 px-[15px] pb-3">
                  <div className="text-2xl font-bold text-orange-600">
                    {stats.stat2.value}
                  </div>
                </CardContent>
              </Card>

              <Card stat="error">
                <CardHeader className="py-0 pt-3 px-[15px] pb-1">
                  <CardTitle className="text-xs text-gray-600 font-normal">
                    {stats.stat3.label}
                  </CardTitle>
                </CardHeader>
                <CardContent className="py-0 px-[15px] pb-3">
                  <div className="text-2xl font-bold text-red-600">
                    {stats.stat3.value}
                  </div>
                </CardContent>
              </Card>

              <Card stat="neutral">
                <CardHeader className="py-0 pt-3 px-[15px] pb-1">
                  <CardTitle className="text-xs text-gray-600 font-normal">
                    {stats.stat4.label}
                  </CardTitle>
                </CardHeader>
                <CardContent className="py-0 px-[15px] pb-3">
                  <div className="text-2xl font-bold text-gray-700">
                    {stats.stat4.value}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div
              style={{
                border: '1px solid #ddd',
                background: 'white',
                overflow: 'auto',
              }}
            >
              <Table>
                <TableHeader>
                  <TableRow>
                    {entityType === 'user' ? (
                      <>
                        <TableHead style={{ width: '60px' }}>ID</TableHead>
                        <TableHead style={{ width: '150px' }}>사용자명</TableHead>
                        <TableHead>이메일</TableHead>
                        <TableHead style={{ width: '120px' }}>역할</TableHead>
                        <TableHead style={{ width: '120px' }}>상태</TableHead>
                        <TableHead style={{ width: '120px' }}>생성일</TableHead>
                        <TableHead style={{ width: '140px' }}>마지막 로그인</TableHead>
                        <TableHead style={{ width: '200px' }}>관리</TableHead>
                      </>
                    ) : (
                      <>
                        <TableHead style={{ width: '60px' }}>ID</TableHead>
                        <TableHead>제목</TableHead>
                        <TableHead style={{ width: '120px' }}>작성자</TableHead>
                        <TableHead style={{ width: '140px' }}>카테고리</TableHead>
                        <TableHead style={{ width: '120px' }}>상태</TableHead>
                        <TableHead style={{ width: '100px' }}>조회수</TableHead>
                        <TableHead style={{ width: '120px' }}>작성일</TableHead>
                        <TableHead style={{ width: '250px' }}>관리</TableHead>
                      </>
                    )}
                  </TableRow>
                </TableHeader>
                <TableBody striped>
                  {entityType === 'user'
                    ? (data as User[]).map((user) => (
                        <TableRow key={user.id}>
                          <TableCell>{user.id}</TableCell>
                          <TableCell>{user.username}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>
                            <Badge variant={getRoleVariant(user.role)}>
                              {getRoleLabel(user.role)}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge variant={getStatusVariant(user.status)}>
                              {getStatusLabel(user.status)}
                            </Badge>
                          </TableCell>
                          <TableCell>{user.createdAt}</TableCell>
                          <TableCell>{user.lastLogin || '-'}</TableCell>
                          <TableCell>
                            <div style={{ display: 'flex', gap: '8px' }}>
                              <Button size="sm" variant="default" onClick={() => handleEdit(user)}>
                                수정
                              </Button>
                              <Button
                                size="sm"
                                variant="destructive"
                                onClick={() => handleDelete(user.id)}
                              >
                                삭제
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))
                    : (data as Post[]).map((post) => (
                        <TableRow key={post.id}>
                          <TableCell>{post.id}</TableCell>
                          <TableCell>{post.title}</TableCell>
                          <TableCell>{post.author}</TableCell>
                          <TableCell>
                            <Badge variant={getCategoryVariant(post.category)} pill>
                              {post.category}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge variant={getStatusVariant(post.status)}>
                              {getStatusLabel(post.status)}
                            </Badge>
                          </TableCell>
                          <TableCell>{post.views.toLocaleString()}</TableCell>
                          <TableCell>{post.createdAt}</TableCell>
                          <TableCell>
                            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                              <Button size="sm" variant="default" onClick={() => handleEdit(post)}>
                                수정
                              </Button>
                              {post.status === 'draft' && (
                                <Button
                                  size="sm"
                                  variant="success"
                                  onClick={() => handleStatusAction(post.id, 'publish')}
                                >
                                  게시
                                </Button>
                              )}
                              {post.status === 'published' && (
                                <Button
                                  size="sm"
                                  variant="secondary"
                                  onClick={() => handleStatusAction(post.id, 'archive')}
                                >
                                  보관
                                </Button>
                              )}
                              {post.status === 'archived' && (
                                <Button
                                  size="sm"
                                  variant="default"
                                  onClick={() => handleStatusAction(post.id, 'restore')}
                                >
                                  복원
                                </Button>
                              )}
                              <Button
                                size="sm"
                                variant="destructive"
                                onClick={() => handleDelete(post.id)}
                              >
                                삭제
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>

      <Dialog
        open={isCreateModalOpen}
        onOpenChange={(open) => {
          if (!open) {
            setIsCreateModalOpen(false);
            setFormData({});
          }
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{`새 ${entityType === 'user' ? '사용자' : '게시글'} 만들기`}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {entityType === 'user' ? (
              <>
                <Field>
                  <Label htmlFor="username">
                    사용자명 <span className="text-feedback-error">*</span>
                  </Label>
                  <Input
                    id="username"
                    name="username"
                    value={formData.username || ''}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    placeholder="사용자명을 입력하세요"
                  />
                </Field>
                <Field>
                  <Label htmlFor="email">
                    이메일 <span className="text-feedback-error">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email || ''}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="이메일을 입력하세요"
                  />
                </Field>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '16px',
                  }}
                >
                  <Field>
                    <Label htmlFor="role">역할</Label>
                    <Select
                      name="role"
                      value={formData.role || 'user'}
                      onValueChange={(value) => setFormData({ ...formData, role: value })}
                    >
                      <SelectTrigger id="role">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="user">사용자</SelectItem>
                        <SelectItem value="moderator">운영자</SelectItem>
                        <SelectItem value="admin">관리자</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field>
                    <Label htmlFor="status">상태</Label>
                    <Select
                      name="status"
                      value={formData.status || 'active'}
                      onValueChange={(value) => setFormData({ ...formData, status: value })}
                    >
                      <SelectTrigger id="status">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active">활성</SelectItem>
                        <SelectItem value="inactive">비활성</SelectItem>
                        <SelectItem value="suspended">정지</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>
                </div>
              </>
            ) : (
              <>
                <Field>
                  <Label htmlFor="title">
                    제목 <span className="text-feedback-error">*</span>
                  </Label>
                  <Input
                    id="title"
                    name="title"
                    value={formData.title || ''}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="게시글 제목을 입력하세요"
                  />
                </Field>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '16px',
                  }}
                >
                  <Field>
                    <Label htmlFor="author">
                      작성자 <span className="text-feedback-error">*</span>
                    </Label>
                    <Input
                      id="author"
                      name="author"
                      value={formData.author || ''}
                      onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                      placeholder="작성자명"
                    />
                  </Field>
                  <Field>
                    <Label htmlFor="category">카테고리</Label>
                    <Select
                      name="category"
                      value={formData.category || ''}
                      onValueChange={(value) => setFormData({ ...formData, category: value })}
                    >
                      <SelectTrigger id="category">
                        <SelectValue placeholder="카테고리 선택" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="development">Development</SelectItem>
                        <SelectItem value="design">Design</SelectItem>
                        <SelectItem value="accessibility">Accessibility</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>
                </div>
                <Field>
                  <Label htmlFor="content">내용</Label>
                  <Textarea
                    id="content"
                    name="content"
                    value={formData.content || ''}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    placeholder="게시글 내용을 입력하세요"
                    rows={6}
                  />
                </Field>
              </>
            )}
          </div>
          <DialogFooter>
            <Button
              variant="secondary"
              size="md"
              onClick={() => {
                setIsCreateModalOpen(false);
                setFormData({});
              }}
            >
              취소
            </Button>
            <Button variant="default" size="md" onClick={handleCreate}>
              생성
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog
        open={isEditModalOpen}
        onOpenChange={(open) => {
          if (!open) {
            setIsEditModalOpen(false);
            setFormData({});
            setSelectedItem(null);
          }
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{`${entityType === 'user' ? '사용자' : '게시글'} 수정`}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {selectedItem && (
              <Alert variant="info">
                <AlertDescription>
                  ID: {selectedItem.id} | 생성일: {selectedItem.createdAt}
                  {entityType === 'post' && ` | 조회수: ${(selectedItem as Post).views}`}
                </AlertDescription>
              </Alert>
            )}

            {entityType === 'user' ? (
              <>
                <Field>
                  <Label htmlFor="edit-username">
                    사용자명 <span className="text-feedback-error">*</span>
                  </Label>
                  <Input
                    id="edit-username"
                    name="username"
                    value={formData.username || ''}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    placeholder="사용자명을 입력하세요"
                  />
                </Field>
                <Field>
                  <Label htmlFor="edit-email">
                    이메일 <span className="text-feedback-error">*</span>
                  </Label>
                  <Input
                    id="edit-email"
                    name="email"
                    type="email"
                    value={formData.email || ''}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="이메일을 입력하세요"
                  />
                </Field>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '16px',
                  }}
                >
                  <Field>
                    <Label htmlFor="role">역할</Label>
                    <Select
                      name="role"
                      value={formData.role || 'user'}
                      onValueChange={(value) => setFormData({ ...formData, role: value })}
                    >
                      <SelectTrigger id="role">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="user">사용자</SelectItem>
                        <SelectItem value="moderator">운영자</SelectItem>
                        <SelectItem value="admin">관리자</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field>
                    <Label htmlFor="status">상태</Label>
                    <Select
                      name="status"
                      value={formData.status || 'active'}
                      onValueChange={(value) => setFormData({ ...formData, status: value })}
                    >
                      <SelectTrigger id="status">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active">활성</SelectItem>
                        <SelectItem value="inactive">비활성</SelectItem>
                        <SelectItem value="suspended">정지</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>
                </div>
              </>
            ) : (
              <>
                <Field>
                  <Label htmlFor="title">
                    제목 <span className="text-feedback-error">*</span>
                  </Label>
                  <Input
                    id="title"
                    name="title"
                    value={formData.title || ''}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="게시글 제목을 입력하세요"
                  />
                </Field>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '16px',
                  }}
                >
                  <Field>
                    <Label htmlFor="author">
                      작성자 <span className="text-feedback-error">*</span>
                    </Label>
                    <Input
                      id="author"
                      name="author"
                      value={formData.author || ''}
                      onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                      placeholder="작성자명"
                    />
                  </Field>
                  <Field>
                    <Label htmlFor="category">카테고리</Label>
                    <Select
                      name="category"
                      value={formData.category || ''}
                      onValueChange={(value) => setFormData({ ...formData, category: value })}
                    >
                      <SelectTrigger id="category">
                        <SelectValue placeholder="카테고리 선택" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="development">Development</SelectItem>
                        <SelectItem value="design">Design</SelectItem>
                        <SelectItem value="accessibility">Accessibility</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>
                </div>
                <Field>
                  <Label htmlFor="content">내용</Label>
                  <Textarea
                    id="content"
                    name="content"
                    value={formData.content || ''}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    placeholder="게시글 내용을 입력하세요"
                    rows={6}
                  />
                </Field>
              </>
            )}
          </div>
          <DialogFooter>
            <Button
              variant="secondary"
              size="md"
              onClick={() => {
                setIsEditModalOpen(false);
                setFormData({});
                setSelectedItem(null);
              }}
            >
              취소
            </Button>
            <Button variant="default" size="md" onClick={handleUpdate}>
              수정 완료
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
