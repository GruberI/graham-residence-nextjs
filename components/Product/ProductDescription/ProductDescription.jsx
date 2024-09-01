"use client";
import { useState, useEffect, Fragment } from "react";
import { Tab } from "@headlessui/react";
import { useSearchParams } from "next/navigation";
import { AddToCart } from "../../Cart/add-to-cart";
import { VariantSelector } from "./variant-selector";
import SimpleSlider from "./SimpleSlider";
import Link from "next/link";
import Prose from "@/components/prose";

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

  const artistBios =
    product.vendor === "Sophie Lou Jacobsen"
      ? "Products will ship within 2-5 business days. Please allow 5-7 days for Standard shipping."
      : product.vendor === "Atelier Saucier"
      ? "Products will ship within 2-5 business days. Please allow 5-7 days for Standard shipping."
      : product.vendor === "Loll Designs"
      ? "Products will ship within 3-5 business days via FedEx standard. Most Loll furniture arrives flat-packed but is easy to assemble."
      : product.vendor === "West-Bourne"
      ? "Products will ship within 3-5 business days. Please allow 5-7 days for Standard shipping."
      : product.vendor === "Thai Mainhard"
      ? "Local pickup is available in Costa Mesa. Drop us a note to arrange pickup at info@graham-collective.com. <br><br> Artwork ships within 2 weeks. <br><br> If you have a specific deadline, let us know and we’ll do our best to accommodate. For expedited shipping, or other questions, contact info@graham-collective.com. <br><br><i> All sales are final."
      : // Continue with other vendors as needed...
        "Shipping, local delivery and pickup options vary and will be viewable on the cart checkout page. <br><br> For questions or expedited shipping please contact us at info@graham-collective.com.";

    const artistQuotes =
        product.vendor === "Sophie Lou Jacobsen"
          ? "Products will ship within 2-5 business days. Please allow 5-7 days for Standard shipping."
          : product.vendor === "Atelier Saucier"
          ? "Products will ship within 2-5 business days. Please allow 5-7 days for Standard shipping."
          : product.vendor === "Loll Designs"
          ? "Products will ship within 3-5 business days via FedEx standard. Most Loll furniture arrives flat-packed but is easy to assemble."
          : product.vendor === "West-Bourne"
          ? "Products will ship within 3-5 business days. Please allow 5-7 days for Standard shipping."
          : product.vendor === "Thai Mainhard"
          ? "Local pickup is available in Costa Mesa. Drop us a note to arrange pickup at info@graham-collective.com. <br><br> Artwork ships within 2 weeks. <br><br> If you have a specific deadline, let us know and we’ll do our best to accommodate. For expedited shipping, or other questions, contact info@graham-collective.com. <br><br><i> All sales are final."
          : // Continue with other vendors as needed...
            "Shipping, local delivery and pickup options vary and will be viewable on the cart checkout page. <br><br> For questions or expedited shipping please contact us at info@graham-collective.com.";
    
  return (
    <div className="bg-white pt-2 dark:text-black dark:bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd),
        }}
      />
      <div className="mx-auto max-w-2xl px-0 sm:py-24 py-14 sm:px-0 lg:max-w-7xl lg:px-0">
        <div className="py-10 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-20">
          {/* Mobile Carousel */}
          <div className="sm:hidden">
            <SimpleSlider images={product.images} />
          </div>
          {/* Image gallery using Tab.Group for correct functionality */}
          <Tab.Group as="div" className="hidden sm:flex flex-col-reverse">
            <div className="mt-6 hidden w-11/12 max-w-2xl sm:block lg:max-w-none pl-14">
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
          <div className="mt-2 px-4 sm:mt-2 sm:px-2 lg:mt-0">
            <div className="flex place-content-between">
              <h1 className="text-sm sm:text-2xl font-light text-black-600 whitespace-normal break-words">
                {product.title.toUpperCase()}
              </h1>
              <p className="text-sm sm:text-2xl tracking-normal text-black-600">
                {product.availableForSale
                  ? `${new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(
                      parseFloat(
                        selectedVariant === undefined
                          ? amount
                          : selectedVariantPrice
                      )
                    )}`
                  : "Sold"}
              </p>
            </div>
            <Link href={`/${currentType}/${restructuredVendor}`}>
              <p className="mt-4 text-sm text-neutral-500 border-b border-neutral-500 pb-2 mb-10">
                {product.vendor.toUpperCase()}
              </p>
            </Link>
            <VariantSelector
              options={product.options}
              variants={product.variants}
            />

            <section aria-labelledby="details-heading" className="mt-4">
              <div className="">
                {/* Directly render DESCRIPTION */}
                <h2 className="text-xl font-semibold mb-4"></h2>
                {/* Combine DESCRIPTION and SHIPPING & HANDLING into one Prose component */}
<Prose
  className="mb-3 text-lg leading-normal dark:text-slate-900 dark:bg-white"
  html={`${productJsonLd.description} <br /> `}
/>
                {/* Add To Cart Button */}
                <AddToCart
                  variants={product.variants}
                  availableForSale={product.availableForSale}
                  type={currentType}
                />
            <br>
            </br>
              
              </div>
  {/*            <div>
              <Prose
  className="mb-3 text-lg leading-normal dark:text-slate-900 dark:bg-white"
  html={`${artistQuotes} `}
/><br></br>
                <Prose
  className="mb-3 text-lg leading-normal dark:text-slate-900 dark:bg-white"
  html={`${artistBios} `}
/>
                      </div> */}
            </section>
            
          </div>
        </div>
      </div>
    </div>
  );
}