import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "Residence",
    href: "/residence",
    description: "Nestled in the boulders of Yucca Valley.",
    imageUrl:
      "https://ipfs.filebase.io/ipfs/QmXxDzFFdxJwH15qfzL8UFbvYwkRjhPCvZ4ptXQ9NiNx4F/QmQH3YRaFjaqw6e9EVY6iGztdDxGZnu3Q5tJEKaAi6NoTW",
    mobileImageUrl:
      "https://ipfs.filebase.io/ipfs/QmXxDzFFdxJwH15qfzL8UFbvYwkRjhPCvZ4ptXQ9NiNx4F/QmQH3YRaFjaqw6e9EVY6iGztdDxGZnu3Q5tJEKaAi6NoTW",
    date: "Mar 16, 2020",
    buttonText: "LEARN MORE",
  },
  {
    id: 2,
    title: "Gallery",
    href: "/gallery",
    description: "Exhibiting emerging contemporary artists.",
    imageUrl:
      "https://ipfs.filebase.io/ipfs/QmXHxptW92cavgyjPWSCTb6Df6mtssHXksAPiYd7RqddUF",
    mobileImageUrl:
      "https://ipfs.filebase.io/ipfs/QmXHxptW92cavgyjPWSCTb6Df6mtssHXksAPiYd7RqddUF",
    date: "Mar 16, 2020",
    buttonText: "COLLECT",
  },
  {
    id: 3,
    title: "Shop",
    href: "/shop",
    description: "A curated selection of our favorite home objects.",
    imageUrl:
      "https://ipfs.filebase.io/ipfs/QmYZRYNpXVYf4D4SwoppYJa5rmRrVyKFPq4Nyf5T421DDA/QmekpobXk8pKQ4no7187Zio7vGqjYCdRriTnJJ7D7X8WcY",
    mobileImageUrl:
      "https://ipfs.filebase.io/ipfs/QmYZRYNpXVYf4D4SwoppYJa5rmRrVyKFPq4Nyf5T421DDA/QmekpobXk8pKQ4no7187Zio7vGqjYCdRriTnJJ7D7X8WcY",
    date: "Mar 16, 2020",
    buttonText: "EXPLORE",
  },
];

export default function EditorialSection() {
  return (
    // <div className="bg-neutral-100 sm:py-16 pb-10 sm:pb-16" id="editorial">
    <div className="bg-white mt-0 mb-16 mx-4 sm:mx-0" id="editorial">
      <div className="m-auto max-w-7xl">
        <div className="mx-auto mt-14 sm:mt-16 grid auto-rows-fr grid-cols-1 gap-12 sm:mt-0 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col items-start justify-center"
            >
              <div className="w-full">
                <a href={post.href} className="relative">
                  <div className="relative brightness-90">
                    <img
                      src={post.imageUrl}
                      alt=""
                      className="w-full bg-gray-100 object-cover aspect-square brightness-90"
                    />
                  </div>
                  <div className="absolute inset-0">
                    <h3 className="sm:text-5xl  text-4xl leading-6 mx-auto pt-6 text-white z-40 text-center pt-[46%] sm:pt-[41%]">
                      {post.title}
                    </h3>
                    <p className="line-clamp-3 text-xl text-white m-auto text-center w-10/12 my-2 pt-4 hidden sm:block">
                      {post.description}
                    </p>
                  </div>
                </a>
              </div>

              <div className="flex flex-col">
                {/* <p className="line-clamp-3 text-xl text-gray-600 m-auto text-center w-10/12 my-2 pt-4">
                  {post.description}
                </p> */}

                {/* <Link href={post.href} className="m-auto">
                  <button className="bg-white text-sm text-black py-2.5 w-32 sm:w-36 border border-black mt-2 hover:bg-black hover:text-white">
                    {post.buttonText}
                  </button>
                </Link> */}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
