export default function ThreeImageSection({ imageData }) {
  return (
    <div className="mx-auto grid grid-rows-1 grid-col-1 sm:grid-col-3 grid-flow-col max-w-7xl py-12 border-t border-black mt-20 pt-20">
      <div className="sm:row-start-1 sm:row-end-3 hidden sm:flex flex-col">
        <div>
          <img src={imageData.imgSecond.imgSrc} alt="" />
        </div>
        <div className="pt-24">
          <img src={imageData.imgThird.imgSrc} alt="" />
        </div>
      </div>
      <div className="flex flex-col-reverse sm:flex-row">
        <div className="sm:row-start-2 sm:row-span-2 sm:content-end text-end pl-20 pr-4 justify-center mt-10 ms:mt-0">
          <a href={imageData.href}>
            <p>{imageData.Title}</p>
            <p>by {imageData.artist}</p>
            <p>{imageData.size}</p>
            <p>{imageData.type} on Canvas</p>
            <p>${imageData.price}</p>
          </a>
        </div>
        <div className="row-start-1 row-span-3">
          <a href="/product/untitled-2">
            <img
              src={imageData.imgFirst.imgSrc}
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
