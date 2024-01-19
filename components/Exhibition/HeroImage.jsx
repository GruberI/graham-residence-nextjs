export default function HeroImageText() {
  return (
    <div className="relative isolate overflow-hidden pt-36 py-80">
      <img
        src="https://ipfs.filebase.io/ipfs/QmNyiZwe7aVtmozs87bwncFjb3thuWhBXptCz7Ad3gqqdq/QmQ26jkVnzcJp1YNhma5T3MKP3uiCg4CvJrv22wU2nxRsx"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="mx-auto max-w-4xl mt-52">
        <div className="text-center">
          <h1 className="sm:text-7xl text-5xl leading-8 animate-fadeTwo font-light font-[cormorant] text-white">
            Graham Gallery
          </h1>
        </div>
      </div>
    </div>
  );
}
