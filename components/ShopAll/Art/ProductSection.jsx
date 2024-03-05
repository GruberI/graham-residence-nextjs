"use client";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import ProductGridThree from "../../Product/ProductGridThree";
import { Suspense } from "react";
import Banner from "../Banner";
import About from "./About";

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];
// const subCategories = [
//   { name: "Totes", href: "#" },
//   { name: "Backpacks", href: "#" },
//   { name: "Travel Bags", href: "#" },
//   { name: "Hip Bags", href: "#" },
//   { name: "Laptop Sleeves", href: "#" },
// ];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductSection({ products, productHandle }) {
  const firstSixProducts = products.slice(0, 6);
  const remainingProducts = products.slice(6, products.length + 1);
  return (
    <div className="bg-white sm:px-0 px-2">
      <main className="mx-auto max-w-7xl">
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-16">
          <h1 className="text2xl font-light tracking-widest text-gray-900">
            {" "}
            {`${products.length} ARTWORKS`}
          </h1>
          <div className="flex items-center hidden">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900 disable">
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
          </div>
        </div>

        <section aria-labelledby="products-heading" className="pb-16 pt-10">
          <Suspense>
            <ProductGridThree products={firstSixProducts} />
          </Suspense>
          <div className="my-10 pb-10">
          <Banner title={productHandle} type={'art'}/>
          </div>
          <Suspense>
            <ProductGridThree products={remainingProducts} />
          </Suspense>
        </section>
        <About artistName={productHandle} />
      </main>
    </div>
  );
}
