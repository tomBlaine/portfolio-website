import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full h-full"> 
      <div className="absolute inset-0 z-10"> 
        <Image 
          src={images[currentIndex]} 
          alt={`Slide ${currentIndex}`}  
          layout="fill"
          objectFit="cover"
        />
      </div>
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
