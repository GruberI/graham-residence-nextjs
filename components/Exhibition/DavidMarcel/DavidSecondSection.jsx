export default function DavidSecondSection() {
  return (
    <div className="mx-auto sm:grid grid-rows-2 grid-flow-col max-w-7xl py-12 border-t border-black mt-20 pt-20 hidden ">
      <div className="row-start-1 row-end-3">
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
      <div className="row-start-2 row-span-2 content-end text-end pl-20 pr-2">
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
  );
}
