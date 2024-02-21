import PostList from '@/src/components/PostList';
import { createClient } from '@/src/utils/supabase/server';
import { cookies } from 'next/headers';

export default async function Post() {
  const supabase = createClient(cookies());
  const { data } = await supabase.from('Post').select('*');
  return (
    <PostList
      initialPosts={data?.map((post) => ({
        ...post,
        tags: JSON.parse(post.tags) as string[],
      }))}
    />
  );
}
