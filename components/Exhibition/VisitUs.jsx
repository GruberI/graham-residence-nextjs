import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "The Graham Residence",
    href: "/about",
    description:
      "A mid-century modern retreat where the lines between home and gallery are blurred",
    imageUrl:
      "https://ipfs.filebase.io/ipfs/QmQVMsU16vzX41Xm7P9yaAguWtAXB4PNqmkj39NYYmSELi/QmVtrSnvo5BXogdriXLMgPafTQmbEo6irC2a8csxSKdier",
    date: "Mar 16, 2020",
    buttonText: "REQUEST TO BOOK",
  },
  {
    id: 2,
    title: "The Graham Gallery",
    href: "/gallery",
    description:
      "Our Orange County, California gallery is open Monday through Friday, 12-6pm or by appointment.",
    imageUrl:
      "https://ipfs.filebase.io/ipfs/QmPe9ZCm8pa5LyeVLhqrTkHUFPeWQkMFeeEzTeeRFVX1CW/QmZFdutKFmbBF4Hj9GkgW1bhcx2Yvhxn2t1EykGauZLcMe",
    date: "Mar 16, 2020",
    buttonText: "REQUEST APPOINTMENT",
  },
];

export default function ArtServices() {
  return (
    <div className="mt-20 border-t border-black pt-20 m-auto max-w-7xl">
      <h1 className="sm:text-5xl text-4xl text-center pb-16">Visit Us</h1>
      <div className="mx-auto mx-12 sm:mx-20">
        <div className="mx-auto mt-16 grid auto-rows-fr grid-cols-1 gap-16 sm:mt-0 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.id}
              className="relative isolate flex flex-col justify-end overflow-hidden bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 aspect-square"
            >
              <img
                src={post.imageUrl}
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10" />
              <div className="absolute inset-0 -z-10 ring-1 ring-inset ring-gray-900/10" />

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden leading-6 text-gray-300 absolute top-[38%] right-[2%] justify-center">
                <h3 className="mt-3 text-3xl font-bold leading-6 text-white mb-2">
                  <Link href={post.href}>{post.title}</Link>
                </h3>

                <div className="text-center font-light mx-20 mb-8">
                  {post.description}
                </div>

                <button className="bg-white text-black py-2 w-28 sm:w-48 text-[10px]">
                  {post.buttonText}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
