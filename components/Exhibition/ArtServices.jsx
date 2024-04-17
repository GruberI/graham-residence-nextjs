import Link from "next/link";

export default function ArtServices() {
  return (
    <div className="mt-20 border-t border-black pt-20 m-auto max-w-7xl">
      <div>
        <h1 className="sm:text-5xl text-4xl text-center pb-10">
          Art Advisory Services
        </h1>
        <h3 className="sm:text-lg text-xl text-center pb-4 mx-20">
          Lindsey Goldberg provides art advisory services for projects of any
          size and scope. As your dedicated advisor, with deep industry
          expertise and a keen eye, she will help find the perfect artwork for
          any space and lifestyle.
        </h3>
      </div>
      {/* Section 1 */}
      <div className="m-auto sm:px-0 mx-8 pt-6 sm:pt-10 " id="featured">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 items-center gap-x-2 gap-y-16 lg:grid-cols-2">
            <div className="aspect-square overflow-hidden bg-black-100 w-[90%] h-[90%]">
              <img
                src="https://ipfs.filebase.io/ipfs/QmQ1YMea1LndtBE6WQBS8Y9NBpFjmJiorfmNu14uVNSTY1/Qmf8dtvrCjLHQrmJQ5aLiraxfz9BznfpSnJqHEmnXbm4P5"
                alt="Kyle Steed painting in The Graham Residence living room during the day."
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="ml-5 flex flex-col content-start">
              <div>
                <p className="text-3xl font-thin tracking-normal text-black-900 sm:text-4xl">
                  For Individuals
                </p>
              </div>

              <div className="mt-2 space-y-10">
                <p className="tracking-wide leading-7">
                  Connect with an art advisor, free to charge. Lindsey will get
                  to know your taste, space, and preferences, then curate
                  options for you and guide you through the end-to-end process.
                </p>
              </div>
              <div className="pt-4 pb-4">
                <Link
                  href={"/gallery/kyle-steed"}
                  className="underline underline-offset-8 hover:text-neutral-600 text-xs"
                >
                  GET STARTED
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <div className="m-auto sm:px-0 mx-8" id="featured">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 items-center gap-x-2 gap-y-16 lg:grid-cols-2">
            <div className="ml-5 flex flex-col content-start">
              <div>
                <p className="text-3xl font-thin tracking-normal text-black-900 sm:text-4xl">
                  For Organizations
                </p>
              </div>

              <div className="mt-2 space-y-10">
                <p className="tracking-wide leading-7">
                  Artwork completes a space. It fosters culture and connection.
                  The Graham Collective curates original artworks for
                  workspaces, hospitality, retail, and healthcare projects.
                </p>
              </div>
              <div className="pt-4 pb-4">
                <Link
                  href={"/gallery/kyle-steed"}
                  className="underline underline-offset-8 hover:text-neutral-600 text-xs"
                >
                  GET STARTED
                </Link>
              </div>
            </div>
            <div className="aspect-square overflow-hidden bg-black-100 w-[90%] h-[90%]">
              <img
                src="https://ipfs.filebase.io/ipfs/QmYRLnrT8zADbjBXsjSqV9mA97Bw1HW6EDXonPHuMSKZ6h"
                alt="Kyle Steed painting in The Graham Residence living room during the day."
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Section 3 */}
      <div className="m-auto sm:px-0 mx-8 pb-6" id="featured">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 items-center gap-x-2 gap-y-16 lg:grid-cols-2">
            <div className="aspect-square overflow-hidden bg-black-100 w-[90%] h-[90%]">
              <img
                src="https://ipfs.filebase.io/ipfs/QmUjUzzJEa6VB3fZHRqUSdbMGcg1kMqhYuQa619JDW2UTN/QmVpb1BPJBQSvonDcnoCCvRybgUoB788toom51D4C742D9"
                alt="Kyle Steed painting in The Graham Residence living room during the day."
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="ml-5 flex flex-col content-start">
              <div>
                <p className="text-3xl font-thin tracking-normal text-black-900 sm:text-4xl">
                  For Trade Partners
                </p>
              </div>

              <div className="mt-2 space-y-10">
                <p className="tracking-wide leading-7">
                  A trusted source for interior designers, architects, and
                  developers. We partner with you to source original and custom
                  artworks to complete your projects from the best in emerging
                  contemporary artists.
                </p>
              </div>
              <div className="pt-4 pb-4">
                <Link
                  href={"/gallery/kyle-steed"}
                  className="underline underline-offset-8 hover:text-neutral-600 text-xs"
                >
                  GET STARTED
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
