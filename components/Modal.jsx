"use client";
import axios from "axios";
import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Modal() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

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
      firstname,
      lastname,
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
                          className="rounded-md sm:bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                          onClick={() => closeModal()}
                        >
                          <span className="sr-only">Close</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                      <div className="flex flex-row">
                        <div className="">
                          <div className="text-center sm:pt-24 mx-4 sm:mx-10 my-4 sm:my-0">
                            <Dialog.Title
                              as="h3"
                              className="text-xs sm:text-sm font-bold leading-6 text-gray-900 mb-6 mt-12 sm:mt-0"
                            >
                              STAY UP TO DATE WITH THE GRAHAM RESIDENCE
                            </Dialog.Title>
                            <form
                              className="space-y-6"
                              action="#"
                              method="POST"
                              onSubmit={handleSubmit}
                            >
                              <div className="relative -space-y-px rounded-sm shadow-sm">
                                <div className="pointer-events-none absolute inset-0 z-10 rounded-sm " />
                                <div className="pb-2">
                                  <label
                                    htmlFor="firstname"
                                    className="sr-only"
                                  >
                                    First Name
                                  </label>
                                  <input
                                    id="firstname"
                                    name="firstname"
                                    type="firstname"
                                    autoComplete="firstname"
                                    required
                                    className="relative block w-full border-1 py-1.5 text-black ring-1 ring-inset ring-black placeholder:text-black focus:z-10 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6 p-2"
                                    placeholder="First Name"
                                    onChange={(e) =>
                                      setFirstname(e.target.value)
                                    }
                                  />
                                </div>
                                <div className="pb-2">
                                  <label htmlFor="lastname" className="sr-only">
                                    Last Name
                                  </label>
                                  <input
                                    id="lastname"
                                    name="lastname"
                                    type="lastname"
                                    autoComplete="lastname"
                                    required
                                    className="relative block w-full border-1 py-1.5 text-gray-900 ring-1 ring-inset ring-black placeholder:text-black focus:z-10 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6 p-2"
                                    placeholder="Last Name"
                                    onChange={(e) =>
                                      setLastname(e.target.value)
                                    }
                                  />
                                </div>
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
                                By signing up, you agree to receive emails from{" "}
                                <br className="hidden sm:inline"></br> The Graham Residence
                              </p>
                            </form>
                          </div>
                        </div>
                        <div className="hidden md:inline sm:w-[300px]">
                          <img
                            src="https://ipfs.filebase.io/ipfs/QmUqRcVmsVA6z6zYx4PJVR2NsHCngmPq27uLNhcWZx3HCs/QmfUk75HpsgyfELNRUHqkfhTJbaFsVmeSMcGdHL2HPzv3c"
                            alt=""
                          />
                        </div>
                      </div>
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
