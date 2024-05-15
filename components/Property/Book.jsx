import { Suspense } from "react";

export default function Book() {
  return (
    <div
      className="m-auto pt-10 sm:pt-24 pb-0 sm:pb-20 bg-white"
      id="property-book"
    >
      <div className="m-auto px-4 sm:px-6 lg:px-8 bg-[#f5f5f5] sm:shadow-inner p-14">
        <Suspense>
          <div className="grid grid-cols-1 flex items-center gap-y-6 sm:gap-y-16 lg:grid-cols-2 max-w-7xl mx-auto">
            <div className="flex items-end flex-col ml-0 sm:ml-20">
              <p className="m-auto mb-2 text-xl sm:text-2xl text-center mt-6 sm:mt-0">
                We'd love to host you at{" "}
              </p>
              <p className="m-auto text-lg sm:text-2xl sm:text-4xl mb-6 sm:mb-10 text-center font-light">
                THE GRAHAM RESIDENCE
              </p>
              <div>
                <img
                  src="https://ipfs.filebase.io/ipfs/QmVBpPbtmAV9wCHrrai3YxjdggD6PfCLrpzzHK2hzJvbHp/QmUTPhmimFGm1TJ5iF8HA6v4CtZixRVD8LLRmhuD6Y7H3t"
                  alt="Goldberg familiy sitting by the fire."
                  className="h-full w-full object-cover object-center shadow-lg"
                />
              </div>
            </div>
            <div className="m-auto shadow-lg">
              <iframe
                id="booking-iframe"
                sandbox="allow-top-navigation allow-scripts allow-same-origin"
                style={{ width: "110%", height: "650px" }}
                src="https://booking.hospitable.com/widget/9ae5753d-6ef3-4c14-9738-d02164033a92/1291144"
                className="pt-0 sm:pt-16 mr-8"
              ></iframe>
            </div>
          </div>
        </Suspense>
      </div>
    </div>
  );
}
