export default function TwoImageSection({ imageData }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-5 sm:grid-flow-col gap-10 max-w-7xl mx-10 sm:mx-auto pt-16">
      <div className="sm:col-span-3 sm:row-end-3 sm:row-span-2 flex flex-col sm:flex-row gap-4">
        <a href={imageData.href} className="flex flex-col sm:flex-row">
          <img
            src={imageData.imgFirst.imgSrc}
            alt=""
            className="w-full sm:w-auto flex-[1_0_0] min-w-0"
          />

          <div className="flex flex-col justify-center sm:justify-end w-full ml-0 sm:ml-4 mt-4 sm:mt-0 sm:min-w-0 sm:flex-shrink-0 sm:w-auto space-y-1 sm:space-y-2">
            <p className="font-light">
              {imageData.title}
              <br />
              by {imageData.artist}
            </p>
            <p className="font-light">{imageData.size}</p>
            <p className="font-light">{imageData.type} on Canvas</p>
            <p className="font-light">{imageData.price}</p>
          </div>
        </a>
      </div>
      <div className="sm:col-span-2 row-start-2 row-span-2">
        <a href={imageData.href}>
          <img
            src={imageData.imgSecond.imgSrc}
            alt=""
            className="aspect-[2/3] object-cover"
          />
        </a>
      </div>
    </div>
  );
}
