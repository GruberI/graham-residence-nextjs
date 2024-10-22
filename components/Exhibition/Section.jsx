"use client";
import { Fade } from "react-awesome-reveal";

export default function Section() {
  return (
    <div className="sm:mt-10 pt-10 m-auto pb-2 max-w-7xl mx-auto" id="first-page-scroll"> {/* Reduced padding below */}
      <div className="mb-10 ml-4 sm:ml-0">
        {/* Use flex and reverse on large screens, align items vertically */}
        <div className="flex flex-col lg:flex-row-reverse items-center lg:items-center gap-x-12 gap-y-6 sm:gap-y-16 px-4 sm:px-2 md:px-0">
          
          {/* Image section */}
          <div className="w-full lg:w-1/2"> {/* Make sure the image takes half the width on larger screens */}
            <div className="overflow-hidden bg-black-100 aspect-[4/5] py-0 sm:py-0 lg:py-0"> 
              <img
                src="https://siteimagery.nyc3.cdn.digitaloceanspaces.com/Gallery/003.jpg"
                alt="Person holding Kyle Steed painting outside"
                className="object-cover h-full w-full"
              />
            </div>
          </div>
          
          {/* Text content section */}
          <div className="w-full lg:w-1/2 flex items-center"> {/* Center text vertically */}
            <Fade>
              <div className="flex flex-col items-center text-center m-auto p-2 sm:my-4 lg:my-0 md:p-10 sm:mx-16 md:mx-2 lg:mx-0">
                <div className="pb-2 pt-0 sm:pt-10 lg:pt-0">
                  <h1 className="lg:text-4xl text-2xl font-light text-gray-900 tracking-wide">
                    Graham Collective
                  </h1>
                  <p className="text-xl sm:text-2xl italic font-light text-gray-800 mt-2 leading-tight">
                 is the project of an art advisor and a photographer. 
                  </p>
                </div>

                <div className="pb-2">
                  <p className="tracking-wide text-xl sm:text-2xl text-gray-700 leading-relaxed">
                  Initially launched as seasonal exhibitions at The Graham Residence, the project aims to support artist creativity and autonomy through a residency program and curated exhibtions.
                  </p>
                </div>
              </div>
            </Fade>
          </div>
          
        </div>
        <div id="exhibitions"></div>
      </div>
    </div>
  );
}
