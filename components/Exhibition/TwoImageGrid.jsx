import Link from "next/link";
export default function TwoImageGrid() {
  return (
    <div className="w-screen sm:px-0 lg:px-0 py-6">
      <div className="bg-white">
        <div className="mx-auto max-w-1xl py-8 sm:py-26 lg:max-w-7xl lg:px-0 sm:px-10">
          <div className="grid grid-cols-1 items-center gap-x-10 gap-y-16 lg:grid-cols-2">
            <Link href={"/product/dos-donts"}>
              <div className="aspect-[7/5] overflow-hidden bg-black-100">
                <img
                  src="https://ipfs.filebase.io/ipfs/QmV3eRyrqjm3Btet75umR5d9sP9CSeoJ8GLkq3ouVe6pym"
                  alt="Black kettle with long pour spot and angled body on marble counter next to coffee mug and pour-over system."
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h2 className="pt-6">Do's & Don'ts</h2>
            </Link>

            <Link href={"/product/manhood-by-kyle-steed"}>
              <div className="aspect-[7/5] overflow-hidden bg-black-100">
                <img
                  src="https://ipfs.filebase.io/ipfs/QmNgNgovNe1FAYgWzfm6u8FDyrx57SUdfSEKSqLNmFwVLF"
                  alt="Black kettle with long pour spot and angled body on marble counter next to coffee mug and pour-over system."
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h2 className="pt-6">Manhood</h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
