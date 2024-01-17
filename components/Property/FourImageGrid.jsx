import Link from "next/link";
export default async function FourImageGrid() {
  return (
    <div
      className="mx-auto grid grid-cols-2 max-w-6xl py-20 gap-10"
      id="property-gallery"
    >
      <div className="grid-rows-3">
        <div className="aspect-[6/4] pb-10">
          <img
            src="https://ipfs.filebase.io/ipfs/QmNdt9bpx4hYyB4KMckJc3b3Swt4w1PwH9zYvM32K5g5HJ"
            alt="between eye and the sky"
          />
        </div>

        <div className="rows-span-2">
          <img
            src="https://ipfs.filebase.io/ipfs/QmTYVjdAsAbEKuSJ4dKQaHwkQJjfWJY4UWivoXiAfE9HSG"
            alt=""
          />
        </div>
      </div>
      <div className="grid-rows-3">
        <div className="rows-span-2 pb-10">
          <img
            src="https://ipfs.filebase.io/ipfs/QmWvWkJqJPjMNsLReNzvRqBwaz1fFqWxUzKLxrjFfvem9Y/QmcCMwxbycnVuXTghpA7ERg4B7Kg5L25NHsopeXy3Xqgub"
            alt=""
          />
        </div>

        <div className="aspect-[6/4]">
          <img
            src="https://ipfs.filebase.io/ipfs/QmZGBHr4fs5nVdiTYqdL68rCuoAtvSe8hqmb4pHy8dDS3f/QmcUxj7fZ2KMfdXH3mNX83mghB7BBxqKT9rvEYF8GfjgGf"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
