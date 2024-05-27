import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "Poetic glassware made for hosting",
    href: "/home/sophie-lou-jacobsen",
    description:
      "Designed to enhance their user's mood through form and function",
    imageUrl:
      "https://ipfs.filebase.io/ipfs/Qmebq1w13djTmkJVkpV3gJChYibddBvhRy9BsAsFqK2hZx",
    date: "Mar 16, 2020",
    buttonText: "SOPHIE LOU JACOBSEN",
  },
  {
    id: 2,
    title: "Modern tablescapes for every occasion",
    href: "/home/atelier-saucier",
    description:
      "Two best friends bring you a fresh, elevated perspective on all things table linens",
    imageUrl:
      "https://ipfs.filebase.io/ipfs/QmSwm2ZWWHd2zkVyimxBGmwfe8FycutU6A4MwLtzntjuLJ",
    date: "Mar 16, 2020",
    buttonText: "ATELIER SAUCIER",
  },
];

export default function VendorFeature() {
  return (
    <div className="mt-10 sm:mt-16 border-t border-black m-auto max-w-7xl">
      <div className="">
        <div className="mx-auto mt-0 sm:mt-16 grid auto-rows-fr grid-cols-1 gap-16 sm:mt-0 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col">
              <div className="w-full">
                <img
                  src={post.imageUrl}
                  alt=""
                  className="aspect-[16/9] w-full bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-square"
                />
              </div>

              <div className="text-center my-6">
                <h2 className="text-2xl font-semibold text-gray-900 mx-10 sm:mx-16">
                  <a href={post.href}>{post.title}</a>
                </h2>
                {/* <p className="line-clamp-3 text-sm text-gray-600 mx-10 my-4">
                  {post.description}
                </p> */}

                <Link href={post.href}>
                  <button className="bg-white text-sm text-black py-2.5 min-w-[150px] px-3 border border-black mt-4 hover:bg-black hover:text-white">
                    {post.buttonText}
                  </button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div id="consulting-services"></div>
    </div>
  );
}
