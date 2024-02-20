import PostList from '@/src/components/PostList';
import { Post } from '@/src/types';
import { createClient } from '@/src/utils/supabase/server';
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetServerSidePropsType,
} from 'next';

type CategoryPostsProps = {
  category: string;
  posts: Post[];
};

const supabase = createClient({});

export const getStaticPaths = (async () => {
  const { data } = await supabase.from('Post').select('category');
  const categories = Array.from(new Set(data?.map((d) => d.category)));
  return {
    paths: categories.map((category) => ({ params: { category } })),
    fallback: 'blocking',
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  const category = context.params?.category as string;
  const { data } = await supabase
    .from('Post')
    .select('*')
    .eq('category', category);
  return {
    props: {
      category: context.params?.category as string,
      posts:
        data?.map((post) => ({
          ...post,
          tags: JSON.parse(post.tags) as string[],
        })) ?? [],
    },
  };
}) satisfies GetStaticProps<CategoryPostsProps>;

export default function CategoryPosts({
  category,
}: InferGetServerSidePropsType<typeof getStaticProps>) {
  return <PostList category={category} />;
}
