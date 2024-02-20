import { FC } from 'react';
import { BsFillPersonFill, BsRobot } from 'react-icons/bs';
import { cn } from '../utils/style';
import PostCard, { PostCardProps } from './PostCard';

export type MessageProps = {
  content: string;
  role: 'user' | 'assistant';
  posts?: Omit<PostCardProps, 'className'>[];
};

const Message: FC<MessageProps> = ({ content, role, posts }) => {
  return (
    <div
      className={cn('p-4 lg:p-6', role === 'user' ? 'bg-white' : 'bg-gray-100')}
    >
      <div className="container mx-auto flex items-start gap-3 lg:gap-4">
        {role === 'user' ? (
          <BsFillPersonFill className="h-6 w-6" />
        ) : (
          <BsRobot className="h-6 w-6 shrink-0" />
        )}
        <div className="flex-col flex items-start">
          <div className="whitespace-pre-wrap">{content}</div>
          {posts && posts.length > 0 && (
            <div className="flex mt-4 justify-start">
              {posts.map((post) => (
                <PostCard
                  {...post}
                  key={post.id}
                  className="w-[300px] border"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;
