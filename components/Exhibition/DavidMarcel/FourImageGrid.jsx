import Link from "next/link";

export default function FourImageGrid() {
  return (
    <div className="mx-auto grid grid-cols-2 max-w-7xl py-20 gap-10">
      <div className="grid-rows-3">
        <Link href={"/product/between-eye-and-sky-by-kyle-steed"}>
          <div className="aspect-[7/5]">
            <img
              src="https://ipfs.filebase.io/ipfs/QmZN3H4MJ7ve9onP2aChVe365KSUHFJDeGG9EpuBo9KA8q/RackMultipart20240501-170-1nhak7c.jpg"
              alt="between eye and the sky"
            />
            <p className="pt-4 mb-10">Title</p>
          </div>
        </Link>

        <Link href={"/product/descent-of-sun-by-kyle-steed"}>
          <div className="rows-span-2">
            <img
              src="https://ipfs.filebase.io/ipfs/QmcAp8z35sM8pSgnSDoQmeFrDZ8dMSufjoKgrw8d9n8nKH/RackMultipart20240501-64-17fidtt.jpg"
              alt=""
            />
            <p className="pt-4">Title</p>
          </div>
        </Link>
      </div>
      <div className="grid-rows-3">
        <Link href={"/product/forgotten-lexicon-no-02-by-kyle-steed"}>
          <div className="rows-span-2 ">
            <img
              src="https://ipfs.filebase.io/ipfs/QmY3CEW7Z6eWH4fgPYwX7rvKXWMmSLgyRZGSQnJvoacvRK/RackMultipart20240501-64-177c0yi.jpg"
              alt=""
            />
            <p className="pt-4 mb-10">Title</p>
          </div>
        </Link>

        <Link href={"/product/the-break-of-dawn-by-kyle-steed"}>
          <div className="aspect-[7/5]">
            <img
              src="https://ipfs.filebase.io/ipfs/QmWHNmQVHhGeUn9wezZjwTZXstigVrq1d8KAB9spPfRLWC/RackMultipart20240501-107-14tknqf.jpg"
              alt=""
            />
            <p className="pt-4">Title</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
