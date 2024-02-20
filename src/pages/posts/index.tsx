import PostList from '@/src/components/PostList';
import { Post } from '@/src/types';
import { createClient } from '@/src/utils/supabase/server';
import { GetStaticProps } from 'next';

export const getStaticProps = (async () => {
  const supabase = createClient({});
  const { data } = await supabase.from('Post').select('*');
  return {
    props: {
      posts:
        data?.map((post) => ({
          ...post,
          tags: JSON.parse(post.tags) as string[],
        })) ?? [],
    },
  };
}) satisfies GetStaticProps<{ posts: Post[] }>;
export default function Post() {
  return <PostList />;
}
