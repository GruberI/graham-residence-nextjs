import Link from "next/link";
export default function TwoImageGrid() {
  return (
    <div className="w-screen sm:px-0 lg:px-0 py-6">
      <div className="bg-white">
        <div className="mx-auto max-w-1xl py-8 sm:py-26 lg:max-w-7xl lg:px-0 sm:px-10">
          <div className="grid grid-cols-1 items-center gap-x-10 gap-y-16 sm:grid-cols-2">
            <Link href={"/product/dos-donts"}>
              <div className="aspect-[7/5] overflow-hidden bg-black-100">
                <img
                  src="https://ipfs.filebase.io/ipfs/QmQdoTPfZoTxpVxAcn1s6HhU1CpwUv9PsZwaP3kz2JMuiL"
                  alt="Acrylic painting called Dos and Donts by Kyle Steed."
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h2 className="pt-6">Do's & Don'ts</h2>
            </Link>

            <Link href={"/product/manhood-by-kyle-steed"}>
              <div className="aspect-[7/5] overflow-hidden">
                <img
                  src="https://ipfs.filebase.io/ipfs/QmQNosX6WjSFEcNGLFonBPXFwmV9psowsJQTmyvSgvP9hZ"
                  alt="Acrylic painting called Manhood by Kyle Steed."
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h2 className="pt-6">Manhood</h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
