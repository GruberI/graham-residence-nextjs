export default function ThreeImageGrid() {
  return (
    <div className="flex space-x-6 sm:pt-16 mx-auto max-w-3xl px-8">
      <div className="flex items-center w-1/2">
        <img
          src="https://ipfs.filebase.io/ipfs/QmVD6xBTVjjP8USC1gqfwsxgt18PgEFrujrmaUSXLu68WC"
          alt=""
          className="w-full"
        />
      </div>
      <div className="flex flex-col space-y-6 w-1/2">
        <img
          src="https://ipfs.filebase.io/ipfs/QmYz8R9PL8BJ4hrfQxvYiA6whyzR4NxXSYtojCyL1p4P14"
          alt=""
          className="w-full"
        />
        <img
          src="https://ipfs.filebase.io/ipfs/QmV39MLBLsMtxi7ZMUA7CUaP8uPbsP6BqfUBVn6P7SYaLh/QmYRtJQwPp1KwczWak8p61h8v6wydHTAwP3sdAEAASuYm3"
          alt=""
          className="w-full"
        />
      </div>
    </div>
  );
}
