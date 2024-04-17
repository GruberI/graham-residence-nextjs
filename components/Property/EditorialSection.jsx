const posts = [
  {
    id: 1,
    title: "The Graham Residence",
    href: "/about",
    description:
      "A serene mid-century modern retreat near Joshua Tree National Park .",
    imageUrl:
      "https://ipfs.filebase.io/ipfs/QmNMPqyr8TZUSXnjttbCzJ3xd6aHoXRFe1SBn7Knc56FgA/QmS9PPjdbzKRuFei3QZ4HhxxLfyBfLCxnzez1mdSyyfmZj",
    date: "Mar 16, 2020",
    buttonText: "STAY",
  },
  {
    id: 1,
    title: "The Graham Gallery",
    href: "/gallery",
    description:
      "Contextual gallery spaces exhibiting the best in emerging contemporary art.",
    imageUrl:
      "https://ipfs.filebase.io/ipfs/QmeXQ83SihmhTBByGoU23be534CxH1Ccgg9FaUWFuwz5nS",
    date: "Mar 16, 2020",
    buttonText: "EXPLORE",
  },
  {
    id: 1,
    title: "The Graham Shop",
    href: "/shop",
    description:
      "An intentionally curated selection of our favorite home goods.",
    imageUrl:
      "https://ipfs.filebase.io/ipfs/QmYZRYNpXVYf4D4SwoppYJa5rmRrVyKFPq4Nyf5T421DDA/QmekpobXk8pKQ4no7187Zio7vGqjYCdRriTnJJ7D7X8WcY",
    date: "Mar 16, 2020",
    buttonText: "SHOP",
  },
];

export default function EditorialSection() {
  return (
    <div className="bg-white mb-10">
      <div className="mx-auto mx-12 sm:mx-20">
        <div className="mx-auto mt-16 grid auto-rows-fr grid-cols-1 gap-12 sm:mt-0 lg:mx-0 lg:max-w-none lg:grid-cols-3">
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

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300 absolute top-[38%] right-[2%] justify-center">
                <h3 className="mt-3 text-xl font-semibold leading-6 text-white">
                  <a href={post.href}>{post.title}</a>
                </h3>

                <div className="ml-2 text-center mb-4 font-light">
                  {post.description}
                </div>

                <button className="bg-white text-black py-2 w-24 sm:w-28">
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
