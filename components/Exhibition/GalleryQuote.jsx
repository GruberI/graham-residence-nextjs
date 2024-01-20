"use client";
import { Fade } from "react-awesome-reveal";

export default function GalleryQuote() {
  return (
    <div className="max-w-7xl m-auto my-10">
      <div className="mx-auto text-center">
        <div className="inset-x-0 bottom-0 sm:static sm:self-stretch border-black py-10 px-10">
          <Fade>
            <h1 className={`text-2xl sm:text-5xl tracking-widest font-thin`}>
              Where the boundaries between home and gallery are erased
            </h1>
          </Fade>
        </div>
      </div>
    </div>
  );
}
