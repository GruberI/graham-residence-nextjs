export default async function OneImage({ imgSrc }) {
  return (
    <div className="mx-auto">
      <div className="sm:h-screen w-full py-10">
        <img
          src={imgSrc}
          alt="arial shot of property with winding road"
          className="p-2 h-full w-full object-cover"
        />
      </div>
      <div id="art-advisory"></div>
    </div>
  );
}
