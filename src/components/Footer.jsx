import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaGoogle } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 mt-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-primary/20 blur-[100px] -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-display font-bold text-white mb-4 block">
              Smart<span className="text-gradient">Cart</span>
            </Link>
            <p className="text-zinc-400 mt-4 max-w-sm">
              Experience the future of e-commerce. Premium products, seamless design, and unparalleled user experience.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-zinc-400 hover:text-primary transition-colors">Products</Link></li>
              <li><Link to="/cart" className="text-zinc-400 hover:text-primary transition-colors">Cart</Link></li>
              <li><Link to="/login" className="text-zinc-400 hover:text-primary transition-colors">Login</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/tharusha-rashmika-4b0204345/" className="w-10 h-10 rounded-full glass flex items-center justify-center text-zinc-300 hover:text-white hover:border-primary transition-all">
                <FaLinkedin size={20} />
              </a>
              <a href="https://github.com/RashmikaTR" className="w-10 h-10 rounded-full glass flex items-center justify-center text-zinc-300 hover:text-white hover:border-primary transition-all">
                <FaGithub size={20} />
              </a>
              <a href="tharusha4779@gmail.com" className="w-10 h-10 rounded-full glass flex items-center justify-center text-zinc-300 hover:text-white hover:border-primary transition-all">
                <FaGoogle size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-zinc-500 font-medium">
          <p>&copy; {new Date().getFullYear()} SmartCart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
