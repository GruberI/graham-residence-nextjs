"use client";
import { Slide } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";

export default function SectionFirst() {
  return (
    <div className="w-full" id="property">
      <div className="m-auto pt-10 sm:pt-0">
        <div className="mx-auto px-4 sm:px-6 lg:px-6">
          <div className="grid grid-cols-1 items-center gap-x-8 lg:grid-cols-2">
            <div>
              <div className="overflow-hidden bg-black-100 aspect-[4/5] sm:py-10 lg:py-32 sm:px-20 lg:px-16">
                <img
                  src="https://ipfs.filebase.io/ipfs/QmRNe1ozYPmn3kgLTkuTe9PvEgYZR3maqTYQBarpNSf7wD"
                  alt="Arial view of The Graham Residence at sunset with person in hotub and white car parked"
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
            <div>
              <Fade>
                <div className="flex flex-col m-auto p-2 sm:my-4 lg:my-0 md:p-10 mx-0 sm:mx-16 md:mx-2 lg:mx-0">
                  <div className="pb-6 pt-6 sm:pt-10 lg:pt-0">
                    <h2 className="lg:text-4xl text-[23px]">
                      THE GRAHAM RESIDENCE
                    </h2>{" "}
                    <h3 className="sm:text-3xl text-xl italic font-light">
                      is a mid-century modern retreat{" "}
                    </h3>
                  </div>
                  <div className="pb-8">
                    <p className="tracking-wide text-xl sm:text-2xl">
                      A destination where the lines between home and gallery are
                      blurred. Located near Joshua Tree National Park and
                      nestled into the boulders on 20 acres of pristine land,
                      this is Mojave Desert living at its finest.
                    </p>
                  </div>
                  <div className="flex items-center gap-x-6">
                    <a
                      href="/residence#property-book"
                      className="sm:text-sm leading-6 hover:text-neutral-500 hover:underline hover:underline-offset-8 pb-6 sm:pb-0"
                    >
                      BOOK A STAY
                    </a>
                    <a
                      href="/residence/photos"
                      className="sm:text-sm leading-6 hover:text-neutral-500 hover:underline hover:underline-offset-8 pb-6 sm:pb-0"
                    >
                      GALLERY
                    </a>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
