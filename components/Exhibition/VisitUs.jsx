import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "SHOWROOM",
    location: "Costa Mesa, CA",
    href: "mailto:info@graham-collective.com?subject=Appointment",
    description:
      "Our office and showroom is open Monday through Saturday by appointment",
    imageUrl:
      "https://ipfs.filebase.io/ipfs/QmZ8cbeqVMQb9KLVUznbbG1ZhAkCYzqqjW9JzkCWGPcgd6",
    date: "Mar 16, 2020",
    buttonText: "REQUEST AN APPOINTMENT",
  },
  {
    id: 2,
    title: "THE GRAHAM RESIDENCE",
    href: `/residence#property-book`,
    location: "Yucca Valley, CA",
    description:
      "A mid-century modern retreat where the lines between home and gallery are blurred",
    imageUrl:
      "https://ipfs.filebase.io/ipfs/QmNVyoKRAfJ86QBPSidzSQhA5Ecuth4G3A1me3i3XEAmqy",
    date: "Mar 16, 2020",
    buttonText: "REQUEST TO BOOK",
  },
];

export default function VisitUs() {
  return (
    <div className="border-t border-black m-auto max-w-7xl py-16">
      <h1 className="sm:text-5xl text-4xl text-center pb-12">
        Visit Us
      </h1>
      <div className="mx-auto grid auto-rows-fr grid-cols-1 gap-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        {posts.map((post) => (
          <article key={post.id} className="flex flex-col mx-4">
            <div>
              <img
                src={post.imageUrl}
                alt=""
                className="aspect-[16/9] w-full bg-gray-100 object-cover aspect-square"
              />
            </div>

            <div className="text-center">
              <h2 className="sm:text-2xl text-xl font-semibold leading-6 text-gray-900 pt-6">
                <a href={post.href}>{post.title}</a>
              </h2>
              <p className="mt-2 text-lg">{post.location}</p>
              <p className="line-clamp-3 text-lg text-gray-600 mx-10 my-4">
                {post.description}
              </p>

              <Link href={post.href}>
                <button className="bg-white text-sm text-black py-2.5 min-w-[150px] px-3 border border-black mt-2 hover:bg-black hover:text-white">
                  {post.buttonText}
                </button>
              </Link>
            </div>
          </article>
        ))}
      </div>
      <div id="consulting-services"></div>
    </div>
  );
}
