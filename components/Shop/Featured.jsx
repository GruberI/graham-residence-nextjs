import Link from "next/link";

export default function Featured() {
  return (
    <div
      className="m-auto sm:px-0 mx-8 border-t border-black pt-20 sm:pt-24 pb-12"
      id="featured"
    >
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div>
            <div className="aspect-square overflow-hidden bg-black-100">
              <img
                src="https://ipfs.filebase.io/ipfs/QmUPPSHdoa5JiaLXvRKV3mG4pWSKEvsTjty4T81nmFknF9"
                alt="Kyle Steed painting in The Graham Residence living room during the day."
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="ml-5 flex flex-col content-start">
            <div className="border-b border-black pb-10">
              <h2 className="font-medium text-black-500">FEATURED ARTIST</h2>
              <p className="mt-2 text-3xl font-light tracking-tight text-black-900 sm:text-4xl">
                Kyle Steed
              </p>
            </div>

            <div className="mt-10 space-y-10">
              <p className="tracking-wide leading-7">
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
            <div className="pt-8">
              <Link
                href={"/gallery/kyle-steed"}
                className="underline underline-offset-8 hover:text-neutral-600"
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
