// components/ProductImageGallery.jsx
'use client';

import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Default Swiper styles
import './ProductImageGallery.css'; // Import your custom styles
import SwiperCore, { Navigation, Pagination, Keyboard, A11y } from 'swiper'; // Import Swiper modules

// Enable Swiper modules
SwiperCore.use([Navigation, Pagination, Keyboard, A11y]);

export default function ProductImageGallery({ images }) {
  const mainSwiperRef = useRef(null); // Ref to control the main Swiper
  const [selectedImage, setSelectedImage] = useState(0); // Track the currently selected image index

  // Function to change the main image when a button is clicked
  const handleButtonClick = (index) => {
    setSelectedImage(index); // Update the state to show the selected image
    if (mainSwiperRef.current && mainSwiperRef.current.swiper) {
      mainSwiperRef.current.swiper.slideToLoop(index); // Go to the selected image, accounting for looping
    }
  };

  // Function to handle click on the main image to go to the next or previous slide
  const handleImageClick = (direction) => {
    if (mainSwiperRef.current && mainSwiperRef.current.swiper) {
      const swiper = mainSwiperRef.current.swiper;
      if (direction === 'next') {
        swiper.slideNext(); // Go to the next slide
        setSelectedImage((prev) => (prev + 1) % images.length); // Update selected image index
      } else if (direction === 'prev') {
        swiper.slidePrev(); // Go to the previous slide
        setSelectedImage((prev) => (prev - 1 + images.length) % images.length); // Update selected image index
      }
    }
  };

  return (
    <div className="product-image-gallery">
      <div className="gallery-container">
        {/* Main Swiper for the main image display */}
        <Swiper
          loop={true}
          spaceBetween={10}
          slidesPerView={1}
          className="main-swiper"
          ref={mainSwiperRef} // Reference to control the Swiper instance
          navigation={{
            nextEl: '.clickable-right',
            prevEl: '.clickable-left',
          }}
          pagination={{
            el: '.buttons-container',
            clickable: true,
            renderBullet: (index, className) =>
              `<button class="${className}" aria-label="Select Image ${
                index + 1
              }"></button>`,
          }}
          keyboard={{
            enabled: true, // Enable keyboard navigation
          }}
          a11y={{
            enabled: true,
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image.src}
                loading="lazy" // Lazy load images for performance
                alt={image.altText || 'Product image'}
                className="product-image"
              />
              {/* Conditionally render clickable overlays only if there are multiple images */}
              {images.length > 1 && (
                <>
                  {/* Clickable overlay for the left side */}
                  <div
                    className="clickable-left"
                    onClick={() => handleImageClick('prev')}
                    aria-label="Previous Image" // ARIA label for accessibility
                  ></div>
                  {/* Clickable overlay for the right side */}
                  <div
                    className="clickable-right"
                    onClick={() => handleImageClick('next')}
                    aria-label="Next Image" // ARIA label for accessibility
                  ></div>
                </>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Render dots only if there are multiple images */}
        {images.length > 1 && (
          <div className="buttons-container">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => handleButtonClick(index)}
                className={`selector-button ${
                  selectedImage === index ? 'selector-button-active' : ''
                }`}
                aria-label={`Select Image ${index + 1}`} // ARIA label for accessibility
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
