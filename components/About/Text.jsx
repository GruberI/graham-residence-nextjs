"use client";
import { Fade } from "react-awesome-reveal";

export default function Text({ text }) {
  return (
    <div className="max-w-7xl m-auto mt-10 mb-10">
      <div className="text-center">
        <div className="inset-x-0 bottom-0 sm:static sm:self-stretch py-10 px-10">
          <Fade>
            <h1 className="text-lg sm:text-3xl tracking-widest font-thin">
              {text}
            </h1>
          </Fade>
        </div>
      </div>
    </div>
  );
}
