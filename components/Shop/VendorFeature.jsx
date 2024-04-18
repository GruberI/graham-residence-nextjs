import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "Sophie Lou Jacobsen’s  poetic glassware is made for hosting",
    href: "/about",
    description:
      "Designed to enhance their user's mood through form and function",
    imageUrl:
      "https://ipfs.filebase.io/ipfs/QmVyPC4ipFc2LfK2QyNUy2kjxRdDV7AGDE5JCDW2tXjy2C/Qmc2VygEEgFLHfiX7KmBFsjoui7RuRBiUFDVays55WCrHP",
    date: "Mar 16, 2020",
    buttonText: "SOPHIE LOU JACOBSEN",
  },
  {
    id: 2,
    title: "Modern tablescapes for every occasion and every day",
    href: "/gallery",
    description:
      "Two best friends bring you a fresh, elevated perspective on all things table linens",
    imageUrl:
      "https://ipfs.filebase.io/ipfs/QmeX2riCL8zzCpbmzHY267po3SQRNYnwuPPrs7PeQSe8Ra",
    date: "Mar 16, 2020",
    buttonText: "ATELIER SAUCIER",
  },
];

export default function VendorFeature() {
  return (
    <div className="mt-20 border-t border-black pt-20 pb-6 m-auto max-w-7xl">
      <div className="mx-auto mx-12 sm:mx-20">
        <div className="mx-auto mt-16 grid auto-rows-fr grid-cols-1 gap-10 sm:mt-0 lg:mx-0 lg:max-w-none lg:grid-cols-2">
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

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden leading-6 text-gray-300 absolute top-[35%] right-[2%] justify-center">
                <h3 className="mt-3 text-3xl font-bold leading-6 text-white mb-2 mx-2 text-center">
                  <Link href={post.href}>{post.title}</Link>
                </h3>

                <div className="text-center font-light mx-16 mb-8">
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
