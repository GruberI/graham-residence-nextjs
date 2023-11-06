import { useState } from "react";

export default function ImageTransition ({ imgOne, imgTwo }) {

    console.log('IMAGE ONE', imgOne.src)
    console.log('IMAGE TWO', imgTwo.src)
    const [hover, setHover] = useState(false);
  
    return (
      <div
        className="aspect-[3/4] w-full overflow-hidden bg-black-200 lg:aspect-none lg:h-80 border relative"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img
          src={imgOne.src}
          alt={imgOne.altText}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
        <img
          className={`absolute inset-0 lg:h-full lg:w-full duration-300 object-cover ${
            hover ? 'scale-105' : 'opacity-0'
          } transition`}
          src={imgTwo.src}
          alt={imgTwo.altText}
        />
      </div>
    );
  };