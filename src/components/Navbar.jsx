import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
  return (
    <motion.nav 
      className="bg-black text-white p-4 flex justify-between items-center"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >

      <h1 className="text-2xl font-bold">SmartCart</h1>

      <div className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart"><FaShoppingCart /></Link>
        <Link to="/login">Login</Link>
      </div>

    </motion.nav>
  );
}

export default Navbar;