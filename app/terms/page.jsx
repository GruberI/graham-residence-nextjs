export default function Terms() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <img
              className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
              src="https://ipfs.filebase.io/ipfs/QmV4sFB6rCVrjyofcPiU7FgWsh6HPth5yBdjPTdh7rgTPu/QmUtaJJtknkRpsNKJfJyYkjKyFahqZ1eQhm1J8xKyg2z8h"
              alt="book shelf in living room corner of the graham residence"
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-3xl sm:pb-32 lg:pt-18 sm:pt-6 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            <p className="text-base font-semibold leading-7 text-[#9c4f1f]">
              The Graham Residence
            </p>
            <h1 className="mt-2 text-3xl font-thin tracking-tight text-gray-900 sm:text-4xl">
              Terms & Conditions
            </h1>
            <div className="mt-6 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
              <p>
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                Id dolor praesent donec est. Odio penatibus risus viverra tellus
                varius sit neque erat velit. Faucibus commodo massa rhoncus,
                volutpat. Dignissim sed eget risus enim. Mattis mauris semper
                sed amet vitae sed turpis id.
              </p>
              <ul role="list" className="mt-3 space-y-3 text-gray-600">
                <li className="flex gap-x-1">
                  <span>
                    <strong className="font-medium text-gray-900">
                      Push to deploy.
                    </strong>{" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </span>
                </li>
                <li className="flex gap-x-1">
                  <span>
                    <strong className="font-medium text-gray-900">
                      SSL certificates.
                    </strong>{" "}
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo.
                  </span>
                </li>
                <li className="flex gap-x-1">
                  <span>
                    <strong className="font-medium text-gray-900">
                      Database backups.
                    </strong>{" "}
                    Ac tincidunt sapien vehicula erat auctor pellentesque
                    rhoncus. Et magna sit morbi lobortis.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
