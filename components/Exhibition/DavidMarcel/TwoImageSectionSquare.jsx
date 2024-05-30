export default function TwoImageSection({ imageData }) {
  return (
    <div className="grid sm:grid-rows-2 grid-cols-1 sm:grid-cols-3 sm:grid-flow-col gap-6 max-w-7xl mx-10 sm:mx-auto py-16">
      <div className="sm:col-span-2 sm:row-end-3 sm:row-span-2 flex flex-col sm:flex-row gap-4">
        <a href={imageData.href} className="flex flex-col sm:flex-row">
          <img
            src={imageData.imgFirst.imgSrc}
            alt=""
            className="w-full sm:w-7/12 object-cover"
          />

          <div className="flex flex-col justify-center sm:justify-end w-full ml-0 sm:ml-4 mt-4 sm:mt-0">
            <p>{imageData.title}</p>
            <p>by {imageData.artist}</p>
            <p>{imageData.size}</p>
            <p>{imageData.type} on Canvas</p>
            <p>{imageData.price}</p>
          </div>
        </a>
      </div>
      <div className="row-end-2 row-span-2">
        <a href={imageData.href}>
          <img
            src={imageData.imgSecond.imgSrc}
            alt=""
            className="aspect-square object-cover"
          />
        </a>
      </div>
    </div>
  );
}
