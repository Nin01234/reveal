
import { Product } from "@/lib/types";

interface ProductImageProps {
  product: Product;
}

const ProductImage = ({ product }: ProductImageProps) => {
  return (
    <div className="lg:col-span-1">
      <div className="aspect-square overflow-hidden rounded-lg border border-gray-200">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default ProductImage;
