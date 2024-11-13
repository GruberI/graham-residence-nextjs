"use client";
import { Slide } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";

export default function SectionFirst() {
  return (
    <div className="mx-auto max-w-7xl w-full mt-10" id="property">
      <div className="grid grid-cols-1 items-center gap-y-10 gap-x-8 lg:grid-cols-2">
        <div>
          {/* Adjusted padding to ensure it is visible both above and below */}
          <div className="overflow-hidden bg-black-100 aspect-[1/1] mt-10 pt-6 pb-2 sm:pt-5 sm:pb-5">
            <img
              src="https://siteimagery.nyc3.cdn.digitaloceanspaces.com/Residence/002.jpg"
              alt="Arial view of The Graham Residence at sunset with person in hot tub and white car parked"
              className="object-cover h-full w-full p-2"
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Fade>
            {/* Added padding on the sides for mobile using px-4 */}
            <div className="flex flex-col items-center text-center p-0 sm:my-4 lg:my-0 md:p-10 px-4">
              <div className="pb-2 pt-2 sm:pt-2 lg:pt-0">
                <h2 className="lg:text-xl font-light text-gray-500 text-[23px]">
                  THE GRAHAM RESIDENCE
                </h2>
                <h3 className="sm:text-3xl text-xl italic font-light">
                </h3>
              </div>
              <div className="pb-8">
                <p className="tracking-wide text-l sm:text-xl">
                is a mid-century modern retreat nestled among the boulders of Yucca Valley, on 20 secluded acres near Joshua Tree National Park. The land is characterized by weathered boulders, ancient junipers, desert oaks and piñon pines. The home offers expansive views of surrounding rock formations from every room. It is Mojave Desert living at its finest. <br></br><br></br>Seasonal exhibitions and short-term artist residencies are held here, each deeply rooted in the natural landscape and minimalist design.
           </p>
          
              </div>
              {/* Flex row applied to keep buttons side by side on all devices */}
              <div className="flex flex-row items-center gap-x-6">
                 <button
                  onClick={() =>
                    (window.location.href = "http://www.airbnb.com/h/tgr")
                  }
                  className="bg-white text-sm text-black py-2.5 min-w-[150px] px-3 border border-black mt-2 hover:bg-black hover:text-white"
                >
                Guest Stay
                </button> 
                <button
                  onClick={() => (window.location.href = "mailto:info@graham-collective.com")}

                  className="bg-white text-sm text-black py-2.5 min-w-[150px] px-3 border border-black mt-2 hover:bg-black hover:text-white"
                >
                  Residency Inquiry
                </button>
              </div>
            </div>
          </Fade>
        </div>
      </div>
      {/* Adding a thin black border for consistency */}
      <div className="w-full border-b border-black mt-6 sm:mt-12"></div>{" "}
      {/* Further increased margin top */}
    </div>
  );
}
