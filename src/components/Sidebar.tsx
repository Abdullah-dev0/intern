interface SidebarProps {
  categories: string[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

export function Sidebar({ categories, selectedCategory, onCategorySelect }: SidebarProps) {
  return (
    <div className="w-64 pr-8">
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category}>
            <button
              onClick={() => onCategorySelect(category)}
              className={`w-full text-left px-2 py-1 rounded ${
                selectedCategory === category
                  ? 'text-green-600 font-medium'
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}