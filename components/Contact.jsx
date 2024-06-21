import Link from "next/link";
const contact = [
  {
    name: "artwork",
    text: "Artwork & shop inquires: ",
    subtext: " info@graham-collective.com",
    email: "info@graham-collective.com",
    subject: "TGR Artwork or Shop Inquiry",
  },
  {
    name: "artist representation",
    text: "Artist representation: ",
    subtext: " lindsey@graham-collective.com",
    email: "lindsey@graham-collective.com",
    subject: "Artist representation by Lindsey Goldberg Design",
  },
  {
    name: "photography",
    text: "Shoots & events: ",
    subtext: " tgr@grahamresidence.com",
    email: "tgr@grahamresidence.com",
    subject: "Photography Inquiry for TGR",
  },
];
export default function Contact() {
  return (
    <main className="relative isolate" id="contact-us">
      <div className="mx-auto max-w-8xl px-6 lg:px-8 border-t border-black mb-20">
        <div className="mx-auto lg:mx-0 lg:max-w-none">
          <dl className="mx-auto mt-16 max-w-3xl grid-cols-1 gap-8 text-lg leading-7 text-black lg:mx-0 lg:max-w-none">
            {contact.map((value) => (
              <div
                key={value.name}
                className="relative flex justify-center text-center flex-col sm:flex-row"
              >
                <p>{value.text} </p>

                <Link
                  href={`mailto:${value.email}?subject=${value.subject}`}
                >
                  <p className="hover:underline hover:underline-offset-8">
                   {value.subtext}
                  </p>
                </Link>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </main>
  );
}
