export default function HeroImage() {
  return (
    <div>
      <div className="relative isolate pt-14 h-screen w-screen overflow-hidden">
        <img
          src="https://ipfs.filebase.io/ipfs/QmSqxCjc9XPjGpGqjabtNG7RNBodEn9ivXaSWXqhUuxFmh/QmeXsmv4nMF6WvguaWH99tdHJdNCkY3SehXg974QWMdwEy"
          alt=""
          className="absolute inset-0 -z-10 h-full w-screen object-cover"
        />
        {/* Quote
        <div className="mx-auto max-w-2xl py-30 sm:py-40 lg:py-50">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          </div>
          <div className="text-center mb-10">
            <h1 className="text-4xl font-normal tracking-tight text-white sm:text-6xl animate-fade">
              Curation is about intentionality
            </h1>
          </div>
        </div> */}
      </div>
    </div>
  )
}
