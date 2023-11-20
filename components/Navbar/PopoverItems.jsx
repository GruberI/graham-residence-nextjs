"use client";
import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";

const navigation = {
  categories: [
    {
      name: "Shop",
      art: [
        { name: "Kyle Steed", href: "/art/kyle-steed" },
        { name: "Thai Mainhard", href: "/art/thai-mainhard" },
        { name: "Yoni Goldberg", href: "/art/yoni-goldberg" },
        { name: "View All", href: "/art" },
      ],
      home: [
        { name: "View All", href: "/home" },
        // { name: 'Kitchen', href: '/kitchen' },
        // { name: 'Bedroom', href: '/bedroom-furniture' },
      ],
      categories: [
        { name: "Sale", href: "/categories/sale" },
        { name: "View All", href: "/" },
        // { name: "New Arrivals", href: "/categories/new-arrivals" },
      ],
    },
  ],
  other: [
    { name: "Exhibition", href: "/exhibition" },
    // {
    //   name: "Property",
    //   href: "https://www.grahamresidence.com/",
    //   id: "property",
    // },
    { name: "Contact", id: "contact-us" },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const handleClickScroll = (id) => {
  const element = document.getElementById(id);
  if (element) {
    // Will scroll smoothly to the top of the next section
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function PopoverItems({ color, pathname }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Popover.Group className="absolute inset-x-0 bottom-0 sm:static sm:flex-1 sm:self-stretch z-40 max-sm:w-full">
      <div className="flex h-14 space-x-8 overflow-x-auto border-t px-8 sm:px-2 pb-px sm:h-full sm:justify-center sm:overflow-visible sm:border-t-0 sm:pb-0 z-50">
        {navigation.categories.map((category, categoryIdx) => (
          <Popover key={categoryIdx} className="flex">
            {({ open }) => (
              <>
                <div className="relative flex">
                  <Popover.Button
                    className={classNames(
                      open ? "black" : "hover:text-neutral-300",
                      `relative z-10 -mb-px flex items-center border-b-1 pt-px lg:text-sm md:text-xs sm:text-xs duration-300 ease-out outline-none `
                    )}
                    style={pathname == '/' ? {color: color} : {color: 'black'}}
                  >
                    <span className="hover:text-neutral-400">{category.name}</span>
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
                  <Popover.Panel className="absolute inset-x-0 top-full text-gray-500 sm:text-sm z-[2]">
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
                              <a href="/art">
                                <p
                                  id="art-heading"
                                  className="font-medium text-gray-900"
                                >
                                  ART
                                </p>
                              </a>
                              <div className="mt-4 border-t border-gray-200 pt-6 sm:grid sm:grid-cols-2 sm:gap-x-6">
                                <ul
                                  role="list"
                                  aria-labelledby="art-heading"
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
                              <a href="/home">
                                <p
                                  id="home-heading"
                                  className="font-medium text-gray-900"
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
                                      className="hover:text-gray-800"
                                    >
                                      {item.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <a href="/">
                                <p
                                  id="categories-heading"
                                  className="font-medium text-gray-900"
                                >
                                  SHOP
                                </p>
                              </a>
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

        {navigation.other.map((item) =>
          item.id === "contact-us" ? (
            <a
              key={item.name}
              onClick={() => handleClickScroll(item.id)}
              className={`flex items-center lg:text-sm md:text-xs sm:text-xs scroll-smooth cursor-pointer`}
              style={pathname == '/' ? {color: color} : {color: 'black'}}
            >
              <span className="hover:text-neutral-400">{item.name}</span>
            </a>
          ) : (
            <a
              key={item.name}
              href={item.href}
              className={`flex items-center lg:text-sm md:text-xs sm:text-xs hover:text-neutral-300`}
              target={item.id === "property" ? "_blank" : undefined}
              style={pathname == '/' ? {color: color} : {color: 'black'}}
            >
              <span className="hover:text-neutral-400">{item.name}</span>
            </a>
          )
        )}
      </div>
    </Popover.Group>
  );
}
