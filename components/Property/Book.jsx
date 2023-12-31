export default function Book() {
  return (
    <div
      className="m-auto border-t border-black pt-10 sm:pt-24 pb-0 sm:pb-12 bg-[#f5f5f5] sm:bg-white"
      id="property-book"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 bg-[#f5f5f5]">
        <div className="grid grid-cols-1 flex items-center gap-y-6 sm:gap-y-16 lg:grid-cols-2">
          <div className="flex items-end flex-col">
            <p className="m-auto mb-2 text-2xl sm:text-3xl text-center mt-6 sm:mt-0">Book a stay with us</p>
            <p className="m-auto text-lg sm:text-2xl mb-6 sm:mb-10 text-center">
              We'd love to see you at The Graham Residence
            </p>
            <div className="aspect-[7/5] overflow-hidden bg-black-100">
              <img
                src="https://ipfs.filebase.io/ipfs/QmWKp5TpnLHwUrvtvEASzE51Amkiyie6BmpFpw8sqjdpVR"
                alt="Kyle Steed painting in The Graham Residence living room during the day."
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="m-auto">
            <iframe
              id="booking-iframe"
              sandbox="allow-top-navigation allow-scripts allow-same-origin"
              style={{ width: "110%", height: "700px" }}
              frameborder="0"
              src="https://booking.hospitable.com/widget/9ae5753d-6ef3-4c14-9738-d02164033a92/1291144"
              className="pt-0 sm:pt-16 mr-8"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
