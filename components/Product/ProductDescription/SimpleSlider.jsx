import React from "react";
import Slider from "react-slick";

function SimpleSlider({ images }) {
  console.log("images", images);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  return (
    <div className="slider-container mx-4">
      <Slider {...settings}>
        {images.map((image, i) => {
          return (
            <img
              src={image.url}
              alt=""
              key={i}
              className="aspect-[3/4] object-cover px-1"
            />
          );
        })}
      </Slider>
    </div>
  );
}

export default SimpleSlider;
