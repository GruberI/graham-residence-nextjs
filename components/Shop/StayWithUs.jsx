import { Suspense } from "react";
import Calendar from "../Navbar/CalendarWidget/Calendar";

export default function StayWithUs() {
  return (
    <div className="w-screen sm:py-24 py-3 sm:px-0 lg:px-0 mx-8">
      <div className="overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div className="mx-auto grid max-w-1xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
            <div className="lg:col-end-1 w-full lg:w-full lg:max-w-lg flex flex-col justify-center lg:pb-20 pl-0 sm:pl-20">
              <p className="mt-20 text-1xl leading-8 flex sm:justify-center justify-start">
                Book here to vist
              </p>
              <p className="font-thin mt-2 sm:text-3xl text-2xl leading-8 flex sm:justify-center justify-start">
                {" "}
                THE GRAHAM RESIDENCE
              </p>
              <div

                className="text-black hover:text-black-500 pt-6 flex sm:justify-center justify-start"
              >
           <Calendar />
                {/* <button
                  type="submit"
                  className="max-w-md border-2 border-black px-6 py-2 text-base font-light text-black-500 hover:bg-black hover:black focus:outline-none focus:ring-2 focus:ring-stone-600 focus:ring-offset-2 focus:ring-offset-black-50 hover:text-white hover:font-medium sm:w-full text-[12px]"
                >
                  BOOK ON AIRBNB
                </button> */}
       
              </div>
            </div>
            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
              <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                <img
                  src="https://ipfs.filebase.io/ipfs/QmRNe1ozYPmn3kgLTkuTe9PvEgYZR3maqTYQBarpNSf7wD"
                  alt=""
                  className="aspect-[7/5] lg:w-[37rem] md:w-[30rem] sm:w-[20rem] w-[20rem] max-w-none bg-gray-50 object-cover"
                />
              </div>
              <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                  <img
                    src="https://ipfs.filebase.io/ipfs/QmTNnwGUgd6ZNSXBhxoFdsGK5v3yFvf3dU6CY9zzgY3ky3"
                    alt=""
                    className="aspect-[5/5] lg:w-[24rem] md:w-[16rem] sm:w-[18rem] w-[18rem] ml-20 max-w-none flex-none -2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="flex w-96 sm:w-0 flex-auto justify-end lg:w-auto lg:flex-none">
                  <img
                    src="https://ipfs.filebase.io/ipfs/QmXCMeBiyyRSdnBTvwjtrnvwVzvHDcyfrfRDDwE7ahyzsf"
                    alt=""
                    className="aspect-[7/5] lg:w-[37rem] md:w-0 sm:w-0 w-0 max-w-none flex-none -2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                  <img
                    src="https://ipfs.filebase.io/ipfs/QmWxLnxXyHUhe1xgayrwuo94HFergegDovgcDToJYh3SkG"
                    alt=""
                    className="aspect-[4/3] lg:w-[24rem] sm:w-0 md:w-0 w-0 md:max-w-none 2xl bg-gray-50 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
