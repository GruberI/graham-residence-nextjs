// components/ProductImageGallery.jsx
'use client';

import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import 'swiper/swiper-bundle.css'; // Default Swiper styles
import './ProductImageGallery.css'; // Import your custom styles

export default function ProductImageGallery({ images }) {
  // State for controlling the thumbnails Swiper
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const mainSwiperRef = useRef(null); // Ref to control the main Swiper


// Function to go to the next slide when the image is clicked
const handleImageClick = () => {
  if (mainSwiperRef.current) {
    mainSwiperRef.current.swiper.slideNext(); // Go to the next slide
  }
};
{/* Main Container */}
<div className="product-image-gallery flex lg:flex-row flex-col items-start gap-4">
</div>
  return (
    <div className="product-image-gallery">
      <div className="gallery-container">
        {/* Thumbnails Swiper */}
    {/* Thumbnails Swiper */}
<Swiper
  onSwiper={setThumbsSwiper} // Set the Swiper instance to thumbsSwiper state
  spaceBetween={10}
  slidesPerView={4} // Adjust the number of thumbnails visible
  direction="vertical" // Display thumbnails vertically
  watchSlidesProgress
  className="thumbs-swiper lg:w-1/6 w-full"
>

          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image.src} alt={image.altText || 'Thumbnail'} className="thumbnail-image" />
            </SwiperSlide>
          ))}
        </Swiper>

       {/* Main Swiper for the main image display */}
<Swiper
  modules={[Thumbs]} // Include the Thumbs module
  spaceBetween={10}
  slidesPerView={1}
  thumbs={{ swiper: thumbsSwiper }} // Linking thumbs swiper to main swiper
  className="main-swiper lg:w-5/6 w-full"
  ref={mainSwiperRef} // Add this ref here to control the Swiper instance
>

  {images.map((image, index) => (
    <SwiperSlide key={index}>
      <img
        src={image.src}
        alt={image.altText || 'Product image'}
        className="product-image"
        onClick={handleImageClick} // Add the click handler here to navigate to the next slide
      />
    </SwiperSlide>
  ))}
</Swiper>
            
         
      </div>
    </div>
  );
}
