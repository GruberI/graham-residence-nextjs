"use client";
import { Fade } from "react-awesome-reveal";

export default function Section() {
  return (
    <div className="m-auto max-w-7xl" id="first-page-scroll">
      <div className="mx-auto px-4 sm:px-6 lg:px-6 pt-5">
        <div className="grid grid-cols-1 items-center gap-x-12 gap-y-6 sm:gap-y-16 lg:grid-cols-2">
          <div>
            <Fade>
              <div className="flex flex-col items-center text-center m-auto p-2 sm:my-4 lg:my-0 md:p-10 sm:mx-16 md:mx-2 lg:mx-0">
                <div className="pb-6 pt-0 sm:pt-10 lg:pt-0">
                  <h1 className="lg:text-4xl text-2xl whitespace-nowrap font-light text-gray-900 tracking-wide">
                    Graham Collective
                  </h1>
                  <p className="text-xl sm:text-2xl italic font-light text-gray-800 mt-2 whitespace-nowrap leading-tight">
                    is a curated edit of original <br />
                    contemporary artwork
                  </p>
                </div>

                <div className="pb-8">
                  <p className="tracking-wide text-xl sm:text-2xl text-gray-700 leading-relaxed">
                    Set in a context unlike a typical gallery, our
                    experiential spaces transport and inspire.
                  </p>
                </div>

                <div className="flex items-center gap-x-6">
                  <a
                    href="/residence"
                    className="sm:text-sm text-xs leading-6 hover:text-neutral-300 underline underline-offset-8 font-medium transition-colors duration-200"
                  >
                    THE GRAHAM RESIDENCE
                  </a>
                  <a
                    href="/gallery/tdwhy"
                    className="sm:text-sm text-xs leading-6 hover:text-neutral-300 underline underline-offset-8 font-medium transition-colors duration-200"
                  >
                    UPCOMING EXHIBITION
                  </a>
                </div>
              </div>
            </Fade>
          </div>
          <div>
            <div className="overflow-hidden bg-black-100 aspect-[4/5] py-2 sm:py-2 lg:py-5">
              <img
                src="https://siteimagery.nyc3.cdn.digitaloceanspaces.com/Gallery/003.jpg"
                alt="Person holding Kyle Steed painting outside"
                className="object-cover h-full w-full p-10 pt-0"
              />
            </div>
          </div>
        </div>
        <div id="exhibitions"></div>
      </div>
    </div>
  );
}
