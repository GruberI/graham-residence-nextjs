"use client";
import { useState, useEffect } from "react";
import "./Slideshow.css";

const imageArray = [
  "https://ipfs.filebase.io/ipfs/QmaabC8iMZpvFX8SgPmeCaAAw66xRvHR3voSoBzGdfgAPJ",
  "https://ipfs.filebase.io/ipfs/QmQNn2LNn6UdzbuqiSSXJpknNF62sDQbzugxGJm2E9cG8b",
  "https://ipfs.filebase.io/ipfs/QmTYVjdAsAbEKuSJ4dKQaHwkQJjfWJY4UWivoXiAfE9HSG",
  "https://ipfs.filebase.io/ipfs/QmWvWkJqJPjMNsLReNzvRqBwaz1fFqWxUzKLxrjFfvem9Y/QmcCMwxbycnVuXTghpA7ERg4B7Kg5L25NHsopeXy3Xqgub",
  "https://ipfs.filebase.io/ipfs/QmfWF5UMbrXZH72P7nkxvCvywpjUwS6qpxoAQMKa1dc182",
];
const duplicatedImageArray = [
  ...imageArray,
  ...imageArray,
  ...imageArray,
  ...imageArray,
  ...imageArray,
  ...imageArray,
];

export default function Slideshow() {
  const [index, setIndex] = useState(0);
  const delay = 6000;

  useEffect(() => {
    setTimeout(
      () =>
        setIndex((currIndex) =>
          currIndex === duplicatedImageArray.length - 1
            ? duplicatedImageArray.length - 1
            : currIndex + 1
        ),
      delay
    );
    return () => {};
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {duplicatedImageArray.map((imgSrc, index) => (
          <div className="slide" key={index}>
            <img src={imgSrc} alt="" className="object-cover w-screen" />
          </div>
        ))}
      </div>
    </div>
  );
}
