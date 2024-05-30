export default function ThreeImageGrid() {
  return (
    <div className="mx-auto grid grid-cols-2 grid-rows-2 grid-flow-col gap-x-10 sm:pt-16 gap-y-10 max-w-7xl">
      <div className="row-span-2 flex justify-end align-middle mt-48">
        <div className="w-10/12 h-11/12">
          <img
            src="https://ipfs.filebase.io/ipfs/QmVD6xBTVjjP8USC1gqfwsxgt18PgEFrujrmaUSXLu68WC"
            alt=""
            className=" w-full"
          />
        </div>
      </div>
      <div className="row-span-2 content-center w-10/12 h-10/12">
        <div className="">
          {" "}
          <img
            src="https://ipfs.filebase.io/ipfs/QmYz8R9PL8BJ4hrfQxvYiA6whyzR4NxXSYtojCyL1p4P14"
            alt=""
            className=" w-full"
          />
        </div>
        <div className="">
          <img
            src="https://ipfs.filebase.io/ipfs/QmV39MLBLsMtxi7ZMUA7CUaP8uPbsP6BqfUBVn6P7SYaLh/QmYRtJQwPp1KwczWak8p61h8v6wydHTAwP3sdAEAASuYm3"
            alt=""
            className="w-full mt-10"
          />
        </div>
      </div>
    </div>
  );
}
