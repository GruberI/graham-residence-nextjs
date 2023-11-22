"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

const imageArray = [
    "https://ipfs.filebase.io/ipfs/QmaabC8iMZpvFX8SgPmeCaAAw66xRvHR3voSoBzGdfgAPJ",
    "https://ipfs.filebase.io/ipfs/QmWKp5TpnLHwUrvtvEASzE51Amkiyie6BmpFpw8sqjdpVR",
    "https://ipfs.filebase.io/ipfs/QmQNn2LNn6UdzbuqiSSXJpknNF62sDQbzugxGJm2E9cG8b",
    "https://ipfs.filebase.io/ipfs/QmagJNGTdCFvadgwBrkdHyJXTsmkDkkrqsXYY7U27UJPnC",
    "https://ipfs.filebase.io/ipfs/QmTYVjdAsAbEKuSJ4dKQaHwkQJjfWJY4UWivoXiAfE9HSG",
    "https://ipfs.filebase.io/ipfs/QmNigaznkvzCNV8HoK1CAfZCmErLBPXTuxuDdJTuBgqRxc/QmQAZyGDSDpfGs8qWGvzVpBkHHxwwQ1roHjeLKVgRwdo8i",
    "https://ipfs.filebase.io/ipfs/QmQofT4Jvs8XVEnFiKDHsa3ZG5hBnFU3Jy8qGq2fEDrpdn/QmdLMUMfk9YmKVdidfJAtTqKPsxrSKa45mvc6viq8bBjoi",
  ];

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          zIndex: "2",
        }}
        onClick={onClick}
      >
        <ChevronRightIcon className="h-[54px] w-[52px] text-white absolute sm:-top-7 sm:right-10 right-4 animate-fadeTwo"/>
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
          zIndex: "2"
        }}
        onClick={onClick}
      >
        <ChevronLeftIcon  className="absolute h-[50px] w-[50px] text-white sm:inset-x-10 inset-x-5 sm:-inset-y-8 animate-fadeTwo" />
      </div>
    );
  }

  export default class MultipleItems extends Component {
    render() {
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    
      };
      return (
        <div className="w-screen h-[600px]">
          <Slider {...settings} className="relative">
            <div>
              <img src={imageArray[0]} alt="" className="object-cover w-screen h-[600px] z-0"/>
            </div>
            <div>
            <img src={imageArray[1]} alt="" className="object-cover w-screen h-[600px] z-0"/>
            </div>
            <div>
            <img src={imageArray[2]} alt="" className="object-cover w-screen h-[600px] z-0"/>
            </div>
            <div>
            <img src={imageArray[3]} alt="" className="object-cover w-screen h-[600px] z-0"/>
            </div>
            <div>
            <img src={imageArray[4]} alt="" className="object-cover w-screen h-[600px] z-0"/>
            </div>
            <div>
              <img src={imageArray[5]} alt="" className="object-cover w-screen h-[600px] z-0"/>
            </div>
            <div>
            <img src={imageArray[6]} alt="" className="object-cover w-screen h-[600px] z-0"/>
            </div>
          </Slider>
        </div>
      );
    }
  }