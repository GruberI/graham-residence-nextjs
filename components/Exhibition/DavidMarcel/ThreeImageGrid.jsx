import Link from "next/link";

export default function ThreeImageGrid() {
  return (
    <div className="mx-auto grid grid-cols-2 grid-rows-2 grid-flow-col max-w-7xl gap-x-10 sm:pt-10 gap-y-10">
      <div className="row-span-2 content-center">
        <div className="aspect-square">
          <img
            src="https://ipfs.filebase.io/ipfs/QmVD6xBTVjjP8USC1gqfwsxgt18PgEFrujrmaUSXLu68WC"
            alt=""
            className=""
          />
        </div>
      </div>
      <div className="row-span-2 content-center">
        <div className="aspect-square">
          {" "}
          <img
            src="https://ipfs.filebase.io/ipfs/QmYz8R9PL8BJ4hrfQxvYiA6whyzR4NxXSYtojCyL1p4P14"
            alt=""
            className=""
          />
        </div>
        <div className="aspect-square">
          <img
            src="https://ipfs.filebase.io/ipfs/QmV39MLBLsMtxi7ZMUA7CUaP8uPbsP6BqfUBVn6P7SYaLh/QmYRtJQwPp1KwczWak8p61h8v6wydHTAwP3sdAEAASuYm3"
            alt=""
            className="mt-10"
          />
        </div>
      </div>
    </div>
  );
}
