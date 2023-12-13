import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false); //used to fix glitch when user clicks arrows too fast.

  const goToPrevious = () => {
    if (isAnimating) return; // Check if animation is in progress
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSlideDirection(1);
  };

  const goToNext = () => {
    if (isAnimating) return; // Check if animation is in progress
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSlideDirection(0);
  };

  const variants = {
    enter: (direction) => ({
      x: direction === 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction === 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full h-full overflow-hidden"> 
            <AnimatePresence custom={slideDirection}>
        <motion.div
          key={currentIndex}
          custom={slideDirection}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          onAnimationStart={() => setIsAnimating(true)} // Set isAnimating to true when animation starts
          onAnimationComplete={() => setIsAnimating(false)}
          className="absolute inset-0 z-10"
        >
          <Image 
            src={images[currentIndex]} 
            alt={`Slide ${currentIndex}`}
            layout="fill"
            objectFit="contain"
          />
        </motion.div>
      </AnimatePresence>
      <button 
        onClick={goToPrevious}
        className="absolute left-0 ml-1 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-50 p-1 rounded-full shadow-xl" 
      >
        <ChevronLeftIcon className="h-6 w-6 text-[#60666a]"/>
      </button>
      <button 
        onClick={goToNext}
        className="absolute right-0 mr-1 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-50 p-1 rounded-full shadow-xl" 
      >
        <ChevronRightIcon className="h-6 w-6 text-[#60666a]"/>
      </button>
    </div>
  );
};

export default ImageSlider;
