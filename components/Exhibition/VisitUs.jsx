import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "THE STUDIO",
    location: "Costa Mesa, CA",
    href: "mailto:info@graham-collective.com?subject=Appointment",
    description:
      "Our Costa Mesa office is open Monday through Saturday by appointment",
    imageUrl:
      "https://siteimagery.nyc3.cdn.digitaloceanspaces.com/About/003.jpg",
    date: "Mar 16, 2020",
    buttonText: "REQUEST AN APPOINTMENT",
  },
  {
    id: 2,
    title: "THE GRAHAM RESIDENCE",
    href: `/residence`,
    location: "Yucca Valley, CA",
    description:
      "A 2-bedroom retreat on over 20 acres where the lines between home and gallery are blurred",
    imageUrl:
      "https://siteimagery.nyc3.cdn.digitaloceanspaces.com/Residence/_DSC2720.jpg",
    date: "Mar 16, 2020",
    buttonText: "LEARN MORE",
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
