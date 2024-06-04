"use client";
import { useState, useEffect, Fragment } from "react";
import { Tab } from "@headlessui/react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Prose from "@/components/prose";
import { AddToCart } from "../../Cart/add-to-cart";
import { VariantSelector } from "./variant-selector";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDescription({ product }) {
  const [currentType, setCurrentType] = useState("");
  useEffect(() => {
    product.tags.includes("home-goods")
      ? setCurrentType("home")
      : setCurrentType("art");
  }, []);
  const restructuredVendor = product.vendor.toLowerCase().replaceAll(" ", "-");
  const amount = product.priceRange.minVariantPrice.amount;
  const searchParams = useSearchParams();
  const variantName = product.variants[0].selectedOptions[0].name.toLowerCase();
  const variantNameSecond =
    product.variants[0]?.selectedOptions[1]?.name.toLowerCase();
  const currentSearchParam = searchParams?.get(variantName);
  const currentSearchParamSecond = searchParams?.get(variantNameSecond);
  const selectedVariant = currentSearchParamSecond
    ? product.variants.find(
        (variant) =>
          variant?.title ===
          `${currentSearchParam} / ${currentSearchParamSecond}`
      )
    : product.variants.find((variant) =>
        variant?.selectedOptions.some(
          (item) => item.value === currentSearchParam
        )
      );
  const selectedVariantPrice =
    selectedVariant === undefined ? amount : selectedVariant.price.amount;
  const imgSrc = selectedVariant?.image.originalSrc;
  const defaultIndex =
    selectedVariant === undefined
      ? 0
      : product.images.findIndex((i) => {
          return i.url === imgSrc;
        });
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.descriptionHtml,
    image: product.featuredImage.url,
    offers: {
      "@type": "AggregateOffer",
      availability: product.availableForSale
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      priceCurrency: product.priceRange.minVariantPrice.currencyCode,
      highPrice: product.priceRange.maxVariantPrice.amount,
      lowPrice: product.priceRange.minVariantPrice.amount,
    },
    seo: {
      description: product.seo.description,
      title: product.seo.title,
    },
  };

  const photography = product.tags.includes("photography");
  const photographySelectedVariant = product.variants.find(
    (variant) => variant?.title === `16 x 12 / Black`
  );

  const tabDetails = [
    { title: "DESCRIPTION", description: `${productJsonLd.description}` },
    {
      title: "SHIPPING & HANDLING",
      description:
        product.vendor === "Sophie Lou Jacobsen"
          ? "Products will ship within 2-5 business days. Please allow 5-7 days for Standard shipping."
          : product.vendor === "Atelier Saucier"
          ? "Products will ship within 2-5 business days. Please allow 5-7 days for Standard shipping."
          : product.vendor === "Loll Designs"
          ? "Products will  ship within 3-5 business days via fedex standard. Most Loll furniture arrives flat-packed but is easy to assemble."
          : product.vendor === "West-Bourne"
          ? "Products will ship within 3-5 business days. Please allow 5-7 days for Standard shipping."
          : product.vendor === "Thai Mainhard"
          ? "Shipping, local delivery and pickup options vary per piece and will be viewable on the cart checkout page. <br><br> For questions or expedited shipping please contact us at info@graham-collective.com."
          : product.vendor === "Yoni Goldberg"
          ? "All photographic prints ship free of charge. <br> <br> Shipment date is determined by the type (unframed or framed) and the size of the artwork ordered.<br><br><strong>Unframed Prints:</strong><br>Unframed prints will be shipped in a tube for safe keeping. All unframed prints will ship within 7-10 business days from the date ordered.<br><br><strong>All Framed Artwork:</strong><br>At this time, framed artwork can only be shipped to addresses in the contiguous United States. For all framed orders, please allow 2-3 weeks for delivery.<br><br>For any shipping questions or quotes please email us at info@graham-collective.com"
          : product.vendor === "thegrahamresidence"
          ? "Products will ship within 2-5 business days. Please allow 5-7 days for Standard shipping."
          : product.vendor === "Kyle Steed"
          ? "Shipping, local delivery and pickup options vary per piece and will be viewable on the cart checkout page. <br><br> For questions or expedited shipping please contact us at info@graham-collective.com."
          : product.vendor === "Marcel Rozek"
          ? "Shipping, local delivery and pickup options vary per piece and will be viewable on the cart checkout page. <br><br> For questions or expedited shipping please contact us at info@graham-collective.com."
          : product.vendor === "David Matthew King"
          ? "Shipping, local delivery and pickup options vary per piece and will be viewable on the cart checkout page. <br><br> For questions or expedited shipping please contact us at info@graham-collective.com."
          : product.vendor === "Nicole Taylor Dewitt"
          ? "All photographic prints ship free of charge. <br> <br> Shipment date is determined by the type (unframed or framed) and the size of the artwork ordered.<br><br><strong>Unframed Prints:</strong><br>Unframed prints will be shipped in a tube for safe keeping. All unframed prints will ship within 7-10 business days from the date ordered.<br><br><strong>All Framed Artwork:</strong><br>At this time, framed artwork can only be shipped to addresses in the contiguous United States. For all framed orders, please allow 2-3 weeks for delivery.<br><br>For any shipping questions or quotes please email us at info@graham-collective.com"
          : "Shipping, local delivery and pickup options vary and will be viewable on the cart checkout page. <br><br> For questions or expedited shipping please contact us at info@graham-collective.com.",
    },
  ];

  return (
    <div className="bg-white pt-16 dark:text-black dark:bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd),
        }}
      />
      <div className="mx-auto max-w-2xl px-0 py-24 sm:px-0 lg:max-w-7xl lg:px-0">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-20">
          {/* Image gallery */}
          <Tab.Group
            as="div"
            className="flex flex-col-reverse"
            defaultIndex={defaultIndex}
          >
            {/* Image selector */}
            <div className=" mt-6 hidden w-11/12 max-w-2xl sm:block lg:max-w-none pl-14">
              <Tab.List className="grid grid-cols-4 gap-8">
                {product.images.map((image, i) => (
                  <Tab
                    key={i}
                    className="relative flex h-32 cursor-pointer items-center justify-center bg-white text-sm font-medium uppercase text-black-400 hover:bg-black-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                    style={{ display: i > 3 ? "none" : "flex" }}
                  >
                    {({ selected }) => (
                      <>
                        <span className="sr-only">{product.title}</span>
                        <span className="absolute inset-0 overflow-hidden">
                          <img
                            src={image.url}
                            alt={image.altText}
                            className="h-full w-full object-cover object-center"
                          />
                        </span>
                        <span
                          className={classNames(
                            selected ? "ring-zinc-100" : "ring-transparent",
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

            <Tab.Panels className="">
              {product.images.map((image, i) => (
                <Tab.Panel key={i} className="flex justify-center">
                  <img
                    src={image.url}
                    alt={image.altText}
                    className="sm:h-[620px] object-cover w-11/12 sm:w-10/12 object-center aspect-[3/4]"
                  />
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>

          {/* Product Info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-2 lg:mt-0">
            <div className="flex place-content-between">
              <h1 className="text-sm sm:text-2xl font-light text-black-600 truncate">
                {product.title.toUpperCase()}
              </h1>
              <p className="text-sm sm:text-2xl tracking-normal text-black-600">
                {`${new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(
                  parseFloat(
                    selectedVariant === undefined
                      ? amount
                      : selectedVariantPrice
                  )
                )}`}
              </p>
            </div>
            <Link href={`/${currentType}/${restructuredVendor}`}>
              <p className="mt-4 text-sm text-neutral-500 border-b border-neutral-500 pb-6 mb-20">
                {product.vendor.toUpperCase()}
              </p>
            </Link>
            <VariantSelector
              options={product.options}
              variants={product.variants}
            />
            {/* {ADD TO CART BUTTON} */}
            <AddToCart
              variants={product.variants}
              availableForSale={product.availableForSale}
            />

            <section aria-labelledby="details-heading" className="mt-28">
              <div className="divide-y divide-black">
                {/* Info Tabs */}
                <Tab.Group as="div" className="mt-4">
                  <div className="-mx-4 flex overflow-x-auto sm:mx-0">
                    <div className="flex-auto border-b border-black px-4 sm:px-0">
                      <Tab.List className="-mb-px flex space-x-10">
                        {tabDetails.map((tab, i) => (
                          <Tab
                            key={i}
                            className={({ selected }) =>
                              classNames(
                                selected
                                  ? "text-black outline-none"
                                  : "text-zinc-400",
                                "whitespace-nowrap py-6 text-sm font-medium"
                              )
                            }
                          >
                            {tab.title}
                          </Tab>
                        ))}
                      </Tab.List>
                    </div>
                  </div>

                  <Tab.Panels as={Fragment}>
                    {tabDetails.map((tab, i) => (
                      <Tab.Panel key={i} className="space-y-16 pt-10 lg:pt-12">
                        {tab.description ? (
                          <Prose
                            className="mb-6 text-lg leading-normal dark:text-slate-900 dark:bg-white"
                            html={
                              tab.description === "DESCRIPTION"
                                ? product.descriptionHtml
                                : tab.description
                            }
                          />
                        ) : null}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
