import { useState } from "react";

export default function ImageTransition({
  imgOne,
  imgTwo,
  available,
  fineArt,
}) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="aspect-[3/4] overflow-hidden bg-black-200 relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {
        <img
          src={imgOne.src}
          alt={imgOne.altText}
          className="object-cover object-center lg:h-full lg:w-full relative"
        />
      }
      {imgTwo.src == undefined ? (
        <img
          className={`absolute inset-0 lg:h-full lg:w-full duration-300 object-cover ${
            hover ? "scale-105" : "opacity-0"
          } transition`}
          src={imgOne.src}
          alt={imgOne.altText}
        />
      ) : (
        <img
          className={`absolute inset-0 lg:h-full lg:w-full h-full w-full duration-300 object-cover ${
            hover ? "scale-100" : "opacity-0"
          } transition`}
          src={imgTwo.src}
          alt={imgTwo.altText}
        />
      )}
    </div>
  );
}
