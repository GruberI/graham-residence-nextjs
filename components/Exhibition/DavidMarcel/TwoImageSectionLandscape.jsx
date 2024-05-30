export default function TwoImageSectionLandscape({ imageData }) {
  return (
    <div className="max-w-7xl py-16 mx-10 sm:mx-auto border-t border-black">
      <div className="flex flex-col md:flex-row pb-10 justify-start">
        <div>
          <a href={imageData[1].href}>
            <img src={imageData[1].imgSrc} alt="" />
          </a>
        </div>
        <div className="content-end pl-6 md:pt-0 pt-6">
          <a href={imageData[1].href}>
            <p>{imageData[1].title}</p>
            <p>by {imageData[1].artist}</p>
            <p>{imageData[1].size}</p>
            <p>{imageData[1].type} on Canvas</p>
            <p>Ships Framed.</p>
            <p>{imageData[1].price}</p>
          </a>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-end">
        <div className="content-end text-end pr-6 md:pt-0 pt-6">
          <a href={imageData[0].href} className="pb-10">
            <p>{imageData[0].title}</p>
            <p>by {imageData[0].artist}</p>
            <p>{imageData[0].size}</p>
            <p>{imageData[0].type} on Canvas</p>
            <p>Ships Framed.</p>
            <p>{imageData[0].price}</p>
          </a>
        </div>

        <div>
          <a href={imageData[0].href} className="pb-10">
            <img src={imageData[0].imgSrc} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
