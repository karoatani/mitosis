import React, { useEffect } from 'react';
import creepySound from '/laugh.mp3'; // Adjust path as needed

const HalloweenEffect = () => {
  useEffect(() => {
    const audio = new Audio(creepySound);

    // Attempt to autoplay on load
    const tryPlayAudio = () => {
      audio.play().catch(() => {
        // If autoplay fails, set up click event listener as fallback
        document.addEventListener('click', playOnClick);
      });
    };

    // Function to play audio on first user click
    const playOnClick = () => {
      audio.play().catch((error) => {
        console.error("Audio play failed:", error);
      });
      // Remove click event listener after first play attempt
      document.removeEventListener('click', playOnClick);
    };

    tryPlayAudio();

    return () => {
      audio.pause(); // Stop audio when component unmounts
      audio.currentTime = 0; // Reset to start for next visit
      document.removeEventListener('click', playOnClick); // Clean up event listener
    };
  }, []);

  return (
    <></>
  );
};

export default HalloweenEffect;
