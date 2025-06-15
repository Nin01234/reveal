
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CartItem from "@/components/CartItem";
import { CartItem as CartItemType } from "@/lib/types";
import { ArrowRight } from "lucide-react";

interface CartItemsListProps {
  items: CartItemType[];
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemove: (productId: number) => void;
}

const CartItemsList = ({ items, onUpdateQuantity, onRemove }: CartItemsListProps) => {
  return (
    <div className="bg-white shadow-sm rounded-lg p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-6">Items ({items.length})</h2>
      
      <div className="divide-y divide-gray-200">
        {items.map((item) => (
          <CartItem
            key={item.product.id}
            item={item}
            onUpdateQuantity={onUpdateQuantity}
            onRemove={onRemove}
          />
        ))}
      </div>
      
      <div className="mt-6 flex justify-between">
        <Link to="/products">
          <Button variant="outline" className="flex items-center">
            <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
            Continue Shopping
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CartItemsList;
