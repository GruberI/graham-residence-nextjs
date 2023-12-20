export default function ShopAllArtHeader({ pageTitle }) {
  const restructuredTitle = pageTitle.replace('-', ' ')
    return (
      <div className="bg-white px-6 pt-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-black font-thin tracking-wide sm:text-6xl text-4xl capitalize">{restructuredTitle}</h2>
        </div>
      </div>
    );
  }
  