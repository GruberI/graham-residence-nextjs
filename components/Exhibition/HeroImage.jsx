export default function HeroImageText() {
  return (
    <div className="relative isolate overflow-hidden pt-36 py-80">
      <img
        src="https://ipfs.filebase.io/ipfs/QmQVMsU16vzX41Xm7P9yaAguWtAXB4PNqmkj39NYYmSELi/QmVtrSnvo5BXogdriXLMgPafTQmbEo6irC2a8csxSKdier"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="mx-auto max-w-4xl mt-52">
        <div className="text-center">
          <h1 className="sm:text-6xl text-5xl leading-8 animate-fadeTwo font-light text-white">
            GRAHAM GALLERY
          </h1>
        </div>
      </div>
    </div>
  );
}
