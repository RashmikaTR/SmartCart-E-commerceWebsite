import { motion } from "framer-motion";

function ProductCard({product}) {

  return (

    <motion.div
      className="bg-white shadow-lg rounded-lg p-4"
      whileHover={{ scale:1.05 }}
    >

      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-full object-cover"
      />

      <h2 className="text-xl mt-2">{product.name}</h2>

      <p className="text-gray-500">${product.price}</p>

      <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">
        Add to Cart
      </button>

    </motion.div>

  );
}

export default ProductCard;