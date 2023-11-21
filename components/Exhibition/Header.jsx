export default function Header() {
    return (
      <div className="bg-white py-26 lg:px-6 sm:px-2 sm:pt-20 pt-48">
      {/* <div className="bg-black h-20 w-screen inset-x-0 top-0 absolute z-10"></div> */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-semibold sm:text-6xl text-4xl tracking-widest sm:mt-6 mb-4">A Quiet Noise</h1>
          <p className="pb-6">by Kyle Steed</p>
          <p className="text-xs m-auto font-semibold">EXHIBITION BY THE GRAHAM RESIDENCE</p>
        </div>
      </div>
    );
  }