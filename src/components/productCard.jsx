import { motion } from "framer-motion";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

function ProductCard({ product }) {
  // Use a reliable Unsplash source for placeholder images if not provided
  const imgUrl = product.image?.includes('placeholder')
    ? `https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80`
    : product.image;

  return (
    <motion.div
      className="relative group bg-surface_glass backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.5)] flex flex-col h-full"
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl -z-10" />

      {/* Image Container with Zoom effect */}
      <div className="relative w-full pt-[100%] overflow-hidden bg-white/5">
        <motion.img
          src={imgUrl}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        
        {/* Top Badges */}
        <div className="absolute top-4 left-4">
          {product.isNew && (
            <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full shadow-lg">
              NEW
            </span>
          )}
        </div>
        
        {/* Heart Icon */}
        <button className="absolute top-4 right-4 w-10 h-10 rounded-full glass hover:bg-white/20 flex items-center justify-center text-zinc-400 hover:text-red-500 transition-colors z-10">
          <FaHeart size={16} />
        </button>

        {/* Hover overlay button */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-10 object-cover">
          <button className="w-full py-3 bg-white/10 hover:bg-primary backdrop-blur-md text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-all border border-white/20 hover:border-transparent z-20">
            <FaShoppingCart /> Quick Add
          </button>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h2 className="text-xl font-bold text-white group-hover:text-primary transition-colors line-clamp-1">{product.name}</h2>
            <p className="text-sm text-zinc-400 mt-1">{product.category || "Premium Quality"}</p>
          </div>
          <span className="text-lg font-bold text-white">Rs. {product.price.toLocaleString('en-LK')}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductCard;