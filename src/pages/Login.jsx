import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";

function Login() {
  return (
    <div className="min-h-[85vh] w-full flex items-center justify-center py-10 relative">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 glass-card rounded-3xl overflow-hidden shadow-2xl z-10 border border-white/10">
        
        {/* Left Side - Graphic (Hidden on mobile) */}
        <div className="hidden md:flex relative p-12 flex-col justify-between bg-black/40 overflow-hidden">
          {/* Abstract elements */}
          <div className="absolute top-[-20%] left-[-20%] w-[70%] h-[70%] bg-primary/30 blur-[100px] rounded-full -z-10" />
          <div className="absolute bottom-[-20%] right-[-20%] w-[70%] h-[70%] bg-secondary/30 blur-[100px] rounded-full -z-10" />
          
          <div className="z-10">
             <Link to="/" className="text-2xl font-display font-bold text-white block">
              Smart<span className="text-gradient">Cart</span>
            </Link>
          </div>
          
          <div className="z-10">
            <h2 className="text-4xl font-bold text-white mb-4 leading-tight">Elevate your<br/>shopping experience.</h2>
            <p className="text-zinc-400">Join the next generation of e-commerce. Premium products, seamless design.</p>
          </div>
          
          {/* 3D-like floating element mockup */}
          <motion.div 
            animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/20 rounded-2xl glass transform rotate-12 flex items-center justify-center shader-overlay -z-0"
          >
            <div className="w-16 h-16 rounded-full bg-primary/50 blur-xl animate-pulse" />
          </motion.div>
        </div>

        {/* Right Side - Form */}
        <div className="p-10 sm:p-14 md:p-16 flex flex-col justify-center bg-surface_glass backdrop-blur-xl">
          <div className="mb-10 text-center md:text-left">
            <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-zinc-400">Please enter your details to sign in.</p>
          </div>

          <div className="space-y-4 mb-8">
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">Email Address</label>
              <input
                type="email"
                placeholder="hello@example.com"
                className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-inner"
              />
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-zinc-300">Password</label>
                <a href="#" className="text-xs text-primary hover:text-primary/80 transition-colors">Forgot password?</a>
              </div>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-inner"
              />
            </div>
          </div>

          <button className="w-full py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)] mb-6">
            Sign In
          </button>
          
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px bg-white/10 flex-grow" />
            <span className="text-xs text-zinc-500 uppercase font-medium">Or continue with</span>
            <div className="h-px bg-white/10 flex-grow" />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-3 rounded-xl glass hover:bg-white/10 transition-colors border border-white/5 text-sm font-medium text-zinc-300">
              <FaGoogle /> Google
            </button>
            <button className="flex items-center justify-center gap-2 py-3 rounded-xl glass hover:bg-white/10 transition-colors border border-white/5 text-sm font-medium text-zinc-300">
              <FaGithub /> GitHub
            </button>
          </div>
          
          <p className="mt-8 text-center text-sm text-zinc-400">
            Don't have an account? <a href="#" className="text-primary font-medium hover:underline">Sign up</a>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Login;