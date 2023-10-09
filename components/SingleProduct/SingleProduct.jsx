import { Fragment, Tab } from "@headlessui/react";
import styles from "./SingleProduct.module.css";
import Featured from "../Shop/Featured";
// import { AddToCart } from "../Cart/add-to-cart";
// import { VariantSelector } from './variant-selector';

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Product({ product }) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-0 py-16 sm:px-0 sm:py-24 lg:max-w-6xl lg:px-0">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-20">
          {/* Image gallery */}
          <Tab.Group as="div" className="flex flex-col-reverse">
            {/* Image selector */}
            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
              <Tab.List className="grid grid-cols-4 gap-8">
                {product.productPage.images.map((image) => (
                  <Tab
                    key={image.id}
                    className="relative flex h-32 cursor-pointer items-center justify-center bg-white text-sm font-medium uppercase text-gray-400 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                  >
                    {({ selected }) => (
                      <>
                        <span className="sr-only">{image.name}</span>
                        <span className="absolute inset-0 overflow-hidden">
                          <img
                            src={image.src}
                            alt=""
                            className={`h-full w-full object-cover object-center ${styles.fade_in_image}`}
                          />
                        </span>
                        <span
                          className={classNames(
                            selected ? "ring-slate-400" : "ring-transparent",
                            "pointer-events-none absolute inset-0 ring-2 ring-offset-2"
                          )}
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </Tab>
                ))}
              </Tab.List>
            </div>

            <Tab.Panels className="aspect-h-1 aspect-w-1 w-full">
              {product.productPage.images.map((image) => (
                <Tab.Panel key={image.id}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover object-center "
                  />
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>

          {/* Product Info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <div className="flex place-content-between">
              <h1 className="text-3xl font-light tracking-tight text-gray-600 truncate">
                {product.name}
              </h1>
              <p className="text-3xl tracking-tight text-gray-600">
                {product.price}
              </p>
            </div>
            <p className="mt-4 text-neutral-500 border-b pb-6">
              {product.description}
            </p>
            

            <form className="mt-6">
              <div className="mt-20 flex justify-center">
                <button
                  type="submit"
                  className="flex max-w-md items-center justify-center border-2 border-neutral-200 border-black px-8 py-3 text-base font-light  text-gray-500 hover:bg-neutral-200 hover:border-neutral-200 focus:outline-none focus:ring-2 focus:ring-stone-600 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                >
                  ADD TO CART
                </button>
              </div>
            </form>

            <section aria-labelledby="details-heading" className="mt-20">
              <div className="divide-y divide-gray-200">
                {/* Info Tabs */}
                <Tab.Group as="div" className="mt-4">
                  <div className="-mx-4 flex overflow-x-auto sm:mx-0">
                    <div className="flex-auto border-b border-gray-200 px-4 sm:px-0">
                      <Tab.List className="-mb-px flex space-x-10">
                        {product.productPage.details.map((tab) => (
                          <Tab
                            key={tab.name}
                            className={({ selected }) =>
                              classNames(
                                selected
                                  ? "text-slate-800"
                                  : "text-gray-500 hover:text-gray-700",
                                "whitespace-nowrap py-6 text-sm font-medium"
                              )
                            }
                          >
                            {tab.name}
                          </Tab>
                        ))}
                      </Tab.List>
                    </div>
                  </div>

                  <Tab.Panels as={Fragment}>
                    {product.productPage.details.map((tab) => (
                      <Tab.Panel
                        key={tab.name}
                        className="space-y-16 pt-10 lg:pt-12"
                      >
                        <p className="mt-2 text-md text-gray-900 leading-7">
                          {tab.items}
                        </p>
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Featured />
    </div>
  );
}
