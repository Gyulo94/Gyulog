import { cn } from '@/utils/style';
import Link from 'next/link';
import { FC } from 'react';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';

type SidebarProps = {
  close: () => void;
  isOpen: boolean;
};

const Sidebar: FC<SidebarProps> = ({ close, isOpen }) => {
  return (
    <div
      className={cn(
        'min-h-screen flex-col gap-6 border-r bg-white pl-10 pr-6 text-base',
        isOpen ? 'flex' : 'hidden',
      )}
    >
      <Link href="/" className="w-48 font-medium text-gray-600 hover:underline">
        홈
      </Link>
      <Link
        href="/tag"
        className="w-48 font-medium text-gray-600 hover:underline"
      >
        태그
      </Link>
      <Link
        href="/category/web-Development"
        className="w-48 font-medium text-gray-600 hover:underline"
      >
        Web Development
      </Link>
      <div className="mt-10 flex items-center gap-4">
        <Link href="https://www.instagram.com/gyulo94" target="_blank">
          <AiFillInstagram className="w-6 h-6" />
        </Link>
        <Link href="https://www.instagram.com/gyulo94" target="_blank">
          <AiFillGithub className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
