"use client";
import { Slide } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";

export default function SectionFirst() {
  return (
    <div className="bg-[#f4f5f1] w-full" id="property">
      <div className="m-auto mx-10 sm:pt-0 pt-10 pb-10 sm:pb-0">
        <div className="mx-auto px-4 sm:px-6 lg:px-6">
          <div className="grid grid-cols-1 items-center gap-x-10 lg:grid-cols-2">
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
                <div className="flex flex-col m-auto p-2 sm:my-4 lg:my-0 md:p-10 sm:mx-16 md:mx-2 lg:mx-0">
                  <div className="pb-6 pt-0 sm:pt-10 lg:pt-0">
                    <h1 className="lg:text-4xl text-2xl">
                      THE GRAHAM RESIDENCE
                    </h1>{" "}
                    <p className="text-3xl italic font-light">
                      is a mid-century modern retreat{" "}
                    </p>
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
                      className="sm:text-sm text-xs leading-6 hover:text-neutral-300 underline underline-offset-8"
                    >
                      BOOK A STAY
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
