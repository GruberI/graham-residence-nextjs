"use client";
import { Fade } from "react-awesome-reveal";

export default function Text({ text }) {
  return (
    <div className="max-w-7xl m-auto mt-10 md:mt-16" id="first-page-scroll">
      <div className="text-center mx-4 sm:mx-0">
        <div className="inset-x-0 bottom-0 sm:static sm:self-stretch">
          <Fade>
            <h1 className="text-2xl sm:text-3xl tracking-widest font-thin animate-fadeTwo">
              {text}
            </h1>
            {/* <a
              href="/about"
              className="text-[10px] font-thin leading-6 hover:text-neutral-300 underline underline-offset-8"
            >
              LEARN MORE
            </a> */}
          </Fade>
        </div>
      </div>
    </div>
  );
}
