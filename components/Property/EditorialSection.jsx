import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "Residence",
    href: "/residence",
    description:
      "A serene mid-century modern retreat near Joshua Tree National Park .",
    imageUrl:
      "https://ipfs.filebase.io/ipfs/QmNMPqyr8TZUSXnjttbCzJ3xd6aHoXRFe1SBn7Knc56FgA/QmS9PPjdbzKRuFei3QZ4HhxxLfyBfLCxnzez1mdSyyfmZj",
    mobileImageUrl:
      "https://ipfs.filebase.io/ipfs/QmNMPqyr8TZUSXnjttbCzJ3xd6aHoXRFe1SBn7Knc56FgA/QmS9PPjdbzKRuFei3QZ4HhxxLfyBfLCxnzez1mdSyyfmZj",
    date: "Mar 16, 2020",
    buttonText: "LEARN MORE",
  },
  {
    id: 2,
    title: "Gallery",
    href: "/gallery",
    description:
      "Contextual gallery spaces exhibiting the best in emerging contemporary art.",
    imageUrl:
      "https://ipfs.filebase.io/ipfs/QmcmqwxzxdKtcsq89tPi1a1afZqFQFEXk3T5KGDFHo7G9e/RackMultipart20240501-172-6jtxp6.jpg",
    mobileImageUrl:
      "https://ipfs.filebase.io/ipfs/QmXyHncUksnDL916JNoBhq8NmdrAZefKhHNMdYQ5KcAPBr",
    date: "Mar 16, 2020",
    buttonText: "COLLECT",
  },
  {
    id: 3,
    title: "Shop",
    href: "/shop",
    description:
      "An intentionally curated selection of our favorite home goods.",
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
    <div className="bg-neutral-100 py-10" id="editorial">
      <div className="m-auto max-w-7xl">
        <div className="mx-auto mt-16 grid auto-rows-fr grid-cols-1 gap-12 sm:mt-0 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col items-start justify-center"
            >
              <div className="w-full">
                <a href={post.href}>
                  <img
                    src={post.imageUrl}
                    alt=""
                    className="aspect-[16/9] w-full bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-square hidden sm:block"
                  />
                  <img
                    src={post.mobileImageUrl}
                    alt=""
                    className="aspect-[16/9] w-full bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-square block sm:hidden"
                  />
                </a>
              </div>

              <div className="flex flex-col">
                <h3 className="text-2xl font-semibold leading-6 text-gray-900 mx-auto pt-4">
                  <a href={post.href}>{post.title}</a>
                </h3>
                <p className="line-clamp-3 text-sm text-gray-600 m-auto text-center w-10/12 my-2">
                  {post.description}
                </p>

                <Link href={post.href} className="m-auto">
                  <button className="bg-white text-sm lg:text-sm text-black py-2.5 w-32 sm:w-36 border border-black mt-2 hover:bg-black hover:text-white">
                    {post.buttonText}
                  </button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
