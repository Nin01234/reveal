
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { ChevronLeft, CreditCard, Truck, MapPin, CheckCircle } from "lucide-react";

// In a real application, this would come from a cart context
const cartTotal = 240; // GHS 200 + GHS 40 (2 × GHS 20)
const shippingCost = 0;

const Checkout = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    region: "",
    postalCode: "",
    paymentMethod: "cash-on-delivery",
    notes: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormState(prev => ({ ...prev, paymentMethod: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate form fields (simple validation)
    if (!formState.firstName || !formState.lastName || !formState.email || !formState.phone ||
        !formState.address || !formState.city || !formState.region) {
      toast({
        title: "Missing information",
        description: "Please fill out all required fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // This would normally submit the order to an API
    // For this demo, we'll just show a success message after a delay
    setTimeout(() => {
      toast({
        title: "Order Placed Successfully!",
        description: "Thank you for your order. You will receive a confirmation email shortly.",
      });
      navigate("/checkout/success");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link to="/cart" className="inline-flex items-center text-ghana-gold hover:text-ghana-red transition-colors">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Cart
            </Link>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>
          
          <form onSubmit={handleSubmit}>
            <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
              {/* Checkout Form */}
              <div className="lg:col-span-7">
                {/* Delivery Information */}
                <div className="bg-white shadow-sm rounded-lg p-6 mb-8">
                  <div className="flex items-center mb-6">
                    <MapPin className="h-5 w-5 mr-2 text-ghana-gold" />
                    <h2 className="text-lg font-medium text-gray-900">Delivery Information</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formState.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formState.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <Label htmlFor="address">Street Address *</Label>
                      <Input
                        id="address"
                        name="address"
                        value={formState.address}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        name="city"
                        value={formState.city}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="region">Region/State *</Label>
                      <Input
                        id="region"
                        name="region"
                        value={formState.region}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="postalCode">Postal Code</Label>
                      <Input
                        id="postalCode"
                        name="postalCode"
                        value={formState.postalCode}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                
                {/* Delivery Method */}
                <div className="bg-white shadow-sm rounded-lg p-6 mb-8">
                  <div className="flex items-center mb-6">
                    <Truck className="h-5 w-5 mr-2 text-ghana-gold" />
                    <h2 className="text-lg font-medium text-gray-900">Delivery Method</h2>
                  </div>
                  
                  <RadioGroup defaultValue="standard">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2 border border-ghana-gold rounded-lg p-4">
                        <RadioGroupItem value="standard" id="standard" />
                        <div className="flex-grow">
                          <Label htmlFor="standard" className="font-medium">Standard Delivery</Label>
                          <p className="text-sm text-gray-500">Delivery within 3-5 business days</p>
                        </div>
                        <div className="text-right">
                          <span className="font-medium">Free</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 border border-gray-200 rounded-lg p-4 opacity-50 cursor-not-allowed">
                        <RadioGroupItem value="express" id="express" disabled />
                        <div className="flex-grow">
                          <Label htmlFor="express" className="font-medium">Express Delivery</Label>
                          <p className="text-sm text-gray-500">Delivery within 24 hours</p>
                        </div>
                        <div className="text-right">
                          <span className="font-medium">₵30.00</span>
                        </div>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
                
                {/* Payment Method */}
                <div className="bg-white shadow-sm rounded-lg p-6">
                  <div className="flex items-center mb-6">
                    <CreditCard className="h-5 w-5 mr-2 text-ghana-gold" />
                    <h2 className="text-lg font-medium text-gray-900">Payment Method</h2>
                  </div>
                  
                  <RadioGroup 
                    value={formState.paymentMethod} 
                    onValueChange={handleRadioChange}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2 border border-ghana-gold rounded-lg p-4">
                        <RadioGroupItem value="cash-on-delivery" id="cash-on-delivery" />
                        <Label htmlFor="cash-on-delivery" className="font-medium">Cash on Delivery</Label>
                      </div>
                      <div className="flex items-center space-x-2 border border-gray-200 rounded-lg p-4 opacity-50 cursor-not-allowed">
                        <RadioGroupItem value="card" id="card" disabled />
                        <Label htmlFor="card" className="font-medium">Credit/Debit Card</Label>
                      </div>
                      <div className="flex items-center space-x-2 border border-gray-200 rounded-lg p-4 opacity-50 cursor-not-allowed">
                        <RadioGroupItem value="mobile-money" id="mobile-money" disabled />
                        <Label htmlFor="mobile-money" className="font-medium">Mobile Money</Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
              </div>
              
              {/* Order Summary */}
              <div className="mt-8 lg:mt-0 lg:col-span-5">
                <div className="bg-white shadow-sm rounded-lg p-6 sticky top-8">
                  <h2 className="text-lg font-medium text-gray-900 mb-6">Order Summary</h2>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <p className="text-gray-600">Subtotal</p>
                      <p className="font-medium">₵{cartTotal.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-gray-600">Shipping</p>
                      <p className="font-medium">{shippingCost === 0 ? "Free" : `₵${shippingCost.toFixed(2)}`}</p>
                    </div>
                    <div className="border-t border-gray-200 pt-4 flex justify-between">
                      <p className="text-lg font-medium text-gray-900">Total</p>
                      <p className="text-lg font-bold text-ghana-gold">₵{(cartTotal + shippingCost).toFixed(2)}</p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div>
                      <Label htmlFor="notes">Order Notes (Optional)</Label>
                      <Textarea
                        id="notes"
                        name="notes"
                        placeholder="Special instructions for delivery..."
                        className="min-h-[100px]"
                        value={formState.notes}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      className="w-full bg-ghana-gold hover:bg-ghana-red transition-colors py-6"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Processing..." : "Place Order"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Checkout;
