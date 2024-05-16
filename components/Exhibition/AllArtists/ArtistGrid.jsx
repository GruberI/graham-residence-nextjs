"use client";
import { useState } from "react";
import Link from "next/link.js";
// import { Fragment } from "react";
// import { Menu, Transition } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function ArtistGrid({ artists }) {
  const [hover, setHover] = useState(false);
  return (
    <div className="mx-auto max-w-7xl py-4">
      <div className="flex items-baseline justify-between border-b border-gray-200 pb-6">
        <h1 className="text-lg font-light tracking-wide text-gray-900 ml-4 sm:ml-0">
          All Artists
        </h1>

        {/* <div className="flex items-center hidden">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  Sort
                  <ChevronDownIcon
                    className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <Menu.Item key={option.name}>
                        {({ active }) => (
                          <a
                            href={option.href}
                            className={classNames(
                              option.current
                                ? "font-medium text-gray-900"
                                : "text-gray-500",
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            {option.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div> */}
      </div>
      <div className="grid gap-x-10 gap-y-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 pt-10 mx-6">
        {artists.map((artist, i) => (
          <Link key={i} href={artist.href}>
            <div
              className="aspect-square overflow-hidden bg-black-200 relative"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <img
                className="absolute inset-0 lg:h-full lg:w-full h-full w-full duration-100 object-cover object-center hover:opacity-75 hover:scale-105 transition"
                src={artist.src}
                alt={artist.altText}
              />
            </div>
            <div>
              <h3 className="truncate font-light text-base text-black my-2">
                {artist.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
