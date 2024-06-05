import { useState, useEffect, useCallback, Fragment } from "react";
import { usePathname } from "next/navigation";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import { Carat, Hamburger, X } from "./icons";
import { NAV_ITEMS, type NavItem } from "./constants";

export const NavDrawer = ({ color = "#fff" }: { color?: string }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [navStack, setNavStack] = useState<NavItem[][]>([NAV_ITEMS]);
  const [backItem, setBackItem] = useState<NavItem>(null);

  const currentMenu = navStack[navStack.length - 1];

  const handleItemClick = useCallback((item: NavItem) => {
    if (item.children) {
      const { children, path, title } = item;
      const backItem = { title, path };

      setNavStack((prevStack) => [...prevStack, [backItem, ...item.children]]);
      setBackItem(item);
    } else {
      handleBackClick();
    }
  }, []);

  const handleBackClick = useCallback(() => {
    setNavStack((prevStack) => prevStack.slice(0, prevStack.length - 1));
    setBackItem(null);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) setNavStack([NAV_ITEMS]);
  }, [isOpen]);

  console.log({ navStack });

  return (
    <div className="group nav-drawer flex md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10"
      >
        <Hamburger fill={color} />
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={() => setIsOpen(false)} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[.5px]"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none"
          >
            <div className="fixed inset-0 bg-black/10" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="fixed bottom-0 left-0 w-3/4 top-0 flex flex-col bg-white/100 text-black md:w-[600px]">
              <div
                className={`h-full flex flex-col px-5 overflow-hidden py-8 relative`}
              >
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="w-5 h-5 absolute top-2.5 right-2.5"
                >
                  <X fill="#000" />
                </button>
                <a href="/" className="border-b border-black pb-2.5">
                  <p
                    className={`font-thin sm:pl-1 md:pl-6 ml-0 sm:ml-2 md:ml-0 w-full sm:w-[100px] md:w-full font-[cormorant]`}
                  >
                    <span className="inline lg:hidden text-xl font-[cormorant]">
                      TGC
                    </span>
                  </p>
                </a>
                <div>
                  {navStack.length > 1 && (
                    <button
                      className="flex items-center justify-start space-x-2.5 pt-5"
                      onClick={handleBackClick}
                    >
                      <Carat className="w-5 h-5" fill="#000" />
                      <span className="font-[cormorant] font-medium tracking-[0] text-2xl">
                        Back
                      </span>
                    </button>
                  )}
                  <Transition
                    show={true}
                    appear={true}
                    as={"ul"}
                    className={`${navStack.length > 1 ? "pt-2.5" : "pt-5"}`}
                    key={currentMenu[0]?.title}
                    enter="transition-opacity duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    {currentMenu.map((item, idx) => (
                      <li key={item.path + "" + idx} className="w-full flex">
                        {item.children?.length > 0 ? (
                          <button
                            onClick={() => handleItemClick(item)}
                            type="button"
                            className="py-1.5 text-2xl flex items-center justify-between w-full"
                          >
                            <span className="font-[cormorant] font-medium tracking-[0]">
                              {item.title}
                            </span>
                            <Carat className="w-5 h-5 rotate-180" fill="#000" />
                          </button>
                        ) : (
                          <Link
                            className="text-2xl w-full font-[cormorant] font-medium tracking-[0] py-1.5"
                            href={item.path}
                          >
                            {item.title}
                          </Link>
                        )}
                      </li>
                    ))}
                  </Transition>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  );
};
