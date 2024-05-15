"use client";
import Link from "next/link";

export default function TwoImageSection({ imageData }) {
  return (
    <div className="grid sm:grid-rows-3 grid-cols-1 sm:grid-cols-3 sm:grid-flow-col gap-6 m-auto mt-0 sm:mt-20">
      <div className="sm:col-span-2 sm:row-end-3 sm:row-span-2 flex flex-col sm:flex-row gap-4">
        <img src={imageData.imgFirst.imgSrc} alt="" className="w-full sm:w-6/12" />

        <div className="flex flex-col justify-center sm:justify-end w-full ml-10 sm:ml-0">
          <a href={imageData.href}>
            <p>{imageData.Title}</p>
            <p>by {imageData.artist}</p>
            <p>{imageData.size}</p>
            <p>{imageData.type} on Canvas</p>
            <p>${imageData.price}</p>
          </a>
        </div>
      </div>
      <div className="row-start-2 row-span-2">
        <img src={imageData.imgSecond.imgSrc} alt="" />
      </div>
    </div>
  );
}
