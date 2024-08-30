import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "Residence",
    href: "/residence",
    description: "Nestled in the boulders of Yucca Valley.",
    imageUrl:
      "https://siteimagery.nyc3.cdn.digitaloceanspaces.com/About/QmQH3YRaFjaqw6e9EVY6iGztdDxGZnu3Q5tJEKaAi6NoTW.jpg",
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
    date: "Mar 16, 2020",
    buttonText: "COLLECT",
  },
  {
    id: 3,
    title: "Shop",
    href: "/shop",
    description: "A selection of our favorite home objects.",
    imageUrl:
      "https://ipfs.filebase.io/ipfs/QmYZRYNpXVYf4D4SwoppYJa5rmRrVyKFPq4Nyf5T421DDA/QmekpobXk8pKQ4no7187Zio7vGqjYCdRriTnJJ7D7X8WcY",
    date: "Mar 16, 2020",
    buttonText: "EXPLORE",
  },
];

export default function Editorial() {
  return (
    <div className="bg-white mt-0 mb-16 mx-4 sm:mx-0" id="editorial">
      <div className="m-auto max-w-7xl">
        <div className="mt-10 sm:mt-16 grid auto-rows-fr grid-cols-1 gap-10 sm:mt-0 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="relative isolate flex flex-col justify-end overflow-hidden bg-gray-900 px-8 pb-8"
            >
              <a href={post.href}>
                <div className="aspect-square">
                  <img
                    src={post.imageUrl}
                    alt=""
                    className="absolute inset-0 -z-10 h-full w-full object-cover brightness-75"
                  />
                </div>
                <div className="flex flex-wrap justify-center gap-y-1 overflow-hidden text-sm leading-6 text-white absolute inset-0 items-center flex-col">
                  <h3 className="text-5xl">{post.title}</h3>
                  <h3 className="mt-3 text-2xl leading-6 text-white w-9/12 text-center">
                    <span className="" />
                    {post.description}
                  </h3>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
