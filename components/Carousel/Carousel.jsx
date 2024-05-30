"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import { GridTileImage } from "./tile";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";
import Label from "./label";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "inline",
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
        display: "inline",
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
          },
        },
      ],
    };

    return (
      <div className="mb-20">
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
                      amount: product.priceRange.minVariantPrice.amount,
                      currencyCode:
                        product.priceRange.minVariantPrice.currencyCode,
                    }}
                    src={product.featuredImage?.url}
                    fill
                    sizes="(min-width: 1024px) 22vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
                  />
                  <Label
                    title={product.title}
                    amount={product.priceRange.minVariantPrice.amount}
                    currencyCode={product.currencyCode}
                    position={product.position}
                    vendor={product.vendor}
                  />
                </Link>
              </li>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
