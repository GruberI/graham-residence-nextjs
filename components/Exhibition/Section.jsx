"use client";
import { Slide } from "react-awesome-reveal";

export default function Section() {
  return (
    <div className="m-auto max-w-7xl">
      <div className="mx-auto px-4 sm:px-6 lg:px-6 mt-16 sm:mt-14">
        <div className="grid grid-cols-1 items-center gap-x-12 gap-y-6 sm:gap-y-16 lg:grid-cols-2">
          <div>
            <Slide direction="left">
              <div className="sm:space-y-4 space-y-0">
                <p className="tracking-wide text-2xl md:text-3xl lg:text-5xl md:text-center lg:text-left mb-10">
                  Within the walls of The Graham Residence lies Graham Gallery,
                  a rotating exhibition space featuring original artwork by
                  emerging contemporary artists.{" "}
                </p>
                <a
                  href="/gallery#exhibitions"
                  className="text-lg font-thin leading-6 hover:text-neutral-300 underline underline-offset-8 pt-6"
                >
                  Explore Exhibitions
                </a>
              </div>
            </Slide>
          </div>
          <div>
            <div className="overflow-hidden bg-black-100 aspect-[4/5] py-8 sm:py-2 lg:py-10">
              <img
                src="https://ipfs.filebase.io/ipfs/Qma519dMyvcX4uuviSq2uZjL2Jhv7yVJdkCfsDBSndXwRV/QmXk9Z8WTi9Gc9L5ziRm4gTUZzUczckNFt9hR8G3Fi3bGR"
                alt="Person holding Kyle Steed painting outside"
                className="object-cover h-full w-full p-10 pt-0"
              />
            </div>
          </div>
        </div>
      </div>
      <div id="exhibitions"></div>
    </div>
  );
}
