import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "Showroom",
    location: "Newport Beach, CA",
    href: "mailto:lindsey@graham-collective.com?subject=Artist representation by Lindsey Goldberg Design",
    description:
      "Our office and showroom is open Monday through Saturday by appointment",
    imageUrl:
      "https://ipfs.filebase.io/ipfs/QmZ8cbeqVMQb9KLVUznbbG1ZhAkCYzqqjW9JzkCWGPcgd6",
    date: "Mar 16, 2020",
    buttonText: "REQUEST AN APPOINTMENT",
  },
  {
    id: 2,
    title: "The Graham Residence",
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
    <div className="mt-20 border-t border-black pt-16 sm:pt-20 m-auto max-w-7xl pb-10">
      <h1 className="sm:text-5xl text-4xl pb-0 lg:pb-16 text-center">
        Visit Us
      </h1>
      <div className="mx-auto mt-16 grid auto-rows-fr grid-cols-1 gap-16 sm:mt-0 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        {posts.map((post) => (
          <article key={post.id} className="flex flex-col">
            <div>
              <img
                src={post.imageUrl}
                alt=""
                className="aspect-[16/9] w-full bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-square"
              />
            </div>

            <div className="text-center my-4 sm:my-10">
              <h2 className="text-4xl font-semibold leading-6 text-gray-900">
                <a href={post.href}>{post.title}</a>
              </h2>
              <p className="mt-2 text-lg">{post.location}</p>
              <p className="line-clamp-3 text-xl text-gray-600 mx-10 my-4">
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
