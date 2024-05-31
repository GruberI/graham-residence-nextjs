export default async function OneImage({ imgSrc }) {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-0">
      <div className="w-full">
        <img
          src={imgSrc}
          alt="arial shot of property with winding road"
          className="py-2 h-full w-full"
        />
      </div>
      <div id="art-advisory"></div>
    </div>
  );
}
