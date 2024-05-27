"use client";
import { Fragment, useRef } from "react";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";

const navigation = {
  first: [
    {
      name: "Residence",
      href: "/residence",
    },
  ],
  gallery: [
    {
      name: "Gallery",
      href: "/gallery",
      exhibitions: [
        { name: "On View", href: "/exhibitions#current-exhibit" },
        { name: "Upcoming", href: "/exhibitions#upcoming-exhibitions" },
        { name: "Past", href: "/exhibitions#past-exhibitions" },
        { name: "View All", href: "/exhibitions" },
      ],
      artists: [
        { name: "David Matthew King", href: "/convergence" },
        { name: "Marcel Rozek", href: "/convergence" },
        { name: "Kyle Steed", href: "/art/kyle-steed" },
        { name: "Thai Mainhard", href: "/art/thai-mainhard" },
        { name: "Nicole Taylor Dewitt", href: "/art/nicole-taylor-dewitt" },
        { name: "Yoni Goldberg", href: "/art/yoni-goldberg" },
        { name: "View All", href: "/gallery/artists" },
      ],
      contact: [
        { name: "Visit Us", href: "/gallery#visit-us" },
        // { name: "Consulting", href: "/"},
        { name: "Artist Submission", href: "/gallery/#consulting-services" },
        { name: "Advisory Services", href: "/about#art-advisory" },
        { name: "Subscribe", href: "/gallery#subscribe" },
      ],
      shop: [{ href: "/art" }],
    },
  ],
  categories: [
    {
      name: "Shop",
      href: "/shop",
      categories: [
        { name: "New Arrivals", href: "/home/new-arrivals" },
        { name: "Ethereal Prints", href: "/art/ethereal-prints" },
        { name: "Shop All", href: "/shop/all-product" },
      ],
      art: [
        { name: "Paintings", href: "/art/paintings" },
        { name: "Photography", href: "/art/photography" },
        { name: "Shop All", href: "/art" },
        { name: "By Artist", href: "/gallery/artists" },
      ],
      home: [
        { name: "Atelier Saucier", href: "/home/atelier-saucier" },
        { name: "Sophie Lou Jacobsen", href: "/home/sophie-lou-jacobsen" },
        { name: "Loll Designs", href: "/home/loll-designs" },
        { name: "Shop All", href: "/home" },
      ],
      shop: [],
    },
  ],
  second: [
    { name: "About", href: "/about" },
    // { name: "Contact", id: "contact-us" },
  ],
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
  const timeoutDuration = 500;
  const triggerRef = useRef();
  const timeOutRef = useRef();

  const triggerRefSecond = useRef();
  const timeOutRefSecond = useRef();

  const handleEnterGallery = (isOpen) => {
    clearTimeout(timeOutRef.current);
    !isOpen && triggerRef.current?.click();
  };

  const handleLeaveGallery = (isOpen) => {
    timeOutRef.current = setTimeout(() => {
      isOpen && triggerRef.current?.click();
    }, timeoutDuration);
  };

  const handleEnterShop = (isOpen) => {
    clearTimeout(timeOutRefSecond.current);
    !isOpen && triggerRefSecond.current?.click();
  };

  const handleLeaveShop = (isOpen) => {
    timeOutRefSecond.current = setTimeout(() => {
      isOpen && triggerRefSecond.current?.click();
    }, timeoutDuration);
  };

  return (
    <Popover.Group className="absolute inset-x-0 bottom-0 sm:static flex-2 sm:self-stretch z-40 max-sm:w-full">
      <div className="flex h-14 space-x-6 md:space-x-12 overflow-x-auto border-t md:border-none pb-px sm:h-full justify-center sm:overflow-visible sm:ml-10 md:ml-20 lg:ml-14">
        {navigation.first.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={`flex items-center text-base xl:text-lg scroll-smooth cursor-pointer`}
            style={pathname == "/" ? { color: color } : { color: "black" }}
          >
            <span className="hover:text-neutral-300 hover:underline hover:underline-offset-8">
              {item.name}
            </span>
          </a>
        ))}

        {navigation.gallery.map((category, galleryIdx) => (
          <Popover key={`${galleryIdx}-category`} className="flex">
            {({ open }) => (
              <>
                <div
                  className="flex relative"
                  onMouseEnter={() => handleEnterGallery(open)}
                >
                  <Popover.Button
                    ref={triggerRef}
                    className={classNames(
                      open ? "black" : "hover:text-neutral-300",
                      `relative z-10 flex items-center border-b-1 pt-px text-base xl:text-lg duration-300 ease-out outline-none`
                    )}
                    style={
                      pathname == "/" ? { color: color } : { color: "black" }
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
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Popover.Panel
                    className="absolute inset-x-0 top-full text-gray-500 sm:text-sm z-[2] w-6/12 m-auto border"
                    onMouseLeave={() => handleLeaveGallery(open)}
                  >
                    <div
                      className="absolute inset-0 top-1/2 bg-white shadow"
                      aria-hidden="true"
                    />

                    <div className="relative bg-white">
                      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 items-center gap-x-2 gap-y-1 sm:gap-y-10 pb-12 pt-10">
                          <div className="grid gap-x-2 gap-y-2 sm:gap-y-8 lg:grid-cols-3">
                            <div>
                              <a href="/exhibitions">
                                <p
                                  id="art-heading"
                                  className="font-medium text-gray-900 hover:text-neutral-300 mt-2 sm:mt-0 text-sm xl:text-lg"
                                >
                                  EXHIBITIONS
                                </p>
                              </a>
                              <div className="pt-4 border-t border-gray-200 sm:grid sm:grid-cols-1 sm:gap-x-6">
                                <ul
                                  role="list"
                                  aria-labelledby="art-heading"
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
                                className="font-medium text-gray-900 hover:text-neutral-300 mt-2 sm:mt-0 text-sm xl:text-lg"
                              >
                                ARTISTS
                              </p>
                              <ul
                                role="list"
                                aria-labelledby="home-heading"
                                className="pt-4 space-y-1 border-t border-gray-200 sm:space-y-4"
                              >
                                {category.artists.map((item) => (
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
                            <div>
                              <p
                                id="categories-heading"
                                className="font-medium text-gray-900 hover:text-neutral-300 text-sm xl:text-lg"
                              >
                                GET IN TOUCH
                              </p>
                              <div className="pt-4 border-t border-gray-200 sm:grid sm:grid-cols-1 sm:gap-x-6">
                                <ul
                                  role="list"
                                  aria-labelledby="categories-heading"
                                  className="space-y-2 sm:space-y-4"
                                >
                                  {category.contact.map((item) => (
                                    <li key={item.name} className="flex">
                                      <Link
                                        href={item.href}
                                        className="hover:text-gray-800 text-sm lg:text-base"
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
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        ))}

        {navigation.categories.map((category, categoryIdx) => (
          <Popover key={`${categoryIdx}-category`} className="flex">
            {({ open }) => (
              <>
                <div
                  className="flex"
                  onMouseEnter={() => handleEnterShop(open)}
                >
                  <Popover.Button
                    ref={triggerRefSecond}
                    className={classNames(
                      open ? "black" : "hover:text-neutral-300",
                      `relative z-10 flex items-center border-b-1 pt-px text-base xl:text-lg duration-300 ease-out outline-none`
                    )}
                    style={
                      pathname == "/" ? { color: color } : { color: "black" }
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
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Popover.Panel
                    className="absolute inset-x-0 top-full text-gray-500 sm:text-sm z-[2] w-6/12 m-auto border"
                    onMouseLeave={() => handleLeaveShop(open)}
                  >
                    <div
                      className="absolute inset-0 top-1/2 bg-white shadow"
                      aria-hidden="true"
                    />

                    <div className="relative bg-white">
                      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 items-center gap-x-2 gap-y-1 sm:gap-y-10 pb-12 pt-10">
                          <div className="grid gap-x-2 gap-y-2 sm:gap-y-8 lg:grid-cols-3">
                            <div>
                              <p
                                id="art-heading"
                                className="font-medium text-gray-900 mt-2 sm:mt-0 text-sm xl:text-lg"
                              >
                                BROWSE BY
                              </p>

                              <div className="pt-4 border-t border-gray-200 sm:grid sm:grid-cols-1 sm:gap-x-6">
                                <ul
                                  role="list"
                                  aria-labelledby="art-heading"
                                  className="space-y-1 sm:space-y-4"
                                >
                                  {category.categories.map((item) => (
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
                                className="font-medium text-gray-900 hover:text-neutral-300 mt-2 sm:mt-0 text-sm xl:text-lg"
                              >
                                ARTWORK
                              </p>
                              <ul
                                role="list"
                                aria-labelledby="home-heading"
                                className="pt-4 space-y-1 border-t border-gray-200 sm:space-y-4"
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
                            <div>
                              <p
                                id="home-heading"
                                className="font-medium text-gray-900 hover:text-neutral-300 mt-2 sm:mt-0 text-sm xl:text-lg"
                              >
                                HOME
                              </p>
                              <ul
                                role="list"
                                aria-labelledby="home-heading"
                                className="pt-4 space-y-1 border-t border-gray-200 sm:space-y-4"
                              >
                                {category.home.map((item) => (
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
                            {/* <div>
                              <Link href="/shop">
                                <p
                                  id="categories-heading"
                                  className="font-medium text-gray-900 hover:text-neutral-300 absolute sm:right-10 text-sm xl:text-lg pt-1"
                                >
                                  SHOP ALL
                                </p>
                              </Link>
                            </div> */}
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

        {navigation.second.map((item) =>
          item.id === "contact-us" ? (
            <a
              key={item.name}
              onClick={() => handleClickScroll(item.id)}
              className={`flex items-center text-sm md:text-base xl:text-lg scroll-smooth cursor-pointer`}
              style={pathname == "/" ? { color: color } : { color: "black" }}
            >
              <span className="hover:text-neutral-300 hover:underline hover:underline-offset-8">
                {item.name}
              </span>
            </a>
          ) : (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center text-base xl:text-lg hover:text-neutral-300 font-[400]`}
              target={item.id === "property" ? "_blank" : undefined}
              style={pathname == "/" ? { color: color } : { color: "black" }}
            >
              <span className="hover:text-neutral-300 hover:underline hover:underline-offset-8">
                {item.name}
              </span>
            </Link>
          )
        )}
      </div>
    </Popover.Group>
  );
}
