import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface SearchBarProps {
  searchTerm: string;
  onSearch: (term: string) => void;
}

export function SearchBar({ searchTerm, onSearch }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-xl ml-auto mb-8">
      <input
        type="text"
        placeholder="Search for products"
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        className="w-full px-4 py-2 pl-10  border-b-2 border-slate-800 rounded-lg  focus:border-gray-500 focus:outline-none "
      />
      <MagnifyingGlassIcon className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
    </div>
  );
}