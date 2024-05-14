'use client'
import HeaderImage from "./HeaderImage";
import { Fade } from "react-awesome-reveal";


export default function Header() {
  return (
    <div className="bg-white mt-48 sm:mt-40 mb-20">
      <div className="max-w-4xl text-center m-auto">
        <h1 className="text-4xl sm:text-6xl text-2xl">Convergence</h1>
      </div>
      <div>
        <HeaderImage />
      </div>
      <div className="mt-4 mx-6 sm:mx-0">
        <p className="text-xl">A conversation of sorts</p>
        <Fade>
        <h2 className="mt-4 text-center text-2xl sm:text-5xl italic">Marcel Rozek and David Matthew King</h2>
        </Fade>
      </div>
    </div>
  );
}
