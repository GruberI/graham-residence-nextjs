"use client";
import { Fade } from "react-awesome-reveal";

export default function Section() {
  return (
    <div className="m-auto max-w-7xl">
      <div className="mx-auto px-4 sm:px-6 lg:px-6 mt-16 sm:mt-14">
        <div className="grid grid-cols-1 items-center gap-x-12 gap-y-6 sm:gap-y-16 lg:grid-cols-2">
          <div>
            <Fade>
              <div>
                <div className="flex flex-col m-auto p-2 sm:my-4 lg:my-0 md:p-10 sm:mx-16 md:mx-2 lg:mx-0">
                  <div className="pb-6 pt-0 sm:pt-10 lg:pt-0">
                    <h1 className="lg:text-4xl text-2xl">THE GRAHAM GALLERY</h1>{" "}
                    <p className="text-2xl sm:text-3xl italic font-light">
                      is a rotating exhibition experience{" "}
                    </p>
                  </div>

                  <div className="pb-8">
                    <p className="tracking-wide text-xl sm:text-2xl">
                      Within the walls of The Graham Residence, lies Graham
                      Gallery, a rotating exhibition space featuring original
                      artwork by contemporary artists. Set in a context unlike a
                      typical gallery, our experiential space transports and
                      inspires.
                    </p>
                  </div>

                  <div className="flex items-center gap-x-6">
                    <a
                      href="/residence#property-book"
                      className="sm:text-sm text-xs leading-6 hover:text-neutral-300 underline underline-offset-8"
                    >
                      BOOK A STAY
                    </a>
                  </div>
                </div>
              </div>
              {/* <div className="sm:space-y-2 space-y-0">
                <p className="tracking-wide text-2xl md:text-3xl lg:text-5xl md:text-center lg:text-left pb-6">
                  Within the walls of The Graham Residence, lies Graham Gallery,
                  a rotating exhibition space featuring original artwork by
                  contemporary artists. Set in a context unlike a typical
                  gallery, our experiential space transports and inspires.{" "}
                </p>
                <a
                  href="/gallery#exhibitions"
                  className="text-lg font-thin leading-6 hover:text-neutral-300 underline underline-offset-8"
                >
                  Explore Exhibitions
                </a>
              </div> */}
            </Fade>
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
