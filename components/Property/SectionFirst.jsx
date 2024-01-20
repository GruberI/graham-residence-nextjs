"use client";
import React from "react";
import Fade from "react-reveal/Fade";

export default function SectionFirst() {
  return (
    <div className="bg-[#f4f5f1]">
      <div className="m-auto mx-10 sm:pt-0 pt-10 pb-10 sm:pb-0">
        <div className="mx-auto px-4 sm:px-6 lg:px-6">
          <div className="grid grid-cols-1 items-center gap-x-10  lg:grid-cols-2">
            <div>
              <div className="overflow-hidden bg-black-100 aspect-[4/5] p-4 sm:p-28">
                <img
                  src="https://ipfs.filebase.io/ipfs/QmRNe1ozYPmn3kgLTkuTe9PvEgYZR3maqTYQBarpNSf7wD"
                  alt="Arial view of The Graham Residence at sunset with person in hotub and white car parked"
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
            <div>
              <Fade right>
                <div className="sm:space-y-6 space-y-10">
                  <p className="tracking-wide text-xl sm:text-5xl text-center sm:text-left font-thin sm:mt-0 mt-6">
                    The Graham Residence is a mid-century modern retreat where
                    the lines between home and gallery are blurred. Situated on
                    20 acres of pristine land in the High Desert, this is Mojave
                    Desert living at its finest.{" "}
                  </p>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
