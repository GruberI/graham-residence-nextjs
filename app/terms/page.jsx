import Terms from "@/components/Terms&Privacy/Terms";

export default function TermsConditions() {
  return (
    <div className="relative bg-white h-screen overflow-x-hidden">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <img
              className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
              src="https://siteimagery.nyc3.cdn.digitaloceanspaces.com/Terms/001.jpgh"
              alt="books"
            />
          </div>
        </div>
        <div className="px-2 lg:contents lg:mt-20 sm:mt-10">
          <div className="mx-auto max-w-3xl sm:pb-32 lg:pt-16 sm:pt-6 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            <p className="text-base font-semibold leading-7 text-[#9c4f1f]">
              The Graham Collective
            </p>
            <h1 className="my-2 pb-2 text-3xl font-thin tracking-tight text-gray-900 sm:text-4xl">
              Terms & Conditions
            </h1>
            <Terms />
          </div>
        </div>
      </div>
    </div>
  );
}
