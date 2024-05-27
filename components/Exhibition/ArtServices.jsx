import Link from "next/link";

export default function ArtServices() {
  return (
    <div className="pt-16 sm: pt-10 m-auto max-w-7xl mt-4">
      <div>
        <h1 className="sm:text-4xl text-3xl text-center pb-6">
          Art Advisory Services
        </h1>
        <h3 className="sm:text-2xl text-xl text-center pb-10 sm:pb-10 mx-6 md:mx-20">
          Curator & Co-Founder Lindsey Goldberg provides bespoke art advisory
          services tailored for projects of any size and scope. Let’s find the
          perfect artwork for your space or project.
        </h3>
      </div>
      {/* Section 1 */}
      <div className="m-auto sm:px-0 mx-8 pb-6" id="featured">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 items-center gap-x-2 gap-y-6 sm:gap-y-16 lg:grid-cols-2">
            <div className="aspect-square overflow-hidden bg-black-100 w-[90%] h-[90%]">
              <img
                src="https://ipfs.filebase.io/ipfs/QmQ1YMea1LndtBE6WQBS8Y9NBpFjmJiorfmNu14uVNSTY1/Qmf8dtvrCjLHQrmJQ5aLiraxfz9BznfpSnJqHEmnXbm4P5"
                alt="Kyle Steed painting in The Graham Residence living room during the day."
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="ml-5 flex flex-col content-start">
              <div>
                <p className="sm:text-4xl text-3xl font-thin tracking-normal text-black-900 sm:text-4xl">
                  For Individuals
                </p>
              </div>

              <div className="mt-2 space-y-10">
                <p className="tracking-wide leading-7">
                  Lindsey will take the time to understand your unique taste,
                  space, and preferences before curating personalized options
                  and guiding you through the entire process seamlessly.
                </p>
              </div>
              <div className="pt-4 pb-4">
                <Link
                  href={`mailto:lindsey@graham-collective.com?subject=Art Services`}
                  className="underline underline-offset-8 hover:text-neutral-600 text-sm"
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
          <div className="grid grid-cols-1 items-center gap-x-2 gap-y-6 sm:gap-y-16 lg:grid-cols-2 hidden lg:inline-flex">
            <div className="ml-5 flex flex-col content-start">
              <div>
                <p className="sm:text-4xl text-3xl font-thin tracking-normal text-black-900 sm:text-4xl">
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
                  href={`mailto:lindsey@graham-collective.com?subject=Art Services for my Organization`}
                  className="underline underline-offset-8 hover:text-neutral-600 text-sm"
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
          {/*Small / Mobile view*/}

          <div className="grid grid-cols-1 items-center gap-x-2 gap-y-6 sm:gap-y-16 lg:grid-cols-2 inline-flex lg:hidden">
            <div className="aspect-square overflow-hidden bg-black-100 w-[90%] h-[90%]">
              <img
                src="https://ipfs.filebase.io/ipfs/QmYRLnrT8zADbjBXsjSqV9mA97Bw1HW6EDXonPHuMSKZ6h"
                alt="Kyle Steed painting in The Graham Residence living room during the day."
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="ml-5 flex flex-col content-start mb-10 sm:mb-0">
              <div>
                <p className="sm:text-4xl text-3xl font-thin tracking-normal text-black-900 sm:text-4xl">
                  For Organizations
                </p>
              </div>

              <div className="mt-2 space-y-10">
                <p className="tracking-wide leading-7">
                  A trusted source for interior designers, art consultants,
                  architects, and developers.
                </p>
              </div>
              <div className="pt-4 pb-4">
                <Link
                  href={`mailto:lindsey@graham-collective.com?subject=Art Services for my Organization`}
                  className="underline underline-offset-8 hover:text-neutral-600 text-sm"
                >
                  GET STARTED
                </Link>
              </div>
            </div>
          </div>
          {/* ----- */}
        </div>
      </div>
      {/* Section 3 */}
      <div className="m-auto sm:px-0 mx-8 pb-6" id="featured">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 items-center gap-x-2 gap-y-6 sm:gap-y-16 lg:grid-cols-2">
            <div className="aspect-square overflow-hidden bg-black-100 w-[90%] h-[90%]">
              <img
                src="https://ipfs.filebase.io/ipfs/QmUjUzzJEa6VB3fZHRqUSdbMGcg1kMqhYuQa619JDW2UTN/QmVpb1BPJBQSvonDcnoCCvRybgUoB788toom51D4C742D9"
                alt="Kyle Steed painting in The Graham Residence living room during the day."
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="ml-5 flex flex-col content-start">
              <div>
                <p className="sm:text-4xl text-3xl font-thin tracking-normal text-black-900 sm:text-4xl">
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
                  href={`mailto:lindsey@graham-collective.com?subject=Art Services for Trade Partners`}
                  className="underline underline-offset-8 hover:text-neutral-600 text-sm"
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
