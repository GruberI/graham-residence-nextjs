import { Suspense } from "react";

export default function Book() {
  return (
    <div
      className="bg-[#f5f5f5] sm:shadow-inner m-auto sm:mt-10 mb-16"
      id="property-book"
    >
      <div className="m-auto px-4 sm:px-6 lg:px-8 p-6 sm:p-14 max-w-7xl mx-auto">
        <Suspense>
          <div className="grid grid-cols-1 flex items-center gap-y-6 sm:gap-y-16 lg:grid-cols-2 max-w-7xl mx-auto">
            <div className="flex items-end flex-col ml-0 sm:ml-20">
              <p className="m-auto mb-2 text-xl sm:text-2xl text-center mt-6 sm:mt-0">
                We'd love to host you at{" "}
              </p>
              <h2 className="m-auto text-2xl sm:text-4xl mb-6 sm:mb-10 text-center font-light">
                THE GRAHAM RESIDENCE
              </h2>
              <div>
                <img
                  src="https://siteimagery.nyc3.cdn.digitaloceanspaces.com/Homepage/fire.jpg"
                  alt="familiy sitting by the fire."
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
