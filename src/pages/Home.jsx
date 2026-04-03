import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaStar } from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const categories = [
  { name: "Electronics", desc: "Next-gen tech", color: "from-blue-500 to-cyan-400" },
  { name: "Apparel", desc: "Modern fashion", color: "from-purple-500 to-pink-500" },
  { name: "Home", desc: "Minimalist living", color: "from-amber-400 to-orange-500" },
  { name: "Accessories", desc: "Premium crafted", color: "from-emerald-400 to-teal-500" }
];

function Home() {
  return (
    <div className="w-full flex flex-col pt-10 pb-20">
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center">
        {/* Floating Abstract Element */}
        <motion.div 
          className="absolute top-10 w-64 h-64 bg-primary/20 blur-[80px] rounded-full -z-10"
          animate={{ x: [0, 50, -50, 0], y: [0, 30, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto px-4 z-10"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-8 text-sm font-medium text-primary">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            V2.0 is now live
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp} 
            className="text-6xl md:text-8xl font-black mb-6 leading-[1.1] tracking-tighter"
          >
            Redefining <br className="hidden md:block"/>
            <span className="text-gradient">Commerce.</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto"
          >
            Discover a curated collection of premium products. 
            Experience seamless shopping with our cutting-edge responsive design and unparalleled performance.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/products"
              className="px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              Shop Collection
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/about"
              className="px-8 py-4 glass text-white font-semibold rounded-xl hover:bg-white/10 transition-all w-full sm:w-auto justify-center flex"
            >
              Explore Features
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Categories Section */}
      <section className="mt-32">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Curated Categories</h2>
            <p className="text-zinc-400 max-w-md">Browse our expertly selected collections designed for modern living.</p>
          </div>
          <Link to="/products" className="hidden md:flex items-center gap-2 text-primary hover:text-white transition-colors">
            View All <FaArrowRight />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
             <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="relative group cursor-pointer h-64 rounded-2xl overflow-hidden glass-card p-6 flex flex-col justify-end"
            >
              <div className={`absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity bg-gradient-to-br ${category.color} -z-10`} />
              
              <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
              <p className="text-zinc-300 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                {category.desc}
              </p>
              
              {/* Decorative top-right icon */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <FaArrowRight className="-rotate-45 group-hover:text-primary transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
    </div>
  );
}

export default Home;