import Link from "next/link";
import { Suspense } from "react";

// https://ipfs.filebase.io/ipfs/Qmdyf8RcB2LsQTmSXCLaS9qe9JomMZmFzARNou4hQcJvFy/QmW36C3Fm3rUSyKV7c4hLF4WeJk7v3iHwyWJjnGHr6SQS3"

export default function Section() {
  return (
    <div className="w-screen pb-20">
      <div className="mx-auto max-w-1xl px-6 sm:px-4 sm:my-20 my-16 mb-0 lg:max-w-7xl lg:px-6">
        <div className="grid grid-cols-1 items-center gap-x-10 gap-y-16 lg:grid-cols-2">
          <Suspense>
            <div className="relative w-64 sm:w-96">
              <img
                src="https://cdn.discordapp.com/attachments/1155605772756074670/1176038479172489257/102319_TGRfilm_090.jpg?ex=656d6a2f&is=655af52f&hm=70f13334d8259451a180133fed2d232768a788b0af9167a9d2c9f462d2bb3165&"
                alt="Black kettle with long pour spot and angled body on marble counter next to coffee mug and pour-over system."
                className="object-cover object-center h-3/4"
              />
              <img
                src="
                https://ipfs.filebase.io/ipfs/QmZFmFjbhMkbfNtVVJT2PL9fp91qyUxPzjMV5zBQkgRUts/QmNqNADtcpXcfCyzg1d99yuyfNFYWAvH2SeV8963drNFg4"
                alt="Black kettle with long pour spot and angled body on marble counter next to coffee mug and pour-over system."
                className="absolute inset-0 object-cover object-center translate-x-60 sm:translate-x-80 translate-y-2/4 h-3/4"
              />
            </div>
          </Suspense>
          <div className="flex flex-col w-11/12 m-auto p-10">
            <div className="pb-6">
              <h1 className="text-4xl font-medium">CURATION IS ABOUT</h1>
              <p className="text-3xl italic font-light">intentionality</p>
            </div>

            <div className="pb-8">
              <p className="tracking-wide">
              A mid-century modern retreat nestled among the boulders of the Mojave Desert, The Graham Residence is where the boundaries between home and gallery are erased.  Discover the best contemporary artists and shop curated goods inspired by West Coast minimalism.
              </p>
            </div>

            <div>
              <Link
                href={"/home"}
                className="underline underline-offset-8 flex justify-center pr-6 hover:text-neutral-600"
              >
                SHOP HOME
              </Link>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
