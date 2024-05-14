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
      "This place was truly one of a kind.The house was stunning, fresh, and modern against the beauty of nature around it. I would absolutely love to come back!",
    name: "Freddy",
  },
  {
    review:
      "Amazing house. Location is incredible. Beautiful design/decor. Private. An incredible weekend!",
    name: "Lauren",
  },
  {
    review:
      "An unforgettable desert escape nestled on pristine land and a beautifully designed steel-and-glass home with all the creature comforts. You would never know that you are only 15 minutes from town.",
    name: "Ashley",
  },
  {
    review:
      "Lindsey and Yoni’s place is nestled on rolling hills and gorgeous boulders. The views and house itself are sublime and next level (newly built) mid century modern. This is truly one of the gems is the area. Not to be missed",
    name: "Brian",
  },
  {
    review:
      "A pristine gem in the wilderness. One of the all time best stays in JTree - a perfect combination of high desert, comfort and style.",
    name: "Dagen",
  },
  {
    review:
      "The Graham Residence is a serene sanctuary. It’s the perfect setting for a relaxing getaway to disconnect from the hustle of city life. Perfectly appointed, it has all the amenities and small touches to create a memorable stay. From the seclusion, to the stargazing, comfortable beds, and everything in between…you won’t be disappointed!",
    name: "Charles",
  },
  {
    review:
      "Absolutely magical… a dream come true home. We enjoyed every second of our stay. Beautifully decorated, every little detail was thought of by our host. The location is one of the best you can find at Joshua Tree - stunning views. Everything worked perfectly and the mattress was super comfortable! We can’t wait to be back!",
    name: "Paulina",
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
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            cssEase: "linear",
          },
        },
      ],
    };
    return (
      <div className="mx-10 m-auto mb-10 mt-10 mt-0">
        <h1 className="sm:text-3xl text-2xl text-center mb-10">What guests are saying</h1>

        <div className="">
          <Slider {...settings}>
            {reviews.map((review, i) => (
              <li
                key={i}
                className="flex-none min-[575px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 min-h-[270px]"
              >
                <div className="mx-2 sm:mx-10 text-xs sm:text-base lg:text-lg">
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
