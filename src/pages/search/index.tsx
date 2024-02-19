import dynamic from 'next/dynamic';

const SearchPage = dynamic(() => import('@/src/components/SearchPage'));

export default function Search() {
  return <SearchPage />;
}
