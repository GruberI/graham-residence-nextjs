"use client";

const navigation = {
  categories: [
    {
      name: "ARTWORK",
      id: "artwork",
    },
    {
      name: "FEATURED",
      id: "featured",
    },
    {
      name: "HOME",
      id: "homegoods",
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
      className="w-screen sm:px-0 lg:px-0 sticky top-0 z-[1] animate-fade"
    >
      <div className="bg-white">
        <div className="mx-auto text-center">
          <div className="inset-x-0 bottom-0 sm:static sm:flex-1 sm:self-stretch">
            <div className="flex h-14 space-x-8 overflow-x-auto px-4 pb-px sm:h-full sm:justify-center sm:overflow-visible border-t border-b border-neutral-100 sm:border-t-2 sm:pt-4 sm:pb-4">
              {navigation.categories.map((item) => (
                <a
                  key={item.name}
                  onClick={() => handleClickScroll(item.id)}
                  className="flex items-center text-sm font-sm text-black hover:text-neutral-600 scroll-smooth cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
