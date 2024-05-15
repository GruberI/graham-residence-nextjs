// "use client";
// import { Slide } from "react-awesome-reveal";

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
              <div className="sm:space-y-6 space-y-10">
                {/* <Slide direction="right"> */}
                  <p className="tracking-wide text-xl sm:text-3xl xl:text-5xl text-center sm:text-left font-thin sm:mt-6 mt-10 mb-4 sm:mb-10 px-0 sm:px-16 lg:px-0">
                    The Graham Residence is a mid-century modern retreat near
                    Joshua Tree National Park where the lines between home and
                    gallery are blurred. Situated on 20 acres of pristine land,
                    this is Mojave Desert living at its finest.{" "}
                  </p>

                  <a
                    href="#property-book"
                    className="text-lg font-thin leading-6 hover:text-neutral-300 underline underline-offset-8 sm:pl-2"
                  >
                    Book a stay
                  </a>
                {/* </Slide> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
