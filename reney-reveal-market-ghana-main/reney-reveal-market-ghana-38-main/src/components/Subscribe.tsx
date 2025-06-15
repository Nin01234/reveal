
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Gift } from "lucide-react";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Welcome to RevealbyReney!",
        description: "Your 10% discount code has been sent to your email.",
      });
      setEmail("");
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="inline-flex items-center justify-center p-3 bg-ghana-gold/10 rounded-full mb-6">
              <Gift className="h-6 w-6 text-ghana-gold" />
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get 10% Off Your First Order
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter and receive an exclusive 10% discount code 
              for your first purchase. Stay updated with our latest collections and special offers!
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <div className="relative flex-grow">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="w-full pl-10"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="bg-ghana-gold hover:bg-ghana-red transition-colors"
                disabled={loading}
              >
                {loading ? "Subscribing..." : "Get My Discount"}
              </Button>
            </form>
            
            <p className="text-sm text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
