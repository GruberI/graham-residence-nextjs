"use client";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "We accept returns on unused home goods with original packaging within 14 days of purchase. Reach out to us at info@graham-collective.com to initiate a return.",
  },
  {
    question: "Where do you ship to?",
    answer: "We currently are only set up to ship within the continental US.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Shipping and handling times vary amongst brands we carry. Please see item-specific shipping details on the checkout page.",
  },
  // More questions...
];

export default function Shipping() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-36 mt-24 sm:mt-0">
      <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
        <h2 className="text-3xl font-thin leading-10 tracking-wide text-gray-900 flex justify-center">
          Shipping & Handling
        </h2>
        <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
          {faqs.map((faq) => (
            <Disclosure as="div" key={faq.question} className="pt-6">
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                      <span className="text-base font-thin leading-7">
                        {faq.question}
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    <p className="text-base leading-7 text-gray-600">
                      {faq.answer}
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </div>
    </div>
  );
}
