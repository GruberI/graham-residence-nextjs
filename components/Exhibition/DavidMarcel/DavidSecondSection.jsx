export default function DavidSecondSection() {
  return (
    <div className="mx-auto grid grid-rows-1 grid-col-1 sm:grid-col-3 grid-flow-col max-w-7xl py-12 border-t border-black mt-20 pt-20">
      <div className="sm:row-start-1 sm:row-end-3 hidden sm:flex flex-col">
        <div>
          <img
            src="https://ipfs.filebase.io/ipfs/Qmcyp5USTorxJ9DmneRo6oVQ4v8jnBNnfL5pW4CF3uqHGN"
            alt=""
          />
        </div>
        <div className="pt-24">
          <img
            src="https://ipfs.filebase.io/ipfs/Qmae4rg7X3oZwTVrwQrmCcmfkV54TvpUP11WM1TdWiNtEo"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col-reverse sm:flex-row">
        <div className="sm:row-start-2 sm:row-span-2 sm:content-end text-end pl-20 pr-4 justify-center mt-10 ms:mt-0">
          <a href="/product/untitled-2">
            <p>Untitled (10.9.22)</p>
            <p>by David Matthew King</p>
            <p>60 x 52 in.</p>
            <p>Acrylic on Canvas</p>
            <p>$6,200</p>
          </a>
        </div>
        <div className="row-start-1 row-span-3">
          <a href="/product/untitled-2">
            <img
              src="https://ipfs.filebase.io/ipfs/QmaMPzHRD6eNLbUCMNcHEnDjK7YuQUwTgco1AyWARVGjHA"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
