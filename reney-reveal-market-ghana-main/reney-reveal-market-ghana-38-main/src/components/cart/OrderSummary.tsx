
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface OrderSummaryProps {
  subtotal: number;
  shipping: number;
  total: number;
}

const OrderSummary = ({ subtotal, shipping, total }: OrderSummaryProps) => {
  return (
    <div className="bg-white shadow-sm rounded-lg p-6 sticky top-8">
      <h2 className="text-lg font-medium text-gray-900 mb-6">Order Summary</h2>
      
      <div className="space-y-4">
        <div className="flex justify-between">
          <p className="text-gray-600">Subtotal</p>
          <p className="font-medium">₵{subtotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-600">Shipping</p>
          <p className="font-medium">
            {shipping === 0 ? "Free" : `₵${shipping.toFixed(2)}`}
          </p>
        </div>
        <div className="border-t border-gray-200 pt-4 flex justify-between">
          <p className="text-lg font-medium text-gray-900">Total</p>
          <p className="text-lg font-bold text-ghana-gold">₵{total.toFixed(2)}</p>
        </div>
      </div>
      
      <div className="mt-6">
        <Link to="/checkout">
          <Button className="w-full bg-ghana-gold hover:bg-ghana-red transition-colors py-6">
            Checkout
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default OrderSummary;
