import { cn } from '@/src/utils/style';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { FC } from 'react';
import { AiFillGithub, AiFillInstagram, AiOutlineClose } from 'react-icons/ai';
import { createClient } from '../utils/supabase/client';
import { IconButton } from './IconButton';

type SidebarProps = {
  close: () => void;
  isOpen: boolean;
};

const supabase = createClient();

const Sidebar: FC<SidebarProps> = ({ close, isOpen }) => {
  const { data: existingCategories } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const { data } = await supabase.from('Post').select('category');
      return Array.from(new Set(data?.map((d) => d.category)));
    },
  });

  return (
    <div
      className={cn(
        ' absolute min-h-screen flex-col gap-6 border-r bg-white p-10 pr-6 text-base lg:relative',
        isOpen ? 'flex' : 'hidden',
      )}
    >
      <div className="flex justify-end lg:hidden">
        <IconButton Icon={AiOutlineClose} onClick={close} />
      </div>
      <Link href="/" className="w-48 font-medium text-gray-600 hover:underline">
        홈
      </Link>
      <Link
        href="/tags"
        className="w-48 font-medium text-gray-600 hover:underline"
      >
        태그
      </Link>
      {existingCategories?.map((category) => (
        <Link
          href={`/category/${category}`}
          className="w-48 font-medium text-gray-600 hover:underline"
          key={category}
        >
          {category}
        </Link>
      ))}
      <div className="mt-10 flex items-center gap-4">
        <IconButton
          Icon={AiFillInstagram}
          component={Link}
          href="https://www.instagram.com/gyulo94"
          target="_blank"
        />
        <IconButton
          Icon={AiFillGithub}
          component={Link}
          href="https://www.github.com/gyulo94"
          target="_blank"
        />
        <img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgyulog.vercel.app&count_bg=%23555555&title_bg=%23555555&icon=bilibili.svg&icon_color=%23E7E7E7&title=%EB%B0%A9%EB%AC%B8%EC%9E%90&edge_flat=false" />
      </div>
    </div>
  );
};

export default Sidebar;
