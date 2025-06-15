
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

const EmptyCart = () => {
  return (
    <div className="bg-white shadow-sm rounded-lg p-12 text-center">
      <div className="flex justify-center">
        <ShoppingBag className="h-16 w-16 text-gray-300" />
      </div>
      <h2 className="mt-4 text-lg font-medium text-gray-900">Your cart is empty</h2>
      <p className="mt-2 text-gray-500">
        Looks like you haven't added any items to your cart yet.
      </p>
      <div className="mt-6">
        <Link to="/products">
          <Button className="bg-ghana-gold hover:bg-ghana-red transition-colors">
            Start Shopping
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
