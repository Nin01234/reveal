
import { Link } from "react-router-dom";
import { Product } from "@/lib/types";

interface ProductBreadcrumbsProps {
  product: Product;
}

const ProductBreadcrumbs = ({ product }: ProductBreadcrumbsProps) => {
  return (
    <nav className="flex mb-6" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link to="/" className="text-gray-600 hover:text-ghana-gold text-sm">
            Home
          </Link>
        </li>
        <li>
          <div className="flex items-center">
            <span className="mx-2 text-gray-400">/</span>
            <Link to="/products" className="text-gray-600 hover:text-ghana-gold text-sm">
              Products
            </Link>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <span className="mx-2 text-gray-400">/</span>
            <Link 
              to={`/products?category=${product.category}`} 
              className="text-gray-600 hover:text-ghana-gold text-sm"
            >
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </Link>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-500 text-sm">{product.name}</span>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default ProductBreadcrumbs;
