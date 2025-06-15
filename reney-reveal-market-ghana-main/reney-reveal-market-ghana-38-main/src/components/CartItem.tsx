
import { useState } from "react";
import { Link } from "react-router-dom";
import { CartItem as CartItemType } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, Minus } from "lucide-react";

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemove: (productId: number) => void;
}

const CartItem = ({ item, onUpdateQuantity, onRemove }: CartItemProps) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) newQuantity = 1;
    if (newQuantity > 10) newQuantity = 10;
    
    setQuantity(newQuantity);
    onUpdateQuantity(item.product.id, newQuantity);
  };

  const subtotal = item.product.price * quantity;

  return (
    <div className="flex flex-col sm:flex-row border-b border-gray-200 py-4 items-center">
      <div className="w-full sm:w-24 h-24 mb-4 sm:mb-0">
        <Link to={`/products/${item.product.id}`}>
          <img 
            src={item.product.imageUrl} 
            alt={item.product.name}
            className="w-24 h-24 object-cover rounded"
          />
        </Link>
      </div>
      
      <div className="flex-1 sm:ml-6">
        <Link to={`/products/${item.product.id}`}>
          <h3 className="text-lg font-medium text-gray-900 hover:text-ghana-gold transition-colors">
            {item.product.name}
          </h3>
        </Link>
        <p className="mt-1 text-sm text-gray-500">{item.product.category}</p>
      </div>

      <div className="mt-4 sm:mt-0 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center border rounded-md">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => handleQuantityChange(quantity - 1)}
            disabled={quantity <= 1}
            className="h-8 w-8 p-0"
          >
            <Minus className="h-3 w-3" />
          </Button>
          
          <span className="w-8 text-center">{quantity}</span>
          
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => handleQuantityChange(quantity + 1)}
            disabled={quantity >= 10}
            className="h-8 w-8 p-0"
          >
            <Plus className="h-3 w-3" />
          </Button>
        </div>

        <div className="text-right">
          <p className="text-sm font-medium text-gray-900">₵{subtotal.toFixed(2)}</p>
        </div>

        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => onRemove(item.product.id)}
          className="text-gray-400 hover:text-red-500"
        >
          <Trash2 className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
