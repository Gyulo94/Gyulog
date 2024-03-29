import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { Post } from '../types';
import { cn } from '../utils/style';

export type PostCardProps = Omit<Post, 'tags'> & {
  className?: String;
};
const PostCard: FC<PostCardProps> = ({
  id,
  title,
  content,
  preview_image_url,
  className,
}) => {
  return (
    <Link href={`/posts/${id}`} className={cn('bg-white', className)}>
      <div className="relative aspect-[1.8/1] w-full">
        <Image
          src={preview_image_url ?? '/thumnail.jpeg'}
          fill
          alt={title}
          className="object-cover"
        />
      </div>
      <div className="p-2">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="line-clamp-3 text-sm text-gray-500">{content}</p>
      </div>
    </Link>
  );
};

export default PostCard;
