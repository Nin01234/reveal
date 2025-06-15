
import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Product } from "@/lib/types";
import { searchProducts } from "@/data/products";

const SearchBar = () => {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get("search") || "";
  const [query, setQuery] = useState(initialQuery);
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    
    if (value.trim().length >= 2) {
      const results = searchProducts(value);
      setSuggestions(results.slice(0, 5)); // Limit to 5 suggestions
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (productId: number) => {
    navigate(`/products/${productId}`);
    setShowSuggestions(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/products?search=${encodeURIComponent(query.trim())}`);
    } else {
      navigate("/products");
    }
    setShowSuggestions(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-lg gap-2 relative">
      <div className="relative flex-grow">
        <Input
          type="search"
          placeholder="Search for products..."
          className="w-full pl-10"
          value={query}
          onChange={handleInputChange}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute z-10 w-full bg-white mt-1 rounded-md shadow-lg border border-gray-200">
            {suggestions.map((product) => (
              <button
                key={product.id}
                type="button"
                className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
                onClick={() => handleSuggestionClick(product.id)}
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-8 h-8 object-cover rounded"
                />
                <div>
                  <p className="text-sm font-medium">{product.name}</p>
                  <p className="text-xs text-gray-500">₵{product.price}</p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
      <Button type="submit" className="bg-ghana-gold hover:bg-ghana-red transition-colors">
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
