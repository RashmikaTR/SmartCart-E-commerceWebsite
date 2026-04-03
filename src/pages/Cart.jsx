import { FaTrash, FaArrowRight, FaMinus, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const initialCart = [
  { id: 1, name: "Minimalist Watch", price: 89500, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80", quantity: 1, category: "Accessories" },
  { id: 2, name: "Wireless Earbuds", price: 45000, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80", quantity: 2, category: "Electronics" }
];

function Cart() {
  const [cart, setCart] = useState(initialCart);

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.18; // 18% Sri Lanka VAT
  const total = subtotal + tax;

  const updateQuantity = (id, delta) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        const newQ = item.quantity + delta;
        return { ...item, quantity: newQ > 0 ? newQ : 1 };
      }
      return item;
    }));
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-10 px-4 md:px-0">
      <h1 className="text-4xl font-black mb-10">Your <span className="text-gradient">Cart</span></h1>
      
      {cart.length === 0 ? (
        <div className="glass-card rounded-3xl p-16 text-center">
          <div className="w-24 h-24 bg-surface rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
            <span className="text-4xl">🛒</span>
          </div>
          <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
          <p className="text-zinc-400 mb-8 max-w-md mx-auto">Looks like you haven't added anything to your cart yet. Discover our premium collection.</p>
          <Link to="/products" className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)]">
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item, i) => (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                key={item.id} 
                className="glass rounded-2xl p-4 flex flex-col sm:flex-row gap-6 items-center"
              >
                <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0 bg-white/5">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                
                <div className="flex-grow text-center sm:text-left">
                  <p className="text-primary font-bold mt-2">Rs. {item.price.toLocaleString('en-LK')}</p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center bg-surface rounded-lg p-1 border border-white/5">
                    <button onClick={() => updateQuantity(item.id, -1)} className="w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
                      <FaMinus size={12} />
                    </button>
                    <span className="w-8 text-center font-medium text-white">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} className="w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
                      <FaPlus size={12} />
                    </button>
                  </div>
                  
                  <button onClick={() => removeItem(item.id)} className="w-10 h-10 rounded-lg flex items-center justify-center text-red-400 hover:bg-red-500/20 transition-colors">
                    <FaTrash />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-1"
          >
            <div className="glass-card rounded-2xl p-8 sticky top-32">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>
              
              <div className="space-y-4 text-sm mb-6 border-b border-white/10 pb-6">
                <div className="flex justify-between text-zinc-300">
                  <span>Subtotal</span>
                  <span className="font-medium text-white">Rs. {subtotal.toLocaleString('en-LK')}</span>
                </div>
                <div className="flex justify-between text-zinc-300">
                  <span>Shipping</span>
                  <span className="font-medium text-green-400">Free Island-wide</span>
                </div>
                <div className="flex justify-between text-zinc-300">
                  <span>Estimated Tax (18% VAT)</span>
                  <span className="font-medium text-white">Rs. {tax.toLocaleString('en-LK')}</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center mb-8">
                <span className="text-lg font-medium text-white">Total</span>
                <span className="text-2xl font-bold text-white">Rs. {total.toLocaleString('en-LK')}</span>
              </div>
              
              <button className="w-full py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] flex items-center justify-center gap-2 group">
                Proceed to Checkout <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <p className="text-xs text-zinc-500 text-center mt-4">
                Secure checkout. 30-day money back guarantee.
              </p>
            </div>
          </motion.div>
          
        </div>
      )}
    </div>
  );
}

export default Cart;