
import { Product } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Minus, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

interface ProductInfoProps {
  product: Product;
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  onAddToCart: () => void;
}

const ProductInfo = ({ product, quantity, onQuantityChange, onAddToCart }: ProductInfoProps) => {
  const { toast } = useToast();

  const handleQuantityChange = (value: number) => {
    if (isNaN(value) || value < 1) {
      toast({
        title: "Invalid quantity",
        description: "Quantity must be at least 1",
        variant: "destructive",
      });
      onQuantityChange(1);
      return;
    }
    
    if (value > 10) {
      toast({
        title: "Invalid quantity",
        description: "Maximum quantity is 10",
        variant: "destructive",
      });
      onQuantityChange(10);
      return;
    }

    onQuantityChange(value);
  };

  return (
    <div className="mt-10 lg:col-span-1 lg:mt-0 lg:pl-8">
      {product.featured && (
        <span className="inline-block bg-ghana-red text-white text-xs font-medium py-1 px-2 rounded-md mb-4">
          Featured
        </span>
      )}
      <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">{product.name}</h1>
      
      <div className="mt-3">
        <h2 className="sr-only">Product information</h2>
        <p className="text-3xl font-bold text-ghana-gold">₵{product.price.toFixed(2)}</p>
      </div>

      <div className="mt-6">
        <h3 className="sr-only">Description</h3>
        <p className="text-base text-gray-700">{product.description}</p>
      </div>

      <div className="mt-8">
        <div className="flex items-center space-x-4">
          <h2 className="text-sm font-medium text-gray-900">Quantity</h2>
          <div className="flex items-center border rounded-md">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => handleQuantityChange(quantity - 1)}
              disabled={quantity <= 1}
              className="h-10 w-10"
            >
              <Minus className="h-4 w-4" />
            </Button>
            
            <Input
              type="number"
              min="1"
              max="10"
              className="w-16 text-center border-none"
              value={quantity}
              onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
              onBlur={() => {
                if (isNaN(quantity) || quantity < 1) {
                  handleQuantityChange(1);
                }
              }}
            />
            
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => handleQuantityChange(quantity + 1)}
              disabled={quantity >= 10}
              className="h-10 w-10"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Button 
          onClick={onAddToCart} 
          className="w-full bg-ghana-gold hover:bg-ghana-red transition-colors py-6"
        >
          <ShoppingCart className="mr-2 h-5 w-5" />
          Add to Cart
        </Button>
      </div>

      <div className="mt-10 border-t border-gray-200 pt-10">
        <h3 className="text-sm font-medium text-gray-900">Category</h3>
        <div className="mt-2">
          <Link 
            to={`/products?category=${product.category}`}
            className="inline-block bg-gray-100 text-gray-800 text-xs font-medium py-1 px-2 rounded-md hover:bg-gray-200 transition-colors"
          >
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </Link>
        </div>
      </div>

      {product.tags && product.tags.length > 0 && (
        <div className="mt-6 border-t border-gray-200 pt-6">
          <h3 className="text-sm font-medium text-gray-900">Tags</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <span 
                key={tag} 
                className="inline-block bg-gray-100 text-gray-800 text-xs font-medium py-1 px-2 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductInfo;
