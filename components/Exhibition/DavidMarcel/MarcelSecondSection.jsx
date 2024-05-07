export default function MarcelSecondSection() {
  return (
    <div className="mx-auto grid grid-rows-1 sm:grid-rows-3 grid-flow-col max-w-7xl sm:py-12">
      <div className="row-start-1 row-end-3 ">
        <a href="/product/blue-shield">
          <img
            src="https://ipfs.filebase.io/ipfs/QmQRmBxujoauPovt4c7LP2fvGPjzr8FPj1tkxWhDvAPy6m"
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </a>
      </div>
      <div className="sm:row-start-2 sm:row-span-2 content-center pb-28 mr-20 gap-4 pl-4">
        <a href="/product/blue-shield">
          <p>Blue Shield</p>
          <p>by Marcel Rozek</p>
          <p>36 x 24 in.</p>
          <p>Oil on Canvas</p>
          <p>$4,800</p>
        </a>
      </div>
      <div className="row-start-2 row-span-3 hidden sm:inline">
        <img
          src="https://ipfs.filebase.io/ipfs/QmZwYjs5U8k1aQbN767N2ga8uVFGEWsuaYvmvHCANB5T5K"
          alt="h-full w-full object-cover object-center"
        />
      </div>
    </div>
  );
}
