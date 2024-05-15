export default function Banner({ banner }) {
  return (
    <div className="m-auto border-t border-b border-black mb-10 pb-20 max-w-7xl">
      <div className="mx-auto px-4 sm:px-6 lg:px-6 mt-20">
        <div className="grid grid-cols-1 items-center gap-x-10 gap-y-8 sm:gap-y-16 lg:grid-cols-2">
          <div>
            <div className="overflow-hidden bg-black-100 aspect-[5/4]">
              <img
                src={banner.imgSrc}
                alt={banner.imgAltText}
                className="object-cover h-full w-full"
              />
            </div>
          </div>
          <div>
            <div className="m-auto space-y-6 flex flex-col justify-center items-center w-11/12 sm:w-10/12">
              <p>MEET</p>
              <h1 className="sm:text-5xl text-2xl sm:font-thin font-semibold">
                {banner.artist}
              </h1>

              <p className="tracking-wide leading-7">{banner.text}</p>
              <a
                href={banner.href}
                className="text-black hover:text-black-500 flex justify-center pt-4"
              >
                <button
                  type="submit"
                  className="max-w-md text-base font-light text-black underline underline-offset-8 hover:text-neutral-500 sm:mb-0 mb-12"
                >
                  SHOP THE FULL COLLECTION
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
