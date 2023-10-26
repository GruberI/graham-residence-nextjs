import { Fragment, Tab } from "@headlessui/react";
import Featured from "../Shop/Featured";
// import { AddToCart } from "../Cart/add-to-cart";
// import { VariantSelector } from './variant-selector';

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SingleProduct({ product }) {
  const amount = product.priceRange.maxVariantPrice.amount;
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-0 py-16 sm:px-0 sm:py-24 lg:max-w-6xl lg:px-0">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-20">
          {/* Image gallery */}
          <Tab.Group as="div" className="flex flex-col-reverse">
            {/* Image selector */}
            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
              <Tab.List className="grid grid-cols-4 gap-8">
                {product.images.map((image, i) => (
                  <Tab
                    key={i}
                    className="relative flex h-32 cursor-pointer items-center justify-center bg-white text-sm font-medium uppercase text-black-400 hover:bg-black-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                  >
                    {({ selected }) => (
                      <>
                        <span className="sr-only">{product.title}</span>
                        <span className="absolute inset-0 overflow-hidden">
                          <img
                            src={image.url}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </span>
                        <span
                          className={classNames(
                            selected ? "ring-black-400" : "ring-transparent",
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
              {product.images.map((image, i) => (
                <Tab.Panel key={i}>
                  <img
                    src={image.url}
                    alt={image.altText}
                    className="h-full w-full object-cover object-center "
                  />
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>

          {/* Product Info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <div className="flex place-content-between">
              <h1 className="text-3xl font-light tracking-tight text-black-600 truncate">
                {product.name}
              </h1>
              <p className="text-3xl tracking-tight text-black-600">
                {`${new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(parseFloat(amount))}`}
              </p>
            </div>
            <p className="mt-4 text-neutral-500 border-b pb-6">
              {product.description}
            </p>

            <form className="mt-6">
              <div className="mt-20 flex justify-center">
                <button
                  type="submit"
                  className="flex max-w-md items-center justify-center border-2 border-neutral-200 border-black px-8 py-3 text-base font-light  text-black-500 hover:bg-neutral-200 hover:border-neutral-200 focus:outline-none focus:ring-2 focus:ring-stone-600 focus:ring-offset-2 focus:ring-offset-black-50 sm:w-full"
                >
                  ADD TO CART
                </button>
              </div>
            </form>

            <section aria-labelledby="details-heading" className="mt-20">
              <div className="divide-y divide-black-200">
                {/* Info Tabs */}
                <Tab.Group as="div" className="mt-4">
                  <div className="-mx-4 flex overflow-x-auto sm:mx-0">
                    <div className="flex-auto border-b border-black-200 px-4 sm:px-0">
                      <Tab.List className="-mb-px flex space-x-10">
                        {product.productPage.details.map((tab) => (
                          <Tab
                            key={tab.name}
                            className={({ selected }) =>
                              classNames(
                                selected
                                  ? "text-black-800"
                                  : "text-black-500 hover:text-black-700",
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
                    {product.seo.map((tab) => (
                      <Tab.Panel
                        key={tab.title}
                        className="space-y-16 pt-10 lg:pt-12"
                      >
                        <p className="mt-2 text-md text-black-900 leading-7">
                          {tab.description}
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
