import { motion } from "framer-motion";

const Search = ({ setInputValue }) => {
  const handleInputChange = (e) => {
    const value = e.target.value.trim();
    setInputValue(value);
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto relative"
    >
      <div className="relative group">
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-halloween-orange/30 via-purple-600/30 to-halloween-orange/30 
                     rounded-xl blur-md group-hover:blur-lg transition-all duration-300"
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
        <input
          type="text"
          className="w-full h-14 px-6 rounded-xl bg-white/10 backdrop-blur-md 
                     border border-halloween-orange/30 text-white placeholder-purple-300/70
                     text-lg text-center transition duration-300 ease-in-out
                     focus:outline-none focus:ring-2 focus:ring-halloween-orange/50 
                     focus:border-transparent relative z-10
                     hover:bg-white/15"
          placeholder="Enter NFT Token ID"
          onChange={handleInputChange}
        />
        <motion.img
          whileHover={{ rotate: 15, scale: 1.1 }}
          src="/witchhat.png"
          alt="Witch Hat"
          className="absolute -top-6 -right-6 w-16 h-16 sm:w-20 sm:h-20 
                     drop-shadow-[0_0_8px_rgba(255,107,107,0.7)]
                     hidden sm:block"
        />
      </div>
    </motion.div>
  );
};

export default Search;
