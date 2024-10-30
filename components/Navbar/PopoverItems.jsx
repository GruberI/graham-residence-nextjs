"use client";
import { usePathname } from "next/navigation";
import { Fragment, useState, useEffect } from "react";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";

const navigation = {
  categories: [
    {
      name: "Collection",
      href: "/exhibitions",
      exhibitions: [
        { name: "Current", href: "/exhibitions" },
        { name: "Upcoming", href: "/exhibitions#upcoming-exhibitions" },
        { name: "Past", href: "/exhibitions#past-exhibitions" },
        { name: "View All", href: "/exhibitions" },
      ],
      art: [
        { name: "Paintings", href: "/art/paintings" },
        { name: "Photography", href: "/art/photography" },
        { name: "Sculpture", href: "/art/sculpture" },
        { name: "Custom Furniture", href: "/art/furniture"},
        { name: "Shop All", href: "/art" },
      ],
      shop: [],
    },
  ],
  first: [
    {
      name: "Residence",
      href: "/residence",
    },
  ],
  second: [{ name: "About", href: "/about" }],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const handleClickScroll = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function PopoverItems({ color, pathname }) {
  const viewingPathName = usePathname();
  const [activePopover, setActivePopover] = useState(null);

  const handleMouseEnter = (popover) => {
    // disable interaction on mobile.
    if (window && window.innerWidth > 768) {
      setActivePopover(popover);
    }
  };

  const handleMouseLeave = () => {
    setActivePopover(null);
  };

  useEffect(() => {
    if (activePopover !== null) setActivePopover(null);
  }, [viewingPathName]);

  return (
    <Popover.Group className="absolute inset-x-0 bottom-0 sm:static flex-2 sm:self-stretch z-40 max-sm:w-full hidden md:block">
      <div className="flex h-14 space-x-6 md:space-x-16 overflow-x-auto border-t md:border-none pb-px sm:h-full justify-center sm:overflow-visible sm:ml-10 md:ml-20 lg:ml-14">
        
        {navigation.categories.map((category, categoryIdx) => (
          <Popover
            key={`${categoryIdx}-categories`}
            className="flex"
            onMouseEnter={() =>
              handleMouseEnter(categoryIdx + navigation.categories.length)
            }
            onMouseLeave={handleMouseLeave}
          >
            {({ open }) => (
              <>
                <div className="flex relative">
                  <Popover.Button
                    className={classNames(
                      open ? "black" : "hover:text-neutral-300",
                      `relative z-10 flex items-center border-b-1 pt-px text-base xl:text-lg duration-300 ease-out outline-none`
                    )}
                    style={
                      pathname == "/" || pathname == "/residence" ? { color: color } : { color: "black" }
                    }
                  >
                    <Link
                      href={category.href}
                      className="hover:text-neutral-300 hover:underline hover:underline-offset-8"
                    >
                      {category.name}
                    </Link>
                  </Popover.Button>
                </div>

                <Transition
                  as={Fragment}
                  show={
                    activePopover === categoryIdx + navigation.categories.length
                  }
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Popover.Panel className="absolute inset-x-0 top-full text-gray-500 sm:text-sm z-[2] w-3/12 m-auto border">
                    <div
                      className="absolute inset-0 top-1/2 bg-white shadow"
                      aria-hidden="true"
                    />

                    <div className="relative bg-white">
                      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 items-center gap-x-2 gap-y-1 sm:gap-y-10 pb-12 pt-10">
                          <div className="grid gap-x-2 gap-y-2 sm:gap-y-8 lg:grid-cols-2">
                            <div>
                              <p
                                id="exhibitions-heading"
                                className="font-medium text-gray-900 mt-2 sm:mt-0 text-sm xl:text-lg"
                              >
                                Exhibitions
                              </p>
                              <div className="w-[85%] pt-4 border-t border-gray-200 sm:grid sm:grid-cols-1 sm:gap-x-6">
                                <ul
                                  role="list"
                                  aria-labelledby="exhibitions-heading"
                                  className="space-y-1 sm:space-y-4"
                                >
                                  {category.exhibitions.map((item) => (
                                    <li key={item.name} className="flex">
                                      <Link
                                        href={item.href}
                                        className="hover:text-gray-800 lg:tracking-widest leading-7 text-sm lg:text-base"
                                      >
                                        {item.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            <div>
                              <p
                                id="home-heading"
                                className="font-medium text-gray-900 mt-2 sm:mt-0 text-sm xl:text-lg"
                              >
                                Artwork
                              </p>
                              <ul
                                role="list"
                                aria-labelledby="home-heading"
                                className="w-[85%] pt-4 space-y-1 border-t border-gray-200 sm:space-y-4"
                              >
                                {category.art.map((item) => (
                                  <li key={item.name} className="flex">
                                    <Link
                                      href={item.href}
                                      className="hover:text-gray-800 tracking-widest leading-7 text-sm lg:text-base"
                                    >
                                      {item.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        ))}

        {navigation.first.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={`flex items-center text-base xl:text-lg scroll-smooth cursor-pointer`}
            style={pathname == "/" || pathname == "/residence" ? { color: color } : { color: "black" }}
          >
            <span className="hover:text-neutral-300 hover:underline hover:underline-offset-8">
              {item.name}
            </span>
          </a>
        ))}

        {navigation.second.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => handleClickScroll(item.id)}
            className={`flex items-center text-base xl:text-lg scroll-smooth cursor-pointer`}
            style={pathname == "/" || pathname == "/residence" ? { color: color } : { color: "black" }}
          >
            <span className="hover:text-neutral-300 hover:underline hover:underline-offset-8">
              {item.name}
            </span>
          </a>
        ))}
      </div>
    </Popover.Group>
  );
}
