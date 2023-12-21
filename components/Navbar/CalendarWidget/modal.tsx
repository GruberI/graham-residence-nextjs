"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import CloseCal from "./close-cal";
import OpenCal from "./open-cal";
import React from "react";

export default function CalModal() {
  const [isOpen, setIsOpen] = useState(false);
  const openCal = () => setIsOpen(true);
  const closeCal = () => setIsOpen(false);

  return (
    <>
      <button aria-label="Open cart" onClick={openCal}>
        <OpenCal />
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={closeCal} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[.5px]"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="tranblack-x-full"
            enterTo="tranblack-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="tranblack-x-0"
            leaveTo="tranblack-x-full"
          >
            <Dialog.Panel className="fixed bottom-0 right-0 top-0 flex h-full w-full flex-col border-l border-neutral-200 bg-[#f5f5f5] p-6 text-black backdrop-blur-xl dark:border-neutral-700 dark:bg-black/80 dark:text-white md:w-[390px]">
              <div className="flex items-start justify-end">
                <button aria-label="Close cart" onClick={closeCal}>
                  <CloseCal />
                </button>
              </div>
              <p className="text-md mt-8 m-auto">Request to stay at</p>
              <p className="font-bold text-lg m-auto">THE GRAHAM RESIDENCE</p>
              <iframe
                id="booking-iframe"
                sandbox="allow-top-navigation allow-scripts allow-same-origin"
                className="ml-3"
                style={{ width: "100%", height: "1000px", marginTop: "20px" }}
                src="https://booking.hospitable.com/widget/9ae5753d-6ef3-4c14-9738-d02164033a92/1291144"
              ></iframe>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
