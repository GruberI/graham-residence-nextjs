"use client";
import { Fade } from "react-awesome-reveal";

export default function Text({ text }) {
  return (
    <div className="my-2 sm:my-10 mx-auto max-w-7xl">
      <div className="text-center">
        <div className="inset-x-0 bottom-0 sm:static sm:self-stretch py-10 px-6 sm:px-10">
          <Fade>
            <h2 className="text-2xl sm:text-4xl tracking-widest font-thin animate-fadeTwo">
              {text}
            </h2>
          </Fade>
        </div>
      </div>
    </div>
  );
}
