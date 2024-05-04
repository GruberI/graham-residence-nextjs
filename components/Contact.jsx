import Link from "next/link";
const contact = [
  {
    name: "artwork",
    text: "Artwork & shop inquires:",
    subtext: "info@graham-collective.com",
    email: "info@graham-collective.com",
    subject: "TGR Artwork or Shop Inquiry",
  },
  {
    name: "artist representation",
    text: "Artist representation:",
    subtext: "lindsey@lindseygoldbergdesign.com",
    email: "lindsey@lindseygoldbergdesign.com",
    subject: "Artist representation by Lindsey Goldberg Design",
  },
  {
    name: "photography",
    text: "Shoots & Events:",
    subtext: "tgr@grahamresidence.com",
    email: "tgr@grahamresidence.com",
    subject: "Photography Inquiry for TGR",
  },
];
export default function Contact() {
  return (
    <main className="relative isolate" id="contact-us">
      <div className="mx-auto max-w-8xl px-6 lg:px-8 border-t border-black mb-20">
        <div className="mx-auto lg:mx-0 lg:max-w-none">
          <dl className="mx-auto mt-16 max-w-3xl grid-cols-1 gap-8 text-base leading-7 text-black lg:mx-0 lg:max-w-none">
            {contact.map((value) => (
              <div
                key={value.name}
                className="relative flex justify-center text-center"
              >
                <p>
                  {value.text}{" "}
                  <span className="hover:underline hover:underline-offset-8">
                    <Link
                      className="inline"
                      href={`mailto:"${value.email}?subject=${value.subject}`}
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
