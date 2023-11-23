export default function Banner() {
    return (
      <div className="m-auto border-t border-black max-w-7xl">
        <div className="mx-auto px-4 sm:px-6 lg:px-6 mt-20" >
          <div className="grid grid-cols-1 items-center gap-x-10 gap-y-16 lg:grid-cols-2">
            <div>
              <div className="overflow-hidden bg-black-100 aspect-[5/4]">
                <img
                  src="https://ipfs.filebase.io/ipfs/QmWjsuayG2e1Nt996UGJEXEZGvd9x3DCqe9FyijEUxwQyD"
                  alt="Black kettle with long pour spot and angled body on marble counter next to coffee mug and pour-over system."
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
            <div>
              <div className="m-auto space-y-6 flex flex-col justify-center items-center w-10/12">
                <p>
                  MEET
                </p>
                <h1 className="sm:text-6xl text-4xl sm:font-thin font-semibold">
                  Thai Mainhard
                </h1>
  
                <p className="tracking-wide leading-7">
                Thai Mainhard is an abstract painter that works and lives in Los Angeles, CA. Originally from Rio de Janeiro, Brazil, Thai draws inspiration from human experiences and tension found in daily life and her own memories of it.
                </p>
                <a
        href="/art/thai-mainhard"
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
  