"use client";
import { Fade } from "react-awesome-reveal";

export default function Section() {
  return (
    <div className="sm:mt-10 pt-10 m-auto pb-4 max-w-7xl mx-auto" id="first-page-scroll">
      <div className="mb-10 ml-2 sm:ml-0">
        {/* Layout with image on the right, centered text, and increased gap */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-x-16 gap-y-8 px-4 sm:px-2 lg:px-4"> {/* items-center for vertical centering and increased gap-x */}
          
          {/* Image section */}
          <div className="w-full lg:w-1/2">
            <div className="overflow-hidden bg-gray-100 rounded aspect-[4/5]"> 
              <img
                src="https://siteimagery.nyc3.cdn.digitaloceanspaces.com/Gallery/003.jpg"
                alt="Person holding Kyle Steed painting outside"
                className="object-cover h-full w-full"
              />
            </div>
          </div>
          
          {/* Centered text content section with wider width */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <Fade>
              <div className="flex flex-col items-start text-left max-w-full p-2 sm:my-4 lg:my-0 lg:px-4">
                <div className="pb-4">
                  <h1 className="lg:text-4xl text-3xl font-light text-gray-900 tracking-wide leading-tight">
                    Graham Collective
                  </h1>
                  <p className="text-lg sm:text-xl italic font-light text-gray-800 mt-3 mb-4 leading-snug">
                    is the project of art advisor Lindsey Goldberg, reimagining the art viewing experience beyond conventional spaces.
                  </p>
                </div>

                <div className="pb-4">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                    With a vision to contextualize art for both artists and collectors, Graham Collective launched in 2023 with seasonal exhibitions at The Graham Residence—a mid-century modern retreat on 20 stunning acres in Yucca Valley.
                  </p>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    At its core, The Graham Collective invites artists to freely explore their practice through a dynamic residency program and curated exhibitions.
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
