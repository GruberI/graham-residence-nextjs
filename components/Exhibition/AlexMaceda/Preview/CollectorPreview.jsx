"use client";
// import { Slide } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";

export default function SectionFirst({ isContentVisible, handleEnterClick }) {

  return (
    
    <div className="w-full" id="property">
      <div className="max-w-7xl m-auto pt-10 sm:pt-0 pb-6">
        <div className="mx-auto px-4 sm:px-6 lg:px-6">
          <div className="grid grid-cols-1 items-center gap-x-8 lg:grid-cols-2">
            <div>
              <div className="overflow-hidden bg-black-100 aspect-[4/5]">
                <img
                  src="https://siteimagery.nyc3.cdn.digitaloceanspaces.com/Exhibitions/AlexMacedaTheDesertWillHoldYou/the-desert-will-hold-you3.jpg"
                  alt="The Desert Will Hold You"
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
            <div>
              <Fade>
                <div className="flex flex-col m-auto p-2 sm:my-4 lg:my-0 md:p-10 mx-0 sm:mx-16 md:mx-2 lg:mx-0">
                  <div className="pb-6 pt-6 sm:pt-10 lg:pt-0">
                    <h2 className="lg:text-4xl text-[23px]">
                      Collector Preview
                    </h2>{" "}
                    <h3 className="sm:text-3xl text-xl italic font-light">
                    </h3>
                  </div>
                  <div className="pb-8">
                    <p className="tracking-wide text-xl sm:text-2xl">
                   The Desert Will Hold You <br></br> by Alex Maceda
                    </p>
                    
                  </div>
                  <div className="flex items-center gap-x-6">
                 {/* <button
  onClick={handleEnterClick}
  className="underline bg-white-500 text-black rounded"
>
  Enter
  </button> */}

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
