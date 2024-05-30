export default function ThreeImageSection({ imageData }) {
  return (
    <div className="three-image-section mx-auto grid grid-rows-1 grid-cols-1 sm:grid-cols-5 grid-flow-col max-w-7xl py-16">
      <div className="sm:row-start-1 sm:row-end-3 sm:col-span-2 hidden sm:flex flex-col sm:justify-between">
        <div>
          <a href={imageData.href}>
            <img src={imageData.imgSecond.imgSrc} alt="" />
          </a>
        </div>
        <div className="pt-24">
          <a href={imageData.href}>
            <img src={imageData.imgThird.imgSrc} alt="" />
          </a>
        </div>
      </div>
      <div className="flex flex-col-reverse sm:flex-row  sm:col-span-3 mx-10 sm:mx-auto sm:h-[80%]">
        <div className="sm:row-start-2 sm:row-span-2 sm:content-end text-end pl-20 pr-4 justify-center mt-6 sm:mt-0">
          <a
            href={imageData.href}
            className="flex flex-col space-y-1 sm:space-y-3"
          >
            <p className="font-light">
              {imageData.title}
              <br />
              by {imageData.artist}
            </p>
            <p className="font-light">{imageData.size}</p>
            <p className="font-light">{imageData.type} on Canvas</p>
            <p className="font-light">{imageData.price}</p>
          </a>
        </div>
        <div className="row-start-1 row-span-3">
          <a href={imageData.href}>
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
