'use client';

import Link from 'next/link';
import { FC } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BsRobot } from 'react-icons/bs';
import { IconButton } from './IconButton';
import { useSidebar } from './Providers';

const Header: FC = () => {
  const { isOpen, setIsOpen } = useSidebar();
  return (
    <header className="flex h-16 items-center justify-between border-b px-4 lg:px-10 lg:h-20">
      <IconButton
        onClick={() => setIsOpen((t) => !t)}
        Icon={isOpen ? AiOutlineClose : AiOutlineMenu}
      />
      <Link href="/">
        <h1 className="text-3xl font-medium text-slate-600 lg:text-4xl">
          GYULOG
        </h1>
      </Link>
      <IconButton Icon={BsRobot} component={Link} href="/search" />
    </header>
  );
};

export default Header;
