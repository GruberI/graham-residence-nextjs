"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { VariantSelector } from "./variant-selector";
import Link from "next/link";
import Prose from "@/components/prose";
import ProductImageGallery from "@/components/Product/ProductImageGallery"; // Import the Swiper-based component
import { bannerInfo } from "@/components/ShopAll/Banner";
import Banner from "@/components/ShopAll/Banner";

export default function ProductDescription({ product }) {
  const [currentType, setCurrentType] = useState("");
  const [selectedImage, setSelectedImage] = useState(0); // State to track the currently displayed image

  useEffect(() => {
    product.tags.includes("home-goods")
      ? setCurrentType("home")
      : setCurrentType("art");
  }, [product.tags]);

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

  const matchingBanner = bannerInfo.find(
    (banner) =>
      banner?.handle &&
      (product.tags.includes(banner.handle) ||
        product.vendor.toLowerCase().replaceAll(" ", "-") === banner.handle)
  );

  return (
    <div className="bg-white pt-2 dark:text-black dark:bg-white mb-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd),
        }}
      />
      <div className="mx-auto max-w-2xl px-0 mt-20 sm:py-5 py-10 sm:px-10 lg:max-w-7xl lg:px-0">
        <div className="lg:flex lg:gap-8">
          {/* Main Image Gallery Container */}
          <div className="overflow-hidden w-full lg:w-1/2 flex flex-col items-center justify-center">
            {/* Use Swiper-based Image Gallery */}
            <ProductImageGallery
              images={product.images.map((image) => ({
                src: image.url,
                altText: image.altText,
                loading: "lazy", // Lazy loading for better performance
              }))}
            />
          </div>

          {/* Product Info Section */}
          <div className="mt-2 px-4 sm:mt-2 sm:px-2 lg:mt-0 lg:w-1/2">
            <div className="flex place-content-between">
              <h1 className="text-sm sm:text-2xl font-light text-black-600 whitespace-normal break-words">
                {product.title.toUpperCase()}
              </h1>
              {/* Display SOLD if the product is not available */}
              {!product.availableForSale ? (
                <p className="text-black-500 font-semi-bold">SOLD</p>
              ) : null}
              {/* Uncomment the following block if you want to display the price */}
              {/* {product.availableForSale && (
                <p className="text-sm sm:text-2xl tracking-normal text-black-600">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(
                    parseFloat(
                      selectedVariant === undefined
                        ? amount
                        : selectedVariantPrice
                    )
                  )}
                </p>
              )} */}
            </div>
            <Link href={`/${currentType}/${restructuredVendor}`}>
              <p className="mt-4 text-sm text-neutral-500 border-b border-neutral-500 pb-2 mb-6">
                {product.vendor.toUpperCase()}
              </p>
            </Link>
            <VariantSelector
              options={product.options}
              variants={product.variants}
            />

            <section aria-labelledby="details-heading" className="mt-4">
              <div>
                <Prose
                  className="mb-2 text-base leading-normal dark:text-slate-900 dark:bg-white"
                  html={`${productJsonLd.description} <br /> `}
                />
                <div className="flex justify-center">
                  <button
                    onClick={() =>
                      (window.location.href =
                        "mailto:inquiries@graham-collective.com")
                    }
                    className="bg-white text-sm text-black py-2.5 min-w-[150px] px-3 border border-black hover:bg-black hover:text-white"
                  >
                    INQUIRE
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>{" "}
        {/* End of the flex container */}
        {/* Render Banner only if matchingBanner exists */}
        {matchingBanner && (
          <div
            className="w-full flex justify-center mt-10"
            style={{ padding: "0", borderBottom: "none" }} // Remove padding and border line
          >
            <Banner title={matchingBanner.handle} type={matchingBanner.type} />
          </div>
        )}
      </div>
    </div>
  );
}
