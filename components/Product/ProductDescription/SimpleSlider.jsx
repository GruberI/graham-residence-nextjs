import React from "react";
import Slider from "react-slick";

function SimpleSlider({ images }) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container mx-4">
      <Slider {...settings}>
        {images.map((image, i) => {
          return (
            <div key={i} className="px-2">
              <img src={image.url} alt="" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default SimpleSlider;
