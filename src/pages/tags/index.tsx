import { useTags } from '@/src/utils/hooks';
import Link from 'next/link';

export default function Tag() {
  const { data: existingTags } = useTags();

  return (
    <div className="flex flex-col items-center gap-2 pb-24 pt-20">
      <h1 className="mb-8 text-center text-2xl font-semibold">태그</h1>
      <div className="container flex flex-wrap justify-center gap-2 px-10">
        {existingTags?.map((tag) => (
          <Link
            href={`/tags/${tag}`}
            key={tag}
            className="text-xl underline text-slate-500 hover:text-gray-700"
          >
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
}
