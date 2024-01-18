export default function Section() {
  return (
    <div className="m-auto max-w-7xl">
      <div className="mx-auto px-4 sm:px-6 lg:px-6 mt-28 mb-12">
        <div className="grid grid-cols-1 items-center gap-x-12 gap-y-16 lg:grid-cols-2">
          <div>
            <div className="space-y-4">
              <p className="tracking-wide leading-7 text-2xl text-center sm:text-left">
                Within the walls of The Graham Residence lies Graham Gallery, a
                rotating exhibition space featuring original artwork by emerging
                contemporary artists.{" "}
              </p>
            </div>
          </div>
          <div>
            <div className="overflow-hidden bg-black-100 aspect-3/4">
              <img
                src="https://ipfs.filebase.io/ipfs/Qma519dMyvcX4uuviSq2uZjL2Jhv7yVJdkCfsDBSndXwRV/QmXk9Z8WTi9Gc9L5ziRm4gTUZzUczckNFt9hR8G3Fi3bGR"
                alt="Person holding Kyle Steed painting outside"
                className="object-cover h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
