import { MarkdownEditor } from '@/src/components/Markdown';
import { createClient } from '@/src/utils/supabase/server';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { FormEvent, useRef, useState } from 'react';
import ReactSelect from 'react-select/creatable';

type WriteProps = {
  existingTags: string[];
  existingCategories: string[];
};

export default function Write({
  existingTags,
  existingCategories,
}: WriteProps) {
  const router = useRouter();
  const fileRef = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('title', title);
    formData.append('category', category);
    formData.append('content', content);
    formData.append('tags', tags);

    if (fileRef.current?.files?.[0]) {
      formData.append('preview_image', fileRef.current.files[0]);
    }

    const response = await fetch('/api/posts', {
      method: 'POST',
      body: formData,
    });

    console.log(response);

    const data = await response.json();
    if (data.id) router.push(`/posts/${data.id}`);
  };
  return (
    <div className="container mx-auto flex flex-col px-4 pb-20 pt-12">
      <h1 className="mb-8 text-2xl font-medium">새로운 글</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="제목"
            className="rounded-md border-gray-300 p-2 transition-all hover:border-gray-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="file"
            accept="image/*"
            className="rounded-md border-gray-300 p-2 transition-all hover:border-gray-400"
            ref={fileRef}
          />
          <ReactSelect
            options={existingCategories.map((category) => ({
              label: category,
              value: category,
            }))}
            placeholder="카테고리"
            onChange={(e) => e && setCategory(e.value)}
            isMulti={false}
          />
          <ReactSelect
            options={existingTags.map((tag) => ({
              label: tag,
              value: tag,
            }))}
            placeholder="태그"
            onChange={(e) =>
              e && setTags(JSON.stringify(e.map((e) => e.value)))
            }
            isMulti
          />
          <MarkdownEditor
            height={500}
            value={content}
            onChange={(s) => setContent(s ?? '')}
          />
        </div>
        <button
          type="submit"
          className="w-full mt-4 py-2 bg-gray-800 text-white rounded-md"
        >
          작성하기
        </button>
      </form>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<WriteProps> = async ({
  req,
}) => {
  const supabase = createClient(req.cookies);
  const { data } = await supabase.from('Post').select('category, tags');

  return {
    props: {
      existingCategories: Array.from(new Set(data?.map((d) => d.category))),
      existingTags: Array.from(
        new Set(data?.flatMap((d) => JSON.parse(d.tags))),
      ),
    },
  };
};
