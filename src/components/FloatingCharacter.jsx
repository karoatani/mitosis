import React from 'react';
import { useSpring, animated } from '@react-spring/web';

function FloatingCharacter() {
  const floatAnimation = useSpring({
    loop: { reverse: true },
    from: { y: 0 },
    to: { y: -40 },
    config: { duration: 2000 }
  });

  return (
    <animated.div style={floatAnimation} className="flex justify-center ">
      <img src="/witch.gif" alt="Floating Character" className="w-[100px] h-[100px]" />
    </animated.div>
  );
}

export default FloatingCharacter;