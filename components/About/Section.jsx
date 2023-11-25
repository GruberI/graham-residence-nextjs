import { Suspense } from "react";

export default function Section() {
  return (
    <div className="max-w-7xl m-auto border-t border-black">
      <div className="mx-auto my-20 sm:pb-24">
        <div className="grid items-center gap-x-0 lg:gap-x-10 gap-y-16 sm:grid-cols-2">
          <Suspense>
            <div className="relative w-56 sm:w-60 md:w-72 lg:w-96 ml-10 sm:ml-0">
              <img
                src="https://ipfs.filebase.io/ipfs/QmcTx4pcZib2EmP6aPA8R8itqjhR5NqFwHZeBGtd2Td732"
                alt="Black kettle with long pour spot and angled body on marble counter next to coffee mug and pour-over system."
                className="object-cover object-center h-[300px] sm:h-3/4 ml-16 sm:ml-0"
              />
              <img
                src="
                https://ipfs.filebase.io/ipfs/QmNdt9bpx4hYyB4KMckJc3b3Swt4w1PwH9zYvM32K5g5HJ"
                alt="Black kettle with long pour spot and angled body on marble counter next to coffee mug and pour-over system."
                className="absolute inset-0 object-cover object-center translate-x-44 sm:translate-x-80 translate-y-2/4 lg:h-3/4 h-0"
              />
            </div>
          </Suspense>
          <div className="flex flex-col m-auto px-4 md:px-0 ">
            <div className="pb-6">
              <h1 className="text-6xl relative ">
                HOUSE{" "}
                <span className="text-3xl italic font-light absolute bottom-0 left-26">
                  specs
                </span>
              </h1>
            </div>

            <div className="pb-8 space-y-3">
              <p className="tracking-wide"><span className="font-semibold">Square feet</span> – 1,200</p>
              <p className="tracking-wide"><span className="font-semibold">Bedrooms</span> – 2</p>
              <p className="tracking-wide"><span className="font-semibold">Bathrooms</span> – 1</p>
              <p className="tracking-wide"><span className="font-semibold">Land</span>– 20-acres</p>
              <p className="tracking-wide pt-10 pb-4">
                The Graham Residence is owned and operated by:
              </p>
              <p className="tracking-wide">Yoni Goldberg and Lindsey Herron</p>
              <p className="tracking-wide">
                1533 Anita Ln, Newport Beach, CA 92660
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
