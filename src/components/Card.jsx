import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa6";

const Card = ({ name, link, image, xProfile, refCode }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex flex-col justify-center items-center gap-3 p-6 
                 bg-white/5 backdrop-blur-lg border-[1px] border-halloween-orange/30 
                 rounded-2xl w-[300px] transition-all duration-300
                 hover:border-halloween-orange hover:shadow-lg hover:shadow-halloween-orange/20"
    >
      <motion.img
        src={image}
        alt={name}
        className="rounded-full w-[100px] h-[100px] border-2 border-halloween-orange/50"
      />
      <h3 className="text-xl font-creepster text-halloween-orange">{name}</h3>
      <div className="flex items-center justify-center gap-2">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-halloween-orange/80 hover:text-halloween-orange transition-colors"
        >
          Give me a{" "}
        </a>
        <motion.div whileHover={{ scale: 1.2 }} className="text-red-500">
          <FaHeart />
        </motion.div>
      </div>

      <div className="flex gap-4 mt-2">
        <a
          href={refCode}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-halloween-orange/80 hover:text-halloween-orange underline transition-colors"
        >
          Mitosis Refcode
        </a>
        <span className="text-halloween-orange/50">|</span>
        <a
          href={xProfile}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-halloween-orange/80 hover:text-halloween-orange underline transition-colors"
        >
          X Profile
        </a>
      </div>
    </motion.div>
  );
};

export default Card;
