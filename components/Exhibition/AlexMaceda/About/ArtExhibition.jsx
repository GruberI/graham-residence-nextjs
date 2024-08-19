export default function ArtExhibition() {
  return (
    <div
      className="max-w-7xl border-t border-b border-black m-auto py-20"
      id="featured"
    >
      <div className="">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div>
            <div className="aspect-[5/4] bg-black-100">
              <img
                src="https://ipfs.filebase.io/ipfs/QmeZESJ42SKkVCEqP4B6e8a7vuSuwt1AsBH7Wk3QMSuRx8"
                alt="Painting."
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="px-4">
            <h2 className="text-center text-4xl font-thin tracking-wide text-black-900 ">
              The Desert Will Hold You
            </h2>

            <div className="mt-6 space-y-6">
              <p className="text-black-800 leading-6">
                Exhibition Text Part I
              </p>
              <p className="text-black-800 leading-6">
                Exhibition Text Part II
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
