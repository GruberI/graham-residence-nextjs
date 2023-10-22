export default function TwoImageGrid() {
  return (
    <div className="w-screen sm:px-0 lg:px-0">
      <div className="bg-white">
        <div className="mx-auto max-w-1xl px-4 py-8 sm:px-6 sm:py-26 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 items-center gap-x-16 gap-y-16 lg:grid-cols-2">
            <div>
              <div className="aspect-h-1 aspect-w-1 overflow-hidden bg-gray-100">
                <img
                  src="https://ipfs.filebase.io/ipfs/QmV3eRyrqjm3Btet75umR5d9sP9CSeoJ8GLkq3ouVe6pym"
                  alt="Black kettle with long pour spot and angled body on marble counter next to coffee mug and pour-over system."
                  className="h-full w-full object-cover object-center"
                />
                
              </div>
              <h2 className="pt-6">Do's & Don'ts</h2>
            </div>

            <div>
              <div className="aspect-h-1 aspect-w-1 overflow-hidden bg-gray-100">
                <img
                  src="https://ipfs.filebase.io/ipfs/QmNgNgovNe1FAYgWzfm6u8FDyrx57SUdfSEKSqLNmFwVLF"
                  alt="Black kettle with long pour spot and angled body on marble counter next to coffee mug and pour-over system."
                  className="h-full w-full object-cover object-center"
                />
                
              </div>
              <h2 className="pt-6">Manhood</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
