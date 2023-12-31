import Link from "next/link";
const contact = [
  {
    name: "artwork",
    text: "Artwork & shop inquires:",
    subtext: "tgr@grahamresidence.com",
    email: "tgr@grahamresidence.com",
  },
  {
    name: "artist representation",
    text: "Artist representation:",
    subtext: "lindsey@lindseygoldbergdesign.com",
    email: "lindsey@lindseygoldbergdesign.com",
  },
  {
    name: "photography",
    text: "Shoots & Events:",
    subtext: "Peerspace",
    href: "https://www.peerspace.com/pages/listings/619d39bcbdb172000d2c030e?sort_order=12",
  },
];
export default function Contact() {
  return (
    <main className="relative isolate" id="contact-us">
      <div className="mx-auto max-w-8xl px-6 lg:px-8 border-t border-black mb-20">
        <div className="mx-auto lg:mx-0 lg:max-w-none">
          <dl className="mx-auto mt-16 max-w-3xl grid-cols-1 gap-8 text-base leading-7 text-black lg:mx-0 lg:max-w-none">
            {contact.map((value) => (
              <div key={value.name} className="relative flex justify-center text-center">
                <p>
                  {value.text}{" "}
                  <span className="hover:underline hover:underline-offset-8">
                    <Link
                      className="inline"
                      href={
                        value.email ? `mailto:${value.email}` : `${value.href}`
                      }
                      target="_blank"
                    >
                      {value.subtext}
                    </Link>{" "}
                  </span>
                </p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </main>
  );
}
