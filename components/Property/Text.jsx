"use client";
import { Fade } from "react-awesome-reveal";

export default function Text({ text }) {
  return (
    <div className="m-auto mt-6 sm:mt-20 sm:mb-14 mb-6 max-w-7xl">
      <div className="text-center">
        <div className="inset-x-0 bottom-0 sm:static sm:self-stretch py-10 px-10">
          <Fade>
            <h1 className="text-2xl sm:text-5xl tracking-widest font-thin animate-fadeTwo">
              {text}
            </h1>
          </Fade>
        </div>
      </div>
    </div>
  );
}
