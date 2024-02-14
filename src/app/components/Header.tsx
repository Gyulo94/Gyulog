import Link from 'next/link';
import { FC } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsRobot } from 'react-icons/bs';

const Header: FC = () => {
  return (
    <header className="flex h-16 items-center justify-between border-b px-4 lg:px-10 lg:h-20">
      <button className="p-2">
        <AiOutlineMenu className="w-5 h-5 lg:w-6 lg:h-6" />
      </button>
      <Link href="/">
        <h1 className="text-3xl font-medium text-slate-600 lg:text-4xl">
          GYULOG
        </h1>
      </Link>
      <Link href="/posts" className="p-2">
        <BsRobot className="w-5 h-5 lg:w-6 lg:h-6" />
      </Link>
    </header>
  );
};

export default Header;
