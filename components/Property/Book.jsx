export default function Book() {
    return (
      <div
        className="m-auto sm:px-0 mx-8 border-t border-black pt-20 sm:pt-24 pb-12"
        id="property-book"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 mb-10">
          <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="flex justify-center flex-col">
            <p className="m-auto mb-10 text-3xl">Book a stay with us</p>
              <div className="aspect-[7/5] overflow-hidden bg-black-100">
                <img
                  src="https://ipfs.filebase.io/ipfs/QmWKp5TpnLHwUrvtvEASzE51Amkiyie6BmpFpw8sqjdpVR"
                  alt="Kyle Steed painting in The Graham Residence living room during the day."
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="m-auto ">
  
            
                <iframe id="booking-iframe" sandbox="allow-top-navigation allow-scripts allow-same-origin" style={{width: '120%', height: '600px'}} frameborder="0" src="https://booking.hospitable.com/widget/9ae5753d-6ef3-4c14-9738-d02164033a92/1291144"></iframe>
              </div>
    
          </div>
        </div>
      </div>
    );
  }