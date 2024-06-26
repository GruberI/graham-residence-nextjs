"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import clsx from "clsx";

export default function SimpleSlider({ images }) {
  const settings = {
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="mx-2">
      <Slider {...settings}>
        {images.map((image, i) => (
          <img
            className={clsx("relative object-cover aspect-[3/4]")}
            src={image.url}
            key={i}
          />
        ))}
      </Slider>
    </div>
  );
}
