import { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { Sidebar } from './components/Sidebar';
import { ProductGrid } from './components/ProductGrid';
import { products } from './data/products';
import { categories } from './data/categories';
import { MobileFilters } from './components/MobileFilters';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  

  return (
    <div className="min-h-screen bg-gray-50">
    <div className="px-4 sm:px-6 lg:px-5 py-8">
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
    
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setIsMobileFiltersOpen(true)}
          className="w-full bg-white px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Filter Products
        </button>
      </div>
      <MobileFilters
        isOpen={isMobileFiltersOpen}
        onClose={() => setIsMobileFiltersOpen(false)}
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={(category) => {
          setSelectedCategory(category);
          setIsMobileFiltersOpen(false);
        }}
      />
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="hidden lg:block">
          <Sidebar
            categories={categories}
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
          />
        </div>
        
        <div className="flex-1">
          <ProductGrid products={filteredProducts} />
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No products found. Try adjusting your search or filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;