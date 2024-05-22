export default function TwoImageSection({ imageData }) {
  return (
    <div className="grid sm:grid-rows-3 grid-cols-1 sm:grid-cols-3 sm:grid-flow-col gap-6 mt-0 sm:mt-20 max-w-7xl mx-10 sm:mx-auto">
      <div className="sm:col-span-2 sm:row-end-3 sm:row-span-2 flex flex-col sm:flex-row gap-4">
        <a href={imageData.href} className="flex flex-col sm:flex-row">
          <img
            src={imageData.imgFirst.imgSrc}
            alt=""
            className="w-full sm:w-6/12"
          />

          <div className="flex flex-col justify-center sm:justify-end w-full ml-0 sm:ml-4 mt-4 sm:mt-0">
            <p>{imageData.title}</p>
            <p>by {imageData.artist}</p>
            <p>{imageData.size}</p>
            <p>{imageData.type} on Canvas</p>
            <p>${imageData.price}</p>
          </div>
        </a>
      </div>
      <div className="row-start-2 row-span-2">
        <a href={imageData.href}>
          <img src={imageData.imgSecond.imgSrc} alt="" />
        </a>
      </div>
    </div>
  );
}
