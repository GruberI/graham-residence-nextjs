"use client";
import { Fragment, useRef } from "react";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";

const navigation = {
  categories: [
    {
      name: "The Collection",
      categories: [
        { name: "Kyle Steed", href: "/art/kyle-steed" },
        { name: "Thai Mainhard", href: "/art/thai-mainhard" },
        { name: "View All", href: "/gallery" },
      ],
      art: [
        { name: "Paintings", href: "/art/paintings" },
        { name: "Photography", href: "/art/yoni-goldberg" },
        { name: "View All", href: "/art" },
      ],
      home: [
        { name: "Atelier Saucier", href: "/home/atelier-saucier" },
        { name: "Sophie Lou Jacobsen", href: "/home/sophie-lou-jacobsen" },
        { name: "Loll Designs", href: "/home/loll-designs" },
        { name: "View All", href: "/home" },
      ],
      shop: [],
    },
  ],
  first: [
    {
      name: "The Property",
      href: "/",
      id: "property",
    },
  ],
  second: [
    { name: "About", href: "/about" },
    { name: "Contact", id: "contact-us" },
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
      <div className="flex h-14 space-x-4 sm:space-x-2 md:space-x-12 overflow-x-auto border-t md:border-none pb-px sm:h-full justify-center sm:overflow-visible sm:ml-10 md:ml-20 lg:ml-14">
        {navigation.first.map((item) =>
          item.id === "contact-us" ? (
            <a
              key={item.name}
              onClick={() => handleClickScroll(item.id)}
              className={`flex items-center text-xs md:text-lg scroll-smooth cursor-pointer`}
              style={pathname == "/" ? { color: color } : { color: "black" }}
            >
              <span className="hover:text-neutral-300 hover:underline hover:underline-offset-8">
                {item.name}
              </span>
            </a>
          ) : (
            <a
              key={item.name}
              href={item.href}
              className={`flex items-center text-xs md:text-lg hover:text-neutral-300 font-[400]`}
              // target={item.id === "property" ? "_blank" : undefined}
              style={pathname == "/" ? { color: color } : { color: "black" }}
            >
              <span className="hover:text-neutral-300 hover:underline hover:underline-offset-8">
                {item.name}
              </span>
            </a>
          )
        )}

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
                      `relative z-10 flex items-center border-b-1 pt-px text-xs md:text-lg duration-300 ease-out outline-none`
                    )}
                    style={
                      pathname == "/" ? { color: color } : { color: "black" }
                    }
                  >
                    <p
                      // href="/shop"
                      className="hover:text-neutral-300 hover:underline hover:underline-offset-8 "
                    >
                      {category.name}
                    </p>
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
                    className="absolute inset-x-0 top-full text-gray-500 sm:text-sm z-[2] w-7/12 m-auto border"
                    onMouseLeave={() => handleLeave(open)}
                  >
                    {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                    <div
                      className="absolute inset-0 top-1/2 bg-white shadow"
                      aria-hidden="true"
                    />

                    <div className="relative bg-white">
                      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 sm::grid-cols-1 md:gird-cols-3 items-center gap-x-6 gap-y-10 pb-12 pt-10">
                          <div className="grid grid-cols-1 gap-x-2 sm:gap-y-8 lg:grid-cols-3">
                            <div>
                              <a href="/gallery">
                                <p
                                  id="categories-heading"
                                  className="font-medium text-gray-900 hover:text-slate-400"
                                >
                                  EXHIBITIONS
                                </p>
                              </a>
                              <div className="mt-4 border-t border-gray-200 pt-6 sm:grid sm:grid-cols-2 sm:gap-x-6">
                                <ul
                                  role="list"
                                  aria-labelledby="categories-heading"
                                  className="space-y-6 sm:space-y-4"
                                >
                                  {category.categories.map((item) => (
                                    <li key={item.name} className="flex">
                                      <a
                                        href={item.href}
                                        className="hover:text-gray-800"
                                      >
                                        {item.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            <div>
                              <a href="/art">
                                <p
                                  id="art-heading"
                                  className="font-medium text-gray-900 hover:text-slate-400 mt-4 sm:mt-0"
                                >
                                  ART
                                </p>
                              </a>
                              <div className="mt-4 border-t border-gray-200 pt-6 sm:grid sm:grid-cols-2 sm:gap-x-6">
                                <ul
                                  role="list"
                                  aria-labelledby="art-heading"
                                  className="space-y-6 sm:space-y-4 pb-2 sm:pb-0"
                                >
                                  {category.art.map((item) => (
                                    <li key={item.name} className="flex">
                                      <a
                                        href={item.href}
                                        className="hover:text-gray-800 lg:tracking-widest leading-7 text-sm lg:text-base"
                                      >
                                        {item.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            <div>
                              <a href="/home">
                                <p
                                  id="home-heading"
                                  className="font-medium text-gray-900 hover:text-slate-400 mt-4 sm:mt-0"
                                >
                                  HOME
                                </p>
                              </a>
                              <ul
                                role="list"
                                aria-labelledby="home-heading"
                                className="mt-4 space-y-6 border-t border-gray-200 pt-6 sm:space-y-4"
                              >
                                {category.home.map((item) => (
                                  <li key={item.name} className="flex">
                                    <a
                                      href={item.href}
                                      className="hover:text-gray-800 tracking-widest leading-7 text-sm lg:text-base"
                                    >
                                      {item.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <a href="/shop">
                                <p
                                  id="categories-heading"
                                  className="font-medium text-gray-900 hover:text-slate-400 absolute right-10"
                                >
                                  SHOP ALL
                                </p>
                              </a>
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
              className={`flex items-center text-xs md:text-lg scroll-smooth cursor-pointer`}
              style={pathname == "/" ? { color: color } : { color: "black" }}
            >
              <span className="hover:text-neutral-300 hover:underline hover:underline-offset-8">
                {item.name}
              </span>
            </a>
          ) : (
            <a
              key={item.name}
              href={item.href}
              className={`flex items-center text-xs md:text-lg hover:text-neutral-300 font-[400]`}
              target={item.id === "property" ? "_blank" : undefined}
              style={pathname == "/" ? { color: color } : { color: "black" }}
            >
              <span className="hover:text-neutral-300 hover:underline hover:underline-offset-8">
                {item.name}
              </span>
            </a>
          )
        )}
      </div>
    </Popover.Group>
  );
}
