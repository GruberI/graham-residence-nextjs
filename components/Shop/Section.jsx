import { Suspense } from "react";

export default function Section() {
  return (
    <div className="pb-4 sm:px-0 px-2">
      <div className="mx-auto max-w-7xl px-6 sm:px-4 sm:my-20 my-16 mb-0 lg:px-6">
        <div className="grid grid-cols-1 items-center gap-x-10 gap-y-16 md:grid-cols-2">
          <Suspense>
            <div className="relative w-56 sm:w-60 md:w-72 lg:w-96">
              <img
                src="https://cdn.discordapp.com/attachments/1155605772756074670/1176038479172489257/102319_TGRfilm_090.jpg?ex=656d6a2f&is=655af52f&hm=70f13334d8259451a180133fed2d232768a788b0af9167a9d2c9f462d2bb3165&"
                alt="Woman in red dress sitting on joshua tree boulders."
                className="object-cover object-center max-h-3/4 h-[300px] sm:h-3/4 sm:ml-16 lg:ml-0"
              />
              <img
                src="
                https://ipfs.filebase.io/ipfs/QmZFmFjbhMkbfNtVVJT2PL9fp91qyUxPzjMV5zBQkgRUts/QmNqNADtcpXcfCyzg1d99yuyfNFYWAvH2SeV8963drNFg4"
                alt="Chair and side table in graham residence living room."
                className="absolute inset-0 object-cover object-center translate-x-44 sm:translate-x-64 lg:translate-x-80 translate-y-3/4 md:translate-y-2/4 max-h-3/4 h-[200px] sm:h-3/4"
              />
            </div>
          </Suspense>
          <div className="flex flex-col lg:w-11/12 m-auto p-2 my-10 lg:my-0 md:p-10">
            <div className="pb-6 pt-10 lg:pt-0">
              <h1 className="lg:text-4xl text-2xl sm:font-medium font-semibold">CURATION IS ABOUT</h1>
              <p className="text-3xl italic font-light">intentionality</p>
            </div>

            <div className="pb-8">
              <p className="tracking-wide">
                A mid-century modern retreat nestled among the boulders of the
                Mojave Desert, The Graham Residence is where the boundaries
                between home and gallery are erased. Discover the best
                contemporary artists and shop curated goods inspired by West
                Coast minimalism.
              </p>
            </div>

            <div className="flex items-center justify-center gap-x-6">
              <a
                href="/art"
                className="rounded-sm border border-black px-3.5 py-2.5 sm:text-sm text-xs font-normal shadow-sm hover:bg-black hover:text-white  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                Shop Artwork
              </a>
              <a
                href="/home"
                className="sm:text-sm text-xs font-normal leading-6 hover:text-neutral-300 underline underline-offset-8"
              >
                Shop Home
              </a>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
