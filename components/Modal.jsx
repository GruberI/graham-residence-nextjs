"use client";
import axios from "axios";
import { Fragment, useState, useEffect, Suspense } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Modal() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    let returningUser = localStorage.getItem("seenModal");
    !returningUser
      ? setTimeout(() => {
          setOpen(true);
        }, 5000)
      : null;
  }, []);

  const closeModal = () => {
    localStorage.setItem("seenModal", true);
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email,
    };
    axios
      .post(
        "https://sheet.best/api/sheets/df3406f0-1186-4f84-bb7b-f5a54780b999",
        data
      )
      .then((response) => {
        setFirstname("");
        setLastname("");
        setEmail("");
        setOpen(false);
      });
  };

  return (
    <>
      {open ? (
        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-zinc-500 bg-opacity-50 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-500"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-sm bg-white text-left shadow-xl transition-all max-w-fit bg-[#e1d9cc]">
                    <div>
                      <div className="absolute sm:right-0 right-0 top-0 pr-4 pt-4 sm:block">
                        <button
                          type="button"
                          className="rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                          onClick={() => closeModal()}
                        >
                          <span className="sr-only">Close</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                      <Suspense>
                        <div className="flex flex-row sm:w-[750px] m-4 sm:m-0">
                          <div className="">
                            <div className="text-center sm:w-[70%] m-auto pt-10 sm:pt-14 pb-10 md:pb-10">
                              <Dialog.Title
                                as="h3"
                                className="text-lg sm:text-sm font-bold leading-6 text-gray-900 mb-2"
                              >
                                JOIN THE LIST
                              </Dialog.Title>
                              <Dialog.Title
                                as="h3"
                                className="text-xs sm:text-sm sm:font-bold leading-6 text-gray-900 mb-6"
                              >
                                You'll be the first to know about upcoming
                                exhibitions, new releases and sales
                              </Dialog.Title>
                              <form
                                className="space-y-6"
                                action="#"
                                method="POST"
                                onSubmit={handleSubmit}
                              >
                                <div className="relative -space-y-px rounded-sm shadow-sm">
                                  <div className="pointer-events-none absolute inset-0 z-10 rounded-sm " />
                                  <div>
                                    <label
                                      htmlFor="email-address"
                                      className="sr-only"
                                    >
                                      Email address
                                    </label>
                                    <input
                                      id="email-address"
                                      name="email"
                                      type="email"
                                      autoComplete="email"
                                      required
                                      className="relative block w-full border-1 py-1.5 text-black ring-1 ring-inset ring-black placeholder:text-black focus:z-10 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6 p-2"
                                      placeholder="Email address"
                                      onChange={(e) => setEmail(e.target.value)}
                                    />
                                  </div>
                                </div>

                                <button
                                  type="submit"
                                  className="round-sm flex-none bg-black text-white px-6 py-2 w-full text-sm font-light hover:font-semibold shadow-sm border border-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                  SUBSCRIBE
                                </button>
                                <p className="text-gray-500 text-xs">
                                  {" "}
                                  By signing up, you agree to receive emails
                                  from <br className="hidden sm:inline"></br>{" "}
                                  The Graham Residence
                                </p>
                              </form>
                            </div>
                          </div>
                          <div className="hidden md:inline sm:w-[360px]">
                            <img
                              src="https://ipfs.filebase.io/ipfs/QmUd4Vuk5eYeLRCcB3gMcFPJyzhHFDY9kcC7Jza6xYq1QE/QmNPXLSM6pVtdWPQ2fjUuXge5Jic9HzLcGBnouW2ejCkqc"
                              alt=""
                            />
                          </div>
                        </div>
                      </Suspense>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      ) : null}
    </>
  );
}
