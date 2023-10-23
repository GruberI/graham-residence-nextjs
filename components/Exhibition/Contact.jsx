
const contact = [
  {
    name: "artwork",
    text: "Artwork & shop inquires: tgr@grahamresidence.com",
    href: "#",
  },
  {
    name: "airbnb",
    text: "Stay with us: Airbnb",
    href: "#",
  },
  {
    name: "artist representation",
    text: "Artist representation: lindsey@lindseygoldbergdesigns.com",
    href: "#",
  },
  {
    name: "photography",
    text: "Shoots & Events: Peerspace",
    href: "#",
  },
];
export default function Contact() {
  return (
    <main className="relative isolate">
      <div className="mx-auto mt-20 max-w-8xl px-6 lg:px-8 border-t border-black">
        <div className="mx-auto lg:mx-0 lg:max-w-none">
          <dl className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-8 text-base leading-7 text-black sm:grid-cols-2 lg:mx-0 lg:max-w-none">
            {contact.map((value) => (
              <div key={value.name} className="relative flex justify-center">
                <dd className="inline">{value.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </main>
  );
}
