"use client";
import { Fade } from "react-awesome-reveal";

export default function Text({ text }) {
  return (
    <div className="max-w-7xl m-auto my-10 sm:my-20">
      <div className="text-center">
        <div className="inset-x-0 bottom-0 sm:static sm:self-stretch">
          <Fade>
            <h1 className="text-2xl sm:text-2xl tracking-widest font-thin animate-fadeTwo mb-4">
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
