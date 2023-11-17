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
                src="https://ipfs.filebase.io/ipfs/QmbEPDzb88keG49Hyy93DzxHqxCxQtKDaiscNaXyS7Ri1N"
                alt="Black kettle with long pour spot and angled body on marble counter next to coffee mug and pour-over system."
                className="object-cover object-center h-3/4"
              />
              <img
                src="https://ipfs.filebase.io/ipfs/QmUqRcVmsVA6z6zYx4PJVR2NsHCngmPq27uLNhcWZx3HCs/QmfUk75HpsgyfELNRUHqkfhTJbaFsVmeSMcGdHL2HPzv3c"
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
                EXPLORE OUR HOME
              </Link>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
