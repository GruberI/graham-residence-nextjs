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
              <div className="overflow-hidden bg-black-100 aspect-[4/5] sm:py-5 lg:py-5 sm:px-20 lg:px-16">
                <img
                  src="https://alexmaceda.nyc3.cdn.digitaloceanspaces.com/alex-maceda.jpg"
                  alt="Alex Maceda Painting"
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
            <div>
              <Fade>
                <div className="flex flex-col m-auto p-2 sm:my-4 lg:my-0 md:p-10 mx-0 sm:mx-16 md:mx-2 lg:mx-0">
                  <div className="pb-6 pt-6 sm:pt-10 lg:pt-0">
                    <h2 className="lg:text-4xl text-[23px]">
                      For British Eyes Only
                    </h2>{" "}
                    <h3 className="sm:text-3xl text-xl italic font-light">
                    </h3>
                  </div>
                  <div className="pb-8">
                    <p className="tracking-wide text-xl sm:text-2xl">
                   The Desert Will Hold You by Alex Maceda
                    </p>
                  </div>
                  <div className="flex items-center gap-x-6">
                  
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
