"use client";
import { useState } from "react";
import Link from "next/link.js";

export default function ArtistGrid({ artists }) {
  const [hover, setHover] = useState(false);
  return (
    <div className="mx-auto max-w-7xl py-4">
      <div className="flex items-baseline justify-between border-b border-gray-200 pb-6">
        <h1 className="text-lg font-light tracking-wide text-gray-900 ml-4 sm:ml-0">
          All Artists
        </h1>
      </div>
      <div className="grid gap-x-12 gap-y-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 pt-10 mx-6">
        {artists.map((artist, i) => (
          <Link key={i} href={artist.href}>
            <div
              className="aspect-square overflow-hidden bg-black-200 relative"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <img
                className="absolute inset-0 lg:h-full lg:w-full h-full w-full duration-100 object-cover object-center hover:opacity-75 hover:scale-105 transition"
                src={artist.src}
                alt={artist.altText}
              />
            </div>
            <div>
              <h3 className="truncate font-light text-lg text-black my-4">
                {artist.name.toUpperCase()}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
