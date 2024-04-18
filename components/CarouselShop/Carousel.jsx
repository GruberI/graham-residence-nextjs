"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import { GridTileImage } from "./tile";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

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
      slidesToShow: 5,
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
      <div className="mx-10 mb-20 m-auto border-t border-black">
        <div className="my-10">
          <h1 className="sm:text-3xl text-2xl">New Arrivals</h1>
          <a
            href="/home"
            className="text-[10px] font-thin leading-6 hover:text-neutral-300 underline underline-offset-8 "
          >
            VIEW ALL
          </a>
        </div>
        <div className="mt-10 mb-4">
          <Slider {...settings}>
            {this.props.products.map((product, i) => (
              <li
                key={`${product.handle}${i}`}
                className="flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6"
              >
                <Link className="relative" href={`/product/${product.handle}`}>
                  <GridTileImage
                    alt={product.title}
                    label={{
                      title: product.title,
                      amount: product.priceRange.maxVariantPrice.amount,
                      currencyCode:
                        product.priceRange.maxVariantPrice.currencyCode,
                    }}
                    src={product.featuredImage?.url}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
                  />
                </Link>
                {/* <Label
                  title={product.title}
                  amount={product.priceRange.maxVariantPrice.amount}
                  currencyCode={product.currencyCode}
                  position={product.position}
                /> */}
              </li>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
