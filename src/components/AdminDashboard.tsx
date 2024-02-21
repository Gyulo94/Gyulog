'use client';
import { User } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { createClient } from '../utils/supabase/client';
import Button from './Button';

interface AdminDashboardProps {
  user: User;
}

const supabase = createClient();

const AdminDashboard: FC<AdminDashboardProps> = ({ user }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-2">
      <div className="mb-8">
        <b>{user.email}</b> 님으로 로그인 하셨습니다.
      </div>
      <Button type="submit" onClick={() => router.push('/write')}>
        글 작성하러 가기
      </Button>
      <Button
        type="button"
        onClick={() => {
          fetch('/api/posts', {
            method: 'DELETE',
          });
        }}
      >
        테스트 글 삭제
      </Button>
      <Button
        type="submit"
        onClick={() => {
          supabase.auth.signOut();
          router.push('/');
          router.refresh();
        }}
      >
        로그아웃
      </Button>
    </div>
  );
};

export default AdminDashboard;
