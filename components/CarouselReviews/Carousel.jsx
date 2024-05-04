"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import { GridTileImage } from "./tile";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

const reviews = [
  {
    review:
      "I have truly never stayed somewhere so special. It feels extremely remote. You wake up truly immersed in the epic landscape. The beds are super comfortable. Their taste is impeccable. There was an installation by a painter while we were there and the paintings were exquisite. I really cant say enough about how special this place is. Stay here if you can.",
    name: "Hannah",
  },
  {
    review:
      "Stunning place. The house looks like it could be in Architectural Digest and the surrounding terrain is very pretty. Quality of the property is on par with a five star hotel. Highly recommend it for anybody looking for a scenic getaway in the Joshua Tree area",
    name: "Ryan",
  },
  {
    review:
      "A stunning home in a spectacular setting. From the treasure map that guides you along the dirt roads to the house to every thoughtful detail within, it is the perfect place to enjoy the beauty and solitude of the desert.",
    name: "Vanessa",
  },
  {
    review:
      "This enchanting house offers a serene retreat that seamlessly blends modern comfort with natural beauty. From the moment you arrive, you're greeted by panoramic views of the desert and the iconic Joshua trees, creating an atmosphere of tranquility and wonder.",
    name: "James",
  },
];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        color: "grey",
        height: "30%",
        width: "2%",
      }}
      onClick={onClick}
    >
      <ChevronRightIcon style={{ marginRight: "10%" }} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        color: "grey",
        height: "30%",
        width: "5%",
      }}
      onClick={onClick}
    >
      <ChevronLeftIcon style={{ marginRight: "60%" }} />
    </div>
  );
}

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      adaptiveHeight: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
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
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
            autoplay: true,
            speed: 4000,
            autoplaySpeed: 4000,
            cssEase: "linear",
          },
        },
      ],
    };
    return (
      <div className="mx-10 m-auto mb-10">
        <h1 className="sm:text-3xl text-2xl text-center mb-10">What guests are saying</h1>

        <div className="">
          <Slider {...settings}>
            {reviews.map((review, i) => (
              <li
                key={i}
                className="flex-none min-[575px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 min-h-[270px]"
              >
                <div className="mx-10">
                  <p>{review.review}</p>
                  <p className="mt-4">-{review.name}</p>
                </div>
              </li>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
