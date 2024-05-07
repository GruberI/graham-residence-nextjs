export default function DavidFirstSection() {
  return (
    <div className="mx-auto grid grid-rows-1 sm:grid-rows-3 sm:grid-flow-col max-w-7xl sm:py-12">
      <div className="sm:row-start-1 sm:row-end-3 ">
        <a href="/product/untitled-12-03-22">
          <img
            src="https://ipfs.filebase.io/ipfs/QmRTsK696AZY88Uxg4qwjv228kya4bR6FY9iSpGVDadJZf"
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </a>
      </div>

      <div className="row-start-2 row-span-2 content-center sm:pb-28 mr-20 gap-4 pl-4 pt-6 sm:pt-0">
        <a href="/product/untitled-12-03-22">
          <p>Untitled (12.3.22)</p>
          <p>by David Matthew King</p>
          <p>60 x 52 in.</p>
          <p>Acrylic on Canvas</p>
          <p>$6,200</p>
        </a>
      </div>

      <div className="row-start-2 row-span-3 hidden sm:inline">
        <img
          src="https://ipfs.filebase.io/ipfs/QmWZ2yxNFNJCFSVc3B1Wm5n1ZwifSfiCLB5kXJRs3KXY1B"
          alt="h-full w-full object-cover object-center"
        />
      </div>

      {/* <div className="">
        <img
          src="https://ipfs.filebase.io/ipfs/QmVD6xBTVjjP8USC1gqfwsxgt18PgEFrujrmaUSXLu68WC"
          alt=""
        />
        <div className="row-span-1"></div>
        <div className="row-span-1"></div>
      </div>
      <div className="col-span-1">
        <p>Lorem ipsum</p>
      </div>
      <div className="">
      <div className="row-span-1"></div>
      <div className="row-span-1"></div>
        <img
          src="https://ipfs.filebase.io/ipfs/QmVD6xBTVjjP8USC1gqfwsxgt18PgEFrujrmaUSXLu68WC"
          alt=""
          className="row-span-1"
        />
      </div> */}
    </div>
  );
}
