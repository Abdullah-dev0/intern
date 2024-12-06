interface MobileFiltersProps {
  isOpen: boolean;
  onClose: () => void;
  categories: string[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

export function MobileFilters({
  isOpen,
  onClose,
  categories,
  selectedCategory,
  onCategorySelect,
}: MobileFiltersProps) {
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 lg:hidden">
      <div
        className="fixed inset-0 bg-black bg-opacity-25"
        onClick={onClose}
      />
      <div className="fixed inset-y-0 left-0 w-full max-w-xs bg-white shadow-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-medium text-gray-900">Filters</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Close menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <ul className="space-y-4">
          {categories.map((category) => (
            <li key={category}>
              <button
                onClick={() => onCategorySelect(category)}
                className={`w-full text-left px-2 py-2 rounded-md ${
                  selectedCategory === category
                    ? 'bg-green-50 text-green-600 font-medium'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}