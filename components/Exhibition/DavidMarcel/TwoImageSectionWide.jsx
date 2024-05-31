export default function TwoImageSectionWide({ imageData }) {
  return (
    <div className="flex flex-col space-y-10 sm:space-y-0 sm:grid sm:grid-rows-3 sm:grid-cols-7 max-w-6xl mx-10 sm:mx-auto pt-16">
      <a
        href={imageData.href}
        className="flex flex-col sm:flex-row w-full sm:col-span-2 sm:row-span-2"
      >
        <img src={imageData.imgFirst.imgSrc} alt="" className="w-full" />

        <div className="flex flex-col justify-center sm:justify-end w-full ml-0 sm:ml-4 mt-4 sm:mt-0 sm:min-w-0 sm:flex-shrink-0 sm:w-auto space-y-1 sm:space-y-3">
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
      <a
        href={imageData.href}
        className=" w-full sm:row-start-2 sm:row-span-2 sm:col-start-6 sm:col-span-2"
      >
        <img
          src={imageData.imgSecond.imgSrc}
          alt=""
          className="aspect-[2/3] object-cover"
        />
      </a>
    </div>
  );
}
