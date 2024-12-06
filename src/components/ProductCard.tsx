import { Product } from '../types/product';
import clsx from 'clsx';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full lg:h-48  md:h-60 object-center "
        />
        {product.isOnSale && (
          <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-sm rounded">
            On sale!
          </span>
        )}
        {product.isBestseller && (
          <span className="absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 text-sm rounded">
            Bestseller
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <div className="flex items-center justify-between">
          <div>
            {product.salePrice ? (
              <div className="flex items-center gap-2">
                <span className="text-gray-400 line-through">£{product.price.toFixed(2)}</span>
                <span className="text-green-600 font-bold">From £{product.salePrice.toFixed(2)}</span>
              </div>
            ) : (
              <span className="text-green-600 font-bold">From £{product.price.toFixed(2)}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}