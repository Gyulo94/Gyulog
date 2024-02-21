import AdminDashboard from '@/src/components/AdminDashboard';
import LoginForm from '@/src/components/LoginForm';
import { createClient } from '@/src/utils/supabase/server';
import { cookies } from 'next/headers';

export default async function Admin() {
  const supabase = createClient(cookies());
  const userResponse = await supabase.auth.getUser();

  return (
    <div className="container flex flex-col pb-20 pt-12">
      {!!userResponse?.data.user ? (
        <AdminDashboard user={userResponse.data.user} />
      ) : (
        <LoginForm />
      )}
    </div>
  );
}
