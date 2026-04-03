import { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";

const mockProducts = [
  { id: 1, name: "Minimalist Watch", price: 89500, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", category: "Accessories", isNew: true },
  { id: 2, name: "Wireless Earbuds", price: 45000, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", category: "Electronics" },
  { id: 3, name: "Smart Speaker", price: 60000, image: "https://images.unsplash.com/photo-1589003071536-41f2372ba8be?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", category: "Electronics" },
  { id: 4, name: "Leather Backpack", price: 105000, image: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", category: "Apparel" },
  { id: 5, name: "Mechanical Keyboard", price: 54000, image: "https://images.unsplash.com/photo-1595225476474-87563907a212?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", category: "Electronics", isNew: true },
  { id: 6, name: "Polarized Sunglasses", price: 26500, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", category: "Accessories" },
  { id: 7, name: "Running Shoe", price: 39000, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", category: "Apparel" },
  { id: 8, name: "Ceramic Mug", price: 8500, image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", category: "Home" }
];

const filters = ["All", "Electronics", "Accessories", "Apparel", "Home"];

function Products() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProducts = activeFilter === "All" 
    ? mockProducts 
    : mockProducts.filter(p => p.category === activeFilter);

  return (
    <div className="w-full flex justify-center py-10">
      <div className="w-full max-w-7xl flex flex-col">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-black mb-4">Latest <span className="text-gradient">Collection</span></h1>
            <p className="text-zinc-400 max-w-lg">
              Explore our premium selection of carefully curated products, crafted to elevate your daily life.
            </p>
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter 
                    ? "bg-primary text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]" 
                    : "glass text-zinc-300 hover:text-white hover:border-primary/50"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {filteredProducts.map((product) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={product.id}
            >
              <ProductCard product={product}/>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </div>
  );
}

export default Products;