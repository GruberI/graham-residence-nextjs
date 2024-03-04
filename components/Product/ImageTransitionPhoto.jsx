import { useState } from "react";

export default function ImageTransitionPhoto({ img }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="aspect-[3/4] overflow-hidden bg-black-200 relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        className="absolute inset-0 lg:h-full lg:w-full h-full w-full duration-100 object-cover 
            hover:opacity-75 hover:scale-105 transition"
        src={img.src}
        alt={img.altText}
      />
    </div>
  );
}
