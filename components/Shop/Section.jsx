"use client";
import { Fade } from "react-awesome-reveal";
import { Suspense } from "react";

export default function Section() {
  return (
    <div className="my-16 sm:my-20">
      <div className="max-w-7xl px-6 sm:px-4 sm:pb-16 lg:px-6 mx-auto">
        <div className="grid grid-cols-1 items-center gap-x-10 gap-y-16 md:grid-cols-2 pl-8 sm:pl-0">
          <Suspense>
            {/* 1 SQUARE IMAGE*/}
            {/* <div className="flex justify-center">
              <img
                src="https://ipfs.filebase.io/ipfs/QmQhHuri4tVjFRqByeUsHbUBnXnT2mLM33p8NY1AL8SRRY/QmT53c8kCr8pAf3GGy7uWeQZz6vsAJxuGqvPZ4bEeXDuQP"
                alt=""
                className="aspect-square object-cover object-center max-h-[600px]"
              />
            </div> */}
            <div className="relative w-56 sm:w-60 md:w-72 lg:w-96">
              <img
                src="https://ipfs.filebase.io/ipfs/QmdHbHnkrncrN8JFbwgB5Agyh8HrQx8uawuX6P8bUNruNb/QmYNcbR11hoFE87eZmhBdY4iFmNWXpPHofAHf77vx99gez"
                alt="Sophie-lou-jacobsen glasses stacked on top of each other on table."
                className="object-cover object-center max-h-[480px] h-[300px] sm:h-3/4 sm:ml-16 lg:ml-0 max-w-[96]"
              />
              <img
                src="
                https://ipfs.filebase.io/ipfs/QmQhHuri4tVjFRqByeUsHbUBnXnT2mLM33p8NY1AL8SRRY/QmT53c8kCr8pAf3GGy7uWeQZz6vsAJxuGqvPZ4bEeXDuQP"
                alt="martini glasses."
                className="absolute inset-0 object-cover object-center translate-x-44 sm:translate-x-64 lg:translate-x-80 translate-y-3/4 md:translate-y-2/4 max-h-[480px] h-[200px] sm:h-3/4 max-w-[96]"
              />
            </div>
          </Suspense>
          <div className="flex flex-col m-auto p-2 sm:my-4 lg:my-0 md:p-10 sm:mx-16 md:mx-2 lg:mx-0">
            <div className="pb-6 pt-0 sm:pt-10 lg:pt-0">
              <h1 className="lg:text-4xl text-2xl sm:font-medium font-semibold">
                CURATION IS ABOUT
              </h1>
              <Fade>
                {" "}
                <p className="text-3xl italic font-light">intentionality</p>
              </Fade>
            </div>

            <div className="pb-8">
              <p className="tracking-wide text-xl sm:text-2xl">
                Great design has the power to bring delight to every day.
                Discover the best contemporary artists and shop curated goods
                inspired by West Coast minimalism.
              </p>
            </div>

            <div className="flex items-center gap-x-6">
              <a
                href="/art"
                className="rounded-sm border border-black px-3.5 py-2.5 sm:text-sm text-xs font-normal shadow-sm hover:bg-black hover:text-white  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                Shop Artwork
              </a>
              <a
                href="/home"
                className="sm:text-sm text-xs font-normal leading-6 hover:text-neutral-300 underline underline-offset-8"
              >
                Shop Home
              </a>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
