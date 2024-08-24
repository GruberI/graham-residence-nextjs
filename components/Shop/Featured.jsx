import Link from "next/link";

export default function Featured() {
  return (
    <div
      className="mx-auto sm:px-0 mx-4 border-t border-b border-black pt-10 sm:pt-24 pb-10 sm:pb-20 max-w-7xl"
      id="featured"
    >
      <div className="mx-auto px-2 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-4 sm:gap-x-8 gap-y-8 sm:gap-y-16 lg:grid-cols-2">
          <div>
          <Link href="/gallery/tdwhy">
            <div className="aspect-square overflow-hidden bg-black-100">
              <img
                src="https://alexmaceda.nyc3.cdn.digitaloceanspaces.com/AlexMaceda/0080__DSC2633w2.jpg"
                alt="Alex Maceda"
                className="h-full w-full object-cover object-center"
              />
            </div>
            </Link>
          </div>
          <div className="sm:ml-5  flex flex-col content-start mx-4 sm:mx-0">
            <div className="border-b border-black pb-6">
              <p className="text-2xl text-black-500">FEATURED ARTIST</p>
              <Link href="/gallery/tdwhy">
                <h2 className="mt-2 font-thin tracking-tight text-black-900 sm:text-2xl text-lg">
                Alex Maceda
              </h2>
              </Link>
            </div>

            <div className="mt-6 sm:mt-10 space-y-10">
              <p className="text-xl">
              Alex Maceda (b. 1988) is a Filipina-American artist and writer living 
              and working between Joshua Tree, California and New York City. 
              Her energetic painting and lyrical writing explore the medial spaces 
              between waking and dreaming, reality and imagination, literal and abstract. 
              She is particularly inspired by the human condition and the feminine experience, 
              as well as esoteric, shamanic, and spiritual themes.
              </p>
            </div>
            <div className="sm:pt-8 pt-4 pb-4">
              <Link
                href={"/gallery/tdwhy"}
                className="underline underline-offset-8 hover:text-neutral-600 text-sm"
              >
                SIGN UP FOR A COLLECTOR PREVIEW
              </Link>
            </div> 

          </div>
        </div>
      </div>
    </div>
  );
}
