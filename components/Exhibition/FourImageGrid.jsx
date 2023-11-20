// import { getCollectionProducts } from "../../lib/shopify";
import Link from "next/link";

export default async function FourImageGrid() {
  //   const products = await getCollectionProducts({ collection: "Artwork" });
  //   const productsByTag = products.filter((product) => {
  //     return product.tags.includes("kyle-steed");
  //   });

  //   if (!products?.length) return null;

  //   const imagesArray = productsByTag.splice(6, 9);
  return (
    <div className="mx-auto grid grid-cols-2 max-w-7xl py-20 gap-10">
      <div className="grid-rows-3">
        <Link href={"/products/between-eye-and-sky-by-kyle-steed"}>
          <div className="aspect-[7/5]">
            <img
              src="https://ipfs.filebase.io/ipfs/Qmbgo9ASEHYQAnR17mwwi3RwXsXaWoqg1ZiQ9Gd2cTUAiv/QmU2XuwgGwo3UXixsfT1CJd1ews8RuVPG8frB1QBo6brFz"
              alt="between eye and the sky"
            />
            <p className="pt-4 mb-10">Between Eye and Sky</p>
          </div>
        </Link>

        <Link href={"/products/descent-of-sun-by-kyle-steed"}>
          <div className="rows-span-2">
            <img
              src="https://ipfs.filebase.io/ipfs/QmfN2zDA4363pnka7W8UnCzWnAnQmbYnaYfwXWXB8zgZMX/QmNR1vyjqvGqdSeZENRuVVHq3GrGtCt9tomv3mvKqmW6qx"
              alt=""
            />
            <p className="pt-4">Descent of Sun</p>
          </div>
        </Link>
      </div>
      <div className="grid-rows-3">
        <Link href={"/products/forgotten-lexicon-no-02-by-kyle-steed"}>
          <div className="rows-span-2 ">
            <img
              src="https://ipfs.filebase.io/ipfs/QmUp4bwc6fpt4BgiG9AcT6CGesd4JFp6fgxVTE38p3gHEB"
              alt=""
            />
            <p className="pt-4 mb-10">Forgotten Lexicon No. 02</p>
          </div>
        </Link>

        <Link href={"/products/the-break-of-dawn-by-kyle-steed"}>
          <div className="aspect-[7/5]">
            <img
              src="https://ipfs.filebase.io/ipfs/QmWPDmap5QNHuArXQqb8tDTcY8e4WTbAwLZGwuTYfUmVT5"
              alt=""
            />
            <p className="pt-4">The Break of Dawn</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
