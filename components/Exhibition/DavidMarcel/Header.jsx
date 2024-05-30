"use client";
import HeaderImage from "./HeaderImage";
import { Fade } from "react-awesome-reveal";

export default function Header() {
  return (
    <div className="bg-white mt-48 sm:mt-36 mb-20">
      <div className="max-w-4xl text-center m-auto">
        <h1 className="text-5xl sm:text-7xl text-2xl pb-2 sm:pb-6">
          Convergence
        </h1>
      </div>
      <div>
        <HeaderImage />
      </div>
      <div className="mt-4 mx-6 sm:mx-28">
        <p className="text-2xl">A conversation of sorts</p>
        <Fade>
          <h2 className="mt-4 text-center text-2xl sm:text-5xl italic">
            Marcel Rozek and David Matthew King
          </h2>
        </Fade>
      </div>
    </div>
  );
}
