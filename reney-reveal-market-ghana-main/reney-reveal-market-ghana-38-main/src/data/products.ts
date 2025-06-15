import { Product } from "../lib/types";

export const products: Product[] = [
  {
    id: 1,
    name: "Pink & Purple Ankara Blouse Set",
    description: "Elegant pink blouse with purple Ankara trim, matching accessories include headwrap and slippers. Perfect for casual outings or cultural events.",
    price: 200,
    imageUrl: "/lovable-uploads/23673d19-2a48-464c-9845-2c26a6497b17.png",
    category: "clothing",
    featured: true,
    tags: ["blouse", "pink", "purple", "ankara", "set"]
  },
  {
    id: 2,
    name: "Traditional Tote Bag",
    description: "Beautifully crafted tote bag featuring traditional Ghanaian patterns in rich red and black, with decorative tassels. Perfect for everyday use.",
    price: 120,
    imageUrl: "/lovable-uploads/3eee2c84-5b25-44f7-9889-8f95ed588385.png",
    category: "bags",
    featured: true,
    tags: ["bag", "tote", "traditional", "red", "black"]
  },
  {
    id: 3,
    name: "Blue Fabric Shell Earrings",
    description: "Statement earrings featuring blue pattern fabric circles with colorful shell decorations. These lightweight earrings add a pop of color to any outfit.",
    price: 40,
    imageUrl: "/lovable-uploads/a1bb091c-e9d5-4573-9ad9-3faca7050ec3.png",
    category: "jewelry",
    featured: true,
    tags: ["earrings", "blue", "shells", "fabric"]
  },
  {
    id: 4,
    name: "Multi-colored Beaded Necklace Set",
    description: "Vibrant beaded necklace with matching earrings, featuring traditional wooden and glass beads in shades of green, orange, and amber.",
    price: 65,
    imageUrl: "/lovable-uploads/b70848fe-d47e-4668-8e36-cb5b6c6bdd5c.png",
    category: "jewelry",
    tags: ["necklace", "beaded", "earrings", "set"]
  },
  {
    id: 5,
    name: "Gold Statement Earrings",
    description: "Elegant gold-tone earrings with orange amber-style centerpieces. These lightweight earrings add a sophisticated touch to any outfit.",
    price: 40,
    imageUrl: "/lovable-uploads/92f1ba7f-9573-461c-932f-252124517b09.png",
    category: "jewelry",
    tags: ["earrings", "gold", "amber", "orange"]
  },
  {
    id: 6,
    name: "Traditional Adinkra Necklace",
    description: "Statement necklace featuring traditional Ghanaian Adinkra symbols in gold, with vibrant beads in multiple colors. A meaningful piece with cultural significance.",
    price: 200,
    imageUrl: "/lovable-uploads/ae1e740a-940f-4a9e-bb0f-ca9362fe2eec.png",
    category: "jewelry",
    featured: true,
    tags: ["necklace", "adinkra", "gold", "traditional"]
  },
  {
    id: 7,
    name: "Colorful Fabric Flower Brooch",
    description: "Handcrafted fabric flower brooch with matching earrings. Made with authentic Ghanaian printed fabrics in vibrant colors.",
    price: 50,
    imageUrl: "/lovable-uploads/9c8727b2-813b-4102-bd90-4959d4ce5904.png",
    category: "accessories",
    tags: ["brooch", "earrings", "flower", "fabric"]
  },
  {
    id: 8,
    name: "Ankara Print Keychain",
    description: "Colorful keychain featuring Ankara fabric covered buttons, gold charms and chain details. A practical accessory with authentic Ghanaian style.",
    price: 40,
    imageUrl: "/lovable-uploads/bfb7dc2d-54d1-4c8f-ac3d-c20ef27c1090.png",
    category: "accessories",
    tags: ["keychain", "ankara", "gold"]
  },
  {
    id: 9,
    name: "Gift Box Set - Earrings & Wallet",
    description: "Beautiful gift set featuring handmade fabric covered earrings and a matching wallet with traditional Ghanaian kente-inspired print.",
    price: 80,
    imageUrl: "/lovable-uploads/09904090-5a0f-4d3c-a980-729abab15689.png",
    category: "accessories",
    tags: ["gift set", "earrings", "wallet", "kente"]
  },
  {
    id: 10,
    name: "Ankara Heart Earrings",
    description: "Striking earrings featuring heart-shaped connectors and large Ankara fabric circles with chain details. Bold statement piece for fashion-forward individuals.",
    price: 40,
    imageUrl: "/lovable-uploads/38ca6aee-7e48-4d9a-96d0-2c2d0f4c8dcb.png",
    category: "jewelry",
    tags: ["earrings", "ankara", "heart", "chains"]
  },
  {
    id: 11,
    name: "African Print Crossbody Bags",
    description: "Stylish crossbody bags featuring various African prints and patterns. Durable, practical, and a perfect way to showcase Ghanaian culture in daily life.",
    price: 70,
    imageUrl: "/lovable-uploads/4b3372f3-e923-4416-85c9-6622ab2794e3.png",
    category: "bags",
    featured: true,
    tags: ["bag", "crossbody", "african print"]
  },
  {
    id: 12,
    name: "Traditional Beaded Necklace with Mask",
    description: "Statement necklace featuring traditional African mask pendant with colorful beads. A powerful piece that celebrates African heritage and craftsmanship.",
    price: 200,
    imageUrl: "/lovable-uploads/65d1689b-bc2d-4703-8006-4473010a9ccb.png",
    category: "jewelry",
    tags: ["necklace", "beaded", "mask", "traditional"]
  },
  {
    id: 13,
    name: "Multi-Strand Fabric Necklace",
    description: "Bold multi-strand necklace made from rolled Ankara fabric in vibrant patterns and colors. A lightweight statement piece that adds drama to any outfit.",
    price: 80,
    imageUrl: "/lovable-uploads/5d638529-50c4-4991-8b2c-c7b414a68436.png",
    category: "jewelry",
    tags: ["necklace", "ankara", "multi-strand"]
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) || 
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
    product.category.toLowerCase().includes(lowercaseQuery)
  );
};
