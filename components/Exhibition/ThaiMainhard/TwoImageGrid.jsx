import Link from "next/link";
export default function TwoImageGrid() {
  return (
    <div className="w-screen sm:px-0 lg:px-0 py-6">
      <div className="bg-white">
        <div className="mx-auto max-w-1xl py-8 sm:py-26 lg:max-w-7xl lg:px-0 sm:px-10">
          <div className="grid grid-cols-1 items-center gap-x-10 gap-y-16 lg:grid-cols-2">
            <Link href={"/product/freefall-by-thai-mainhard"}>
              <div className="aspect-[7/5] overflow-hidden bg-black-100">
                <img
                  src="https://ipfs.filebase.io/ipfs/QmZ5qt2VKWvpKGxsj8ytEEmKpJW14GF87MaG3mnjFykQxH/Qmewdaobh9iovKd1HKLCgVYFXcGddCqRBHtAZF5DPKzvkk"
                  alt="Thai Mainhard painting hung in hallway."
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h2 className="pt-6">Freefall</h2>
            </Link>

            <Link href={"/product/hands-in-the-air"}>
              <div className="aspect-[7/5] overflow-hidden bg-black-100">
                <img
                  src="https://ipfs.filebase.io/ipfs/QmfGobtVtxcrkVwc2unU7mzkTUDuLCjNbqsbtQE1PkTyRw"
                  alt="Two Thai Mainhard paintings hung up in livingroom."
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h2 className="pt-6">Hands in the Air</h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
