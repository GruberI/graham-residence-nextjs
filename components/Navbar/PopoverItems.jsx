"use client";
import { Fragment, useRef } from "react";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";

const navigation = {
  categories: [
    {
      name: "The Collection",
      href: "/shop",
      categories: [
        { name: "Kyle Steed", href: "/art/kyle-steed" },
        { name: "Thai Mainhard", href: "/art/thai-mainhard" },
        { name: "All Exhibitions", href: "/gallery#exhibitions" },
      ],
      art: [
        { name: "Paintings", href: "/art/paintings" },
        { name: "Photography", href: "/art/photography" },
        { name: "View All", href: "/art" },
      ],
      home: [
        { name: "Atelier Saucier", href: "/home/atelier-saucier" },
        { name: "Sophie Lou Jacobsen", href: "/home/sophie-lou-jacobsen" },
        // { name: "Loll Designs", href: "/home/loll-designs" },
        { name: "View All", href: "/home" },
      ],
      shop: [],
    },
  ],
  first: [
    {
      name: "Graham Gallery",
      href: "/gallery",
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

  const handleEnter = (isOpen) => {
    clearTimeout(timeOutRef.current);
    !isOpen && triggerRef.current?.click();
  };

  const handleLeave = (isOpen) => {
    timeOutRef.current = setTimeout(() => {
      isOpen && triggerRef.current?.click();
    }, timeoutDuration);
  };

  return (
    <Popover.Group className="absolute inset-x-0 bottom-0 sm:static flex-2 sm:self-stretch z-40 max-sm:w-full">
      <div className="flex h-14 space-x-6 md:space-x-12 overflow-x-auto border-t md:border-none pb-px sm:h-full justify-center sm:overflow-visible sm:ml-10 md:ml-20 lg:ml-14">
        {navigation.first.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={`flex items-center text-xs md:text-base xl:text-lg scroll-smooth cursor-pointer`}
            style={pathname == "/" ? { color: color } : { color: "black" }}
          >
            <span className="hover:text-neutral-300 hover:underline hover:underline-offset-8">
              {item.name}
            </span>
          </a>
        ))}

        {navigation.categories.map((category, categoryIdx) => (
          <Popover key={categoryIdx} className="flex">
            {({ open }) => (
              <>
                <div
                  className="relative flex"
                  onMouseEnter={() => handleEnter(open)}
                >
                  <Popover.Button
                    ref={triggerRef}
                    className={classNames(
                      open ? "black" : "hover:text-neutral-300",
                      `relative z-10 flex items-center border-b-1 pt-px text-xs md:text-base xl:text-lg duration-300 ease-out outline-none`
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
                    onMouseLeave={() => handleLeave(open)}
                  >
                    {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                    <div
                      className="absolute inset-0 top-1/2 bg-white shadow"
                      aria-hidden="true"
                    />

                    <div className="relative bg-white">
                      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 items-center gap-x-2 gap-y-1 sm:gap-y-10 pb-12 pt-10">
                          <div className="grid gap-x-2 gap-y-2 sm:gap-y-8 lg:grid-cols-2">
                            {/* <div>
                              <a href="/gallery">
                                <p
                                  id="categories-heading"
                                  className="font-medium text-gray-900 hover:text-slate-400 text-sm xl:text-lg"
                                >
                                  GRAHAM GALLERY
                                </p>
                              </a>
                              <div className="pt-4 border-t border-gray-200 sm:grid sm:grid-cols-1 sm:gap-x-6">
                                <ul
                                  role="list"
                                  aria-labelledby="categories-heading"
                                  className="space-y-2 sm:space-y-4"
                                >
                                  {category.categories.map((item) => (
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
                            </div> */}
                            <div>
                              <a href="/art">
                                <p
                                  id="art-heading"
                                  className="font-medium text-gray-900 hover:text-slate-400 mt-2 sm:mt-0 text-sm xl:text-lg"
                                >
                                  ART
                                </p>
                              </a>
                              <div className="pt-4 border-t border-gray-200 sm:grid sm:grid-cols-2 sm:gap-x-6">
                                <ul
                                  role="list"
                                  aria-labelledby="art-heading"
                                  className="space-y-1 sm:space-y-4"
                                >
                                  {category.art.map((item) => (
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
                              <a href="/shop">
                                <p
                                  id="home-heading"
                                  className="font-medium text-gray-900 hover:text-slate-400 mt-2 sm:mt-0 text-sm xl:text-lg"
                                >
                                  GOODS
                                </p>
                              </a>
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
                            <div>
                              <Link href="/shop">
                                <p
                                  id="categories-heading"
                                  className="font-medium text-gray-900 hover:text-slate-400 absolute sm:right-10 text-sm xl:text-lg pt-1"
                                >
                                  SHOP ALL
                                </p>
                              </Link>
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
              className={`flex items-center text-xs md:text-base xl:text-lg hover:text-neutral-300 font-[400]`}
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
