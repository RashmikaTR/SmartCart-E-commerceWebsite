import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "Collection", path: "/products" },
  ];

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-4" : "py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className={`max-w-7xl mx-auto px-6 md:px-8 transition-all duration-300 ${
        scrolled ? "w-[90%] md:w-full max-w-5xl" : "w-full"
      }`}>
        <div className={`flex items-center justify-between rounded-2xl px-6 py-4 ${
          scrolled ? "glass" : "bg-transparent"
        }`}>
          {/* Logo */}
          <Link to="/" className="text-2xl font-display font-bold tracking-tight text-white flex items-center gap-1 group">
            <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.3 }} className="w-6 h-6 rounded bg-primary mr-1 flex items-center justify-center text-xs shadow-[0_0_15px_rgba(59,130,246,0.6)]">S</motion.div>
            Smart<span className="text-secondary">Cart</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {links.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`relative px-2 py-1 transition-colors ${
                  location.pathname === link.path ? "text-white" : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div 
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Icons Context */}
          <div className="flex items-center gap-6">
            <button className="text-zinc-400 hover:text-white transition-colors">
              <FaSearch size={18} />
            </button>
            <Link to="/login" className="text-zinc-400 hover:text-white transition-colors">
              <FaUser size={18} />
            </Link>
            <Link to="/cart" className="relative group text-zinc-400 hover:text-white transition-colors">
              <FaShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold group-hover:scale-110 transition-transform shadow-[0_0_10px_rgba(59,130,246,0.8)]">3</span>
            </Link>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}

export default Navbar;