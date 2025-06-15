
import { Link } from "react-router-dom";
import { Product } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ShoppingBag } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (onAddToCart) {
      onAddToCart(product);
      toast({
        title: "Added to Cart",
        description: `${product.name} has been added to your cart`,
      });
    }
  };

  return (
    <Link to={`/products/${product.id}`} className="product-card group block">
      <div className="relative bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300">
        <div className="relative pb-[100%] overflow-hidden">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="absolute w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
          />
          {product.featured && (
            <div className="absolute top-2 left-2 bg-ghana-red text-white text-xs uppercase font-semibold py-1 px-2 rounded">
              Featured
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-ghana-gold transition-colors">
            {product.name}
          </h3>
          <p className="text-ghana-gold font-bold mb-2">₵{product.price.toFixed(2)}</p>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>
          <Button 
            onClick={handleAddToCart}
            className="w-full bg-ghana-gold hover:bg-ghana-red transition-colors"
          >
            <ShoppingBag className="mr-2 h-4 w-4" /> Add to Cart
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
