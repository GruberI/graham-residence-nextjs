export default function TwoImageSectionLandscape({ imageData }) {
  return (
    <div className="two-section-landscape max-w-7xl mx-10 sm:mx-auto py-16">
      <div className="flex flex-col md:flex-row pb-10 justify-start">
        <div>
          <a href={imageData[1].href}>
            <img src={imageData[1].imgSrc} alt="" />
          </a>
        </div>
        <div className="content-end pl-6 md:pt-0 pt-6">
          <a href={imageData[1].href} className=" space-y-1 sm:space-y-3">
            <p>
              {imageData[1].title}
              <br />
              by {imageData[1].artist}
            </p>
            <p>{imageData[1].size}</p>
            <p>{imageData[1].type} on Canvas</p>
            <p>Ships Framed.</p>
            <p>{imageData[1].price}</p>
          </a>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-end">
        <div className="content-end text-end pr-6 md:pt-0 pt-6">
          <a href={imageData[0].href} className="pb-10  space-y-1 sm:space-y-3">
            <p>
              {imageData[0].title}
              <br />
              by {imageData[0].artist}
            </p>
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
