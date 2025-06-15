
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Product } from "@/lib/types";
import { getProductsByCategory, searchProducts } from "@/data/products";
import { useToast } from "@/components/ui/use-toast";

const Products = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const categoryParam = searchParams.get("category") || "all";
  
  const [products, setProducts] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>(categoryParam);
  const { toast } = useToast();

  useEffect(() => {
    let filteredProducts: Product[];
    
    if (searchQuery) {
      filteredProducts = searchProducts(searchQuery);
    } else {
      filteredProducts = getProductsByCategory(activeCategory);
    }
    
    setProducts(filteredProducts);
  }, [searchQuery, activeCategory]);

  useEffect(() => {
    if (categoryParam) {
      setActiveCategory(categoryParam);
    }
  }, [categoryParam]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  const handleAddToCart = (product: Product) => {
    // This would normally update a cart state or context
    console.log("Added to cart:", product);
    
    // Show toast notification
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {searchQuery 
                ? `Search Results for "${searchQuery}"` 
                : "Our Products"
              }
            </h1>
            {!searchQuery && (
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover our unique collection of authentic Ghanaian fashion and accessories.
                Each piece is handcrafted with care and passion.
              </p>
            )}
          </div>

          {/* Search Bar */}
          <div className="mb-8 flex justify-center">
            <SearchBar />
          </div>

          {/* Category Tabs */}
          {!searchQuery && (
            <div className="mb-8">
              <Tabs defaultValue={activeCategory} onValueChange={handleCategoryChange}>
                <div className="flex justify-center">
                  <TabsList className="bg-white">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="clothing">Clothing</TabsTrigger>
                    <TabsTrigger value="accessories">Accessories</TabsTrigger>
                    <TabsTrigger value="jewelry">Jewelry</TabsTrigger>
                    <TabsTrigger value="bags">Bags</TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent value="all"></TabsContent>
                <TabsContent value="clothing"></TabsContent>
                <TabsContent value="accessories"></TabsContent>
                <TabsContent value="jewelry"></TabsContent>
                <TabsContent value="bags"></TabsContent>
              </Tabs>
            </div>
          )}

          {/* Products Grid */}
          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-500 mb-6">
                {searchQuery
                  ? `We couldn't find any products matching "${searchQuery}"`
                  : "There are no products in this category yet."
                }
              </p>
              <Button 
                onClick={() => window.history.back()}
                className="bg-ghana-gold hover:bg-ghana-red transition-colors"
              >
                Go Back
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
