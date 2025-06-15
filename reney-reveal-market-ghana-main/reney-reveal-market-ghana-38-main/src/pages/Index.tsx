import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { getFeaturedProducts } from "@/data/products";
import { Product } from "@/lib/types";
import { useToast } from "@/components/ui/use-toast";
import { ArrowRight, ShoppingBag, Package, Truck, Award } from "lucide-react";
import InfluencerShowcase from "@/components/InfluencerShowcase";
import SocialShare from "@/components/SocialShare";

const Index = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const products = getFeaturedProducts();
    setFeaturedProducts(products);
  }, []);

  const handleAddToCart = (product: Product) => {
    console.log("Added to cart:", product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">
                Featured Products
              </h2>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                Discover our hand-picked selection of authentic Ghanaian treasures
              </p>
            </div>
            
            <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {featuredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Link to="/products">
                <Button className="bg-ghana-gold hover:bg-ghana-red transition-colors">
                  View All Products <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  The Story of RevealbyReney
                </h2>
                <p className="mt-3 max-w-3xl text-lg text-gray-500">
                  RevealbyReney celebrates the rich cultural heritage of Ghana through authentic,
                  handcrafted fashion and accessories. Each piece tells a story of tradition,
                  craftsmanship, and artistic expression.
                </p>
                <div className="mt-8">
                  <Link to="/about">
                    <Button className="bg-ghana-gold hover:bg-ghana-red transition-colors">
                      Learn More About Us
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mt-10 lg:mt-0">
                <img 
                  className="mx-auto rounded-lg shadow-lg object-cover"
                  src="/lovable-uploads/3eee2c84-5b25-44f7-9889-8f95ed588385.png" 
                  alt="RevealbyReney Ghanaian products"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">
                Why Shop With Us
              </h2>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                Experience the RevealbyReney difference
              </p>
            </div>
            
            <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-ghana-gold/10 mb-4">
                  <ShoppingBag className="h-6 w-6 text-ghana-gold" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">Quality Products</h3>
                <p className="mt-2 text-base text-gray-500">
                  Handcrafted with careful attention to detail and the finest materials
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-ghana-gold/10 mb-4">
                  <Award className="h-6 w-6 text-ghana-gold" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">Authentic Designs</h3>
                <p className="mt-2 text-base text-gray-500">
                  Genuine Ghanaian patterns and designs that celebrate our rich heritage
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-ghana-gold/10 mb-4">
                  <Truck className="h-6 w-6 text-ghana-gold" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">Fast Delivery</h3>
                <p className="mt-2 text-base text-gray-500">
                  Quick and reliable shipping to get your products to you on time
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-ghana-gold/10 mb-4">
                  <Package className="h-6 w-6 text-ghana-gold" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">Secure Packaging</h3>
                <p className="mt-2 text-base text-gray-500">
                  Your items are carefully packed to ensure they arrive in perfect condition
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <InfluencerShowcase />
        
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Share RevealbyReney with Your Friends
            </h2>
            <div className="flex justify-center">
              <SocialShare />
            </div>
          </div>
        </section>
        
        <Subscribe />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
