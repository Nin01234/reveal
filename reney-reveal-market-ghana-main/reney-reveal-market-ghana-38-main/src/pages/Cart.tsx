
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/components/ui/use-toast";
import { CartItem as CartItemType } from "@/lib/types";
import CartItemsList from "@/components/cart/CartItemsList";
import OrderSummary from "@/components/cart/OrderSummary";
import EmptyCart from "@/components/cart/EmptyCart";

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItemType[]>(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  
  const { toast } = useToast();

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const updateQuantity = (productId: number, quantity: number) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const removeItem = (productId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.product.id !== productId));
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart.",
    });
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  const calculateShipping = () => {
    const subtotal = calculateSubtotal();
    return subtotal >= 200 ? 0 : 20;
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateShipping();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>
          
          {cartItems.length > 0 ? (
            <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
              <div className="lg:col-span-7">
                <CartItemsList
                  items={cartItems}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeItem}
                />
              </div>
              
              <div className="mt-8 lg:mt-0 lg:col-span-5">
                <OrderSummary
                  subtotal={calculateSubtotal()}
                  shipping={calculateShipping()}
                  total={calculateTotal()}
                />
              </div>
            </div>
          ) : (
            <EmptyCart />
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cart;
