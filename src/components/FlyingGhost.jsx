// src/FlyingGhost.js
import React from "react";
import { useSpring, animated } from "@react-spring/web";

const FlyingGhost = () => {
  const props = useSpring({
    from: { transform: "translateY(0)" },
    to: { transform: "translateY(-50px)" },
    config: { duration: 2000, tension: 200, friction: 10 },
    loop: { reverse: true },
  });

  return (
    <animated.div
      style={props}
      className="absolute w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex justify-center items-center"
    >
      <span role="img" aria-label="ghost" className="text-4xl">
        👻
      </span>
    </animated.div>
  );
};

export default FlyingGhost;
