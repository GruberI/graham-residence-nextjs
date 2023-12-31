export default function ShopAllArtHero({ pageTitle }) {
    const restructuredTitle = pageTitle.replace('-', ' ')
    return (
      <div className="relative isolate overflow-hidden sm:pt-20 pt-40">
        <img
          src="https://ipfs.filebase.io/ipfs/QmNyiZwe7aVtmozs87bwncFjb3thuWhBXptCz7Ad3gqqdq/QmQ26jkVnzcJp1YNhma5T3MKP3uiCg4CvJrv22wU2nxRsx"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
  
        <div className="mx-auto max-w-2xl py-32 sm:py-24">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
          <div className="text-center mb-24">
            <h1 className="text-5xl font-thin tracking-wide text-white sm:text-7xl animate-fadeTwo font-[cormorant]">
            {restructuredTitle}
            </h1>
          </div>
        </div>
      </div>
    );
  }
  