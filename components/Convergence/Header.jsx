"use client";
import { Fade } from "react-awesome-reveal";

export default function Header() {
  return (
    <div className="bg-white py-26 lg:px-6 sm:px-2 pt-48 sm:pt-28">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-thin sm:text-6xl text-5xl tracking-widest sm:mt-4 mb-4">
          Convergence
        </h1>
        <p className="pb-2 text-lg sm:text-xl">A conversation of sorts</p>
        <p className="pb-2 text-lg sm:text-2xl">
          Marcel Rozek & David Matthew King
        </p>
        <Fade>
          <p className="text-xl">June 4th - July 31st</p>
        </Fade>
      </div>
    </div>
  );
}
