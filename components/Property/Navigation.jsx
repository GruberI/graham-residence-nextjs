"use client";

const navigation = {
  categories: [
    {
      name: "ABOUT",
      id: "property-about",
    },
    {
      name: "GALLERY",
      id: "property-gallery",
    },
    {
      name: "BOOK",
      id: "property-book",
    },
  ],
};

const handleClickScroll = (id) => {
  const element = document.getElementById(id);
  if (element) {
    // Will scroll smoothly to the top of the next section
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Navigation() {
  return (
    <div
      aria-label="Top"
      className="w-screen sm:px-0 lg:px-0 sticky top-0 z-[1] animate-fade mb-4"
    >
      <div className="mx-auto text-center">
        <div className="inset-x-0 bottom-0 sm:static sm:flex-1 sm:self-stretch">
          <div className="flex h-14 space-x-10 overflow-x-auto px-4 pb-px sm:h-full sm:justify-center sm:overflow-visible  sm:pt-4 sm:pb-4">
            {navigation.categories.map((item) => (
              <a
                key={item.name}
                onClick={() => handleClickScroll(item.id)}
                className="flex items-center text-sm font-sm text-black hover:text-neutral-600 scroll-smooth cursor-pointer hover:underline hover:underline-offset-8"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
