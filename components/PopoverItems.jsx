"use client";

import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";

const navigation = {
  categories: [
    {
      name: "The Shop",
      art: [
        { name: "Shop All", href: "#" },
        { name: "Kyle Steed", href: "#" },
      ],
      decor: [
        { name: "Shop All", href: "#" },
        // { name: 'Jewelry', href: '#' },
        // { name: 'Handbags', href: '#' },
        // { name: 'Socks', href: '#' },
        // { name: 'Hats', href: '#' },
        // { name: 'Browse All', href: '#' },
      ],
      categories: [
        { name: "New Arrivals", href: "#" },
        { name: "Sale", href: "#" },
      ],
    },
  ],
  other: [
    { name: "The Property", href: "https://www.grahamresidence.com/" },
    { name: "The Exhibit", href: "/exhibition" },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function PopoverItems() {
  return (
    <Popover.Group className="absolute inset-x-0 bottom-0 sm:static sm:flex-1 sm:self-stretch ">
      <div className="flex h-14 space-x-8 overflow-x-auto border-t px-4 pb-px sm:h-full sm:justify-center sm:overflow-visible sm:border-t-0 sm:pb-0 hover:text-slate-60">
        {navigation.categories.map((category, categoryIdx) => (
          <Popover key={categoryIdx} className="flex">
            {({ open }) => (
              <>
                <div className="relative flex">
                  <Popover.Button
                    className={classNames(
                      open ? "" : "hover:text-gray-800",
                      "relative z-10 -mb-px flex items-center border-b-1 pt-px text-sm font-medium duration-200 ease-out"
                    )}
                  >
                    {category.name}
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
                  <Popover.Panel className="absolute inset-x-0 top-full text-gray-500 sm:text-sm">
                    {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                    <div
                      className="absolute inset-0 top-1/2 bg-white shadow"
                      aria-hidden="true"
                    />

                    <div className="relative bg-white">
                      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-3 items-start gap-x-6 gap-y-10 pb-12 pt-10 md:grid-cols-1 lg:gap-x-8">
                          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:gap-x-8">
                            <div>
                              <p
                                id="clothing-heading"
                                className="font-medium text-gray-900"
                              >
                                ART
                              </p>
                              <div className="mt-4 border-t border-gray-200 pt-6 sm:grid sm:grid-cols-2 sm:gap-x-6">
                                <ul
                                  role="list"
                                  aria-labelledby="clothing-heading"
                                  className="space-y-6 sm:space-y-4"
                                >
                                  {category.art.map((item) => (
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
                              <p
                                id="accessories-heading"
                                className="font-medium text-gray-900"
                              >
                                DECOR
                              </p>
                              <ul
                                role="list"
                                aria-labelledby="accessories-heading"
                                className="mt-4 space-y-6 border-t border-gray-200 pt-6 sm:space-y-4"
                              >
                                {category.decor.map((item) => (
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
                            <div>
                              <p
                                id="categories-heading"
                                className="font-medium text-gray-900"
                              >
                                CATEGORIES
                              </p>
                              <ul
                                role="list"
                                aria-labelledby="categories-heading"
                                className="mt-4 space-y-6 border-t border-gray-200 pt-6 sm:space-y-4"
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
                        </div>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        ))}

        {navigation.other.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
          >
            {item.name}
          </a>
        ))}
      </div>
    </Popover.Group>
  );
}
