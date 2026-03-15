import { motion } from "framer-motion";

function Home() {
  return (

    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">

      <motion.h1
        className="text-5xl font-bold mb-6"
        initial={{ opacity:0, y:50 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:0.8 }}
      >
        Welcome to SmartCart
      </motion.h1>

      <motion.p
        className="text-lg"
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{ delay:0.5 }}
      >
        Buy the best products online
      </motion.p>

    </div>

  );
}

export default Home;