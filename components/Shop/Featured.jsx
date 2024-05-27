import Link from "next/link";

export default function Featured() {
  return (
    <div
      className="mx-auto sm:px-0 mx-4 border-t border-b border-black pt-10 sm:pt-24 pb-10 sm:pb-20 max-w-7xl"
      id="featured"
    >
      <div className="mx-auto px-2 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-4 sm:gap-x-8 gap-y-8 sm:gap-y-16 lg:grid-cols-2">
          <div>
            <div className="aspect-square overflow-hidden bg-black-100">
              <img
                src="https://ipfs.filebase.io/ipfs/QmUPPSHdoa5JiaLXvRKV3mG4pWSKEvsTjty4T81nmFknF9"
                alt="Kyle Steed painting in The Graham Residence living room during the day."
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="sm:ml-5  flex flex-col content-start">
            <div className="border-b border-black pb-6">
              <p className="text-2xl text-black-500">FEATURED ARTIST</p>
              <h2 className="mt-2 font-thin tracking-tight text-black-900 sm:text-2xl text-lg">
                Kyle Steed
              </h2>
            </div>

            <div className="mt-6 sm:mt-10 space-y-10">
              <p className="text-xl">
                Kyle Andrew Steed (b. 1982; Savannah, GA) is a self-taught
                painter, photographer, muralist and typographer. For the first
                fourteen years of his life he moved across the southern US
                before his family settled in Nashville, Tennessee. This
                itinerant childhood where he often sought stability and a sense
                of home gave way to his singular visual language that draws on a
                range of influences including meditations, loss, sought utopias,
                memory, identity as well as longing and understanding of self.
              </p>
            </div>
            <div className="sm:pt-8 pt-4 pb-4">
              <Link
                href={"/gallery/kyle-steed"}
                className="underline underline-offset-8 hover:text-neutral-600 text-sm"
              >
                SEE THE EXHIBITION
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
