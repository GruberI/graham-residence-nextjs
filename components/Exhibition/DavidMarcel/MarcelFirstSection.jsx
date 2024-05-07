export default function MarcelFirstSection() {
  return (
    <div className="mx-auto grid grid-rows-2 grid-flow-col max-w-7xl py-12 border-t border-black mt-20 pt-20">
      <div className="row-start-1 row-end-3 ">
      <a href="/product/cold-grey-over-warm">
        <img
          src="https://ipfs.filebase.io/ipfs/QmZRLE1qXk7NxDamYJBiExKMDrabBxbbkKHrVz2S7N4pNK"
          alt=""
          className="h-full w-full object-cover object-center"
        />
        </a>
      </div>
      <div className="sm:row-start-2 row-span-1 sm:row-span-2 content-center mr-20 pl-4 content-end">
      <a href="/product/cold-grey-over-warm">
          <p>Cold Grey Over Warm</p>
          <p>by Marcel Rozek</p>
          <p>62 x 568 in.</p>
          <p>Oil on Canvas</p>
          <p>$10,400</p>
          </a>
      </div>
      <div className="row-start-1 row-span-3 hidden sm:inline">
        <div>
          <img src="https://ipfs.filebase.io/ipfs/QmPVEHPoqHvCqSaSrz96PWMtBdiHsujxJwgYPzKk7NmTua" alt="" />
        </div>
        <div className="pt-24">
          <img src="https://ipfs.filebase.io/ipfs/QmRBUiYHVmn3y5owVHHYsLo3nDabuo8s9qJLzHBnhChFcz" alt="" />
        </div>
      </div>
    </div>
  );
}
