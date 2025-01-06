import { motion } from "framer-motion";
import { Skeleton } from "antd";

const Canvas = ({image, imageLoading}) => {
  return (
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='glassmorphism relative rounded-xl overflow-hidden w-[350px] h-[350px] md:w-[500px] md:h-[500px]'
    >
      {imageLoading ? (
        <div className="w-full h-full flex items-center justify-center bg-black/20">
          <Skeleton.Image active={true} className="w-full h-full" />
        </div>
      ) : (
        <motion.img 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          src={image} 
          alt=""  
          className='object-cover h-full w-full'
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent pointer-events-none" />
    </motion.div>
  );
};

export default Canvas;