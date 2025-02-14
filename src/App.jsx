import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Search from "./components/Search";
import Canvas from "./components/Canvas";
import Card from "./components/Card";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [image, setImage] = useState("/default.gif");
  const [imageLoading, setImageLoading] = useState(false);
  const [error, setError] = useState(null);

  const contributors = [
    {
      name: "@MurinXDA",
      link: "https://waitlist.mitosis.org/profile/G29Q42",
      image: "/murin.png",
      xProfile: "https://x.com/MurinXDA",
      refCode: "https://waitlist.mitosis.org/my-page?code=G29Q42",
    },
    {
      name: "@atanikun",
      link: "https://waitlist.mitosis.org/profile/6QQ31I",
      image: "/atanikun.png",
      xProfile: "https://x.com/atanikun",
      refCode: "https://waitlist.mitosis.org/my-page?code=6QQ31I",
    },
  ];

  const fetchNFTData = async (tokenId) => {
    if (!tokenId) {
      setImage("/default.gif");
      setError(null);
      return;
    }

    setImageLoading(true);
    setError(null);

    try {
      const imageUrl = `https://res.cloudinary.com/dzi0dkvda/image/upload/halloween/${tokenId}.jpg`;
      const response = await fetch(imageUrl);

      if (!response.ok) {
        throw new Error("NFT not found");
      }

      setImage(imageUrl);
    } catch (err) {
      setError("NFT not found. Try another ID.");
      setImage("/default.gif");
    } finally {
      setImageLoading(false);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchNFTData(inputValue);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [inputValue]);

  return (
    <div className="relative bg-gradient-to-b from-halloween-black via-[#2d1b4e] to-halloween-black w-full min-h-screen overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="fixed inset-0">
        {/* Animated Gradient Orbs */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl opacity-30"
            style={{
              background: i === 0 ? "#ff6b6b" : i === 1 ? "#BD00FF" : "#50FA7B",
              width: Math.random() * 400 + 200 + "px",
              height: Math.random() * 400 + 200 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        <motion.div
          className="absolute inset-0 bg-gradient-radial from-purple-900/10 via-transparent to-transparent"
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="absolute inset-0 bg-halloween-black/40" />
      </div>

      {/* Lightning Effect */}
      <motion.div
        className="fixed inset-0 bg-white/10 pointer-events-none"
        animate={{
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          repeatDelay: Math.random() * 10 + 5,
        }}
      />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center min-h-[80vh] gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Spooky Title with Enhanced Effects */}
          <motion.div className="relative">
            <motion.h1
              className="text-5xl md:text-7xl font-creepster text-halloween-orange 
                         text-center mb-8 tracking-wider z-10 relative"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                textShadow: [
                  "0 0 7px #ff6b6b",
                  "0 0 10px #ff6b6b",
                  "0 0 21px #ff6b6b",
                  "0 0 42px #ff6b6b",
                  "0 0 82px #ff6b6b",
                  "0 0 92px #ff6b6b",
                  "0 0 102px #ff6b6b",
                  "0 0 151px #ff6b6b",
                ],
              }}
              transition={{
                duration: 0.8,
                ease: [0.6, -0.05, 0.01, 0.99],
                textShadow: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
            >
              Halloween NFT Viewer
            </motion.h1>
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-halloween-orange/30 via-purple-600/30 to-halloween-orange/30 rounded-lg blur-xl"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
          </motion.div>

          {/* Search Component with Spooky Shadow */}
          <div className="relative">
            <Search setInputValue={setInputValue} />
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-halloween-orange/20 via-purple-600/20 to-halloween-orange/20 rounded-lg blur-lg"
              animate={{
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </div>

          {/* Error Message with Spooky Animation */}
          <AnimatePresence mode="wait">
            {error && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-red-500 text-lg font-medium text-center drop-shadow-[0_0_8px_rgba(255,0,0,0.5)]"
              >
                {error}
              </motion.p>
            )}
          </AnimatePresence>

          {/* NFT Display Area with Haunted Frame Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-halloween-orange/30 via-purple-600/30 to-halloween-orange/30 rounded-xl blur-md"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
            <Canvas image={image} imageLoading={imageLoading} />
          </motion.div>

          {/* Contributors Section with Spooky Entrance */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-16 w-full relative"
          >
            <h2 className="text-3xl font-creepster text-halloween-orange text-center mb-8 animate-glow drop-shadow-[0_0_8px_rgba(255,107,107,0.7)]">
              Contributors
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {contributors.map((contributor, index) => (
                <motion.div
                  key={contributor.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index }}
                >
                  <Card {...contributor} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Ghosts */}
      <motion.div
        className="fixed top-0 right-0 w-20 h-20 text-6xl"
        animate={{
          y: [0, -50, 0],
          x: [0, 30, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        👻
      </motion.div>
      <motion.div
        className="fixed bottom-0 left-0 w-20 h-20 text-6xl"
        animate={{
          y: [0, 50, 0],
          x: [0, -30, 0],
          rotate: [0, -10, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        🎃
      </motion.div>
    </div>
  );
}
