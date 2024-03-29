"use client";
import { Fade } from "react-awesome-reveal";

export default function Text() {
  return (
    <div className="max-w-7xl m-auto mt-10 sm:mt-20 sm:mb-14 mb-10">
      <div className="text-center">
        <div className="inset-x-0 bottom-0 sm:static sm:self-stretch py-10 px-10">
          <Fade>
            <h1 className="text-2xl sm:text-5xl tracking-widest font-thin animate-fadeTwo">
              Surrounded by weather boulders, ancient junipers, and piñon pines.
              Serenity and solitude are pervasive, and the only neighbors in
              sight are blue jays, hummingbirds, and the occasional coyote.
            </h1>
          </Fade>
        </div>
      </div>
    </div>
  );
}
