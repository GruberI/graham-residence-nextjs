export default function AltHeader() {
  return (
    <div className="relative pt-48">
      <div className="mx-auto max-w-7xl lg:flex justify-start lg:justify-between lg:px-8 xl:justify-start">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <img
              className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
              src="https://ipfs.filebase.io/ipfs/QmWKp5TpnLHwUrvtvEASzE51Amkiyie6BmpFpw8sqjdpVR"
              alt=""
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="ml-5 flex flex-col content-start">
              <div className="space-y-10">
                <p className="tracking-wide leading-7">
                  The Graham Residence was built in 2011. It sits on a
                  spectacular 10-acre parcel at 4,000 feet above sea level in
                  the 320-acre private community of Rock Reach (within the Town
                  of Yucca Valley). It is characterized by massive weathered
                  boulders, ancient juniper, piñon and desert oak trees.
                  Serenity and solitude are pervasive — neighbors are nearly
                  non-existent. This is the Mojave Desert at its finest. The
                  Graham Residence is a modern glass and concrete structure that
                  floats over the landscape on its unique steel frame. Numerous
                  sliding glass doors invite indoor — outdoor living. It offers
                  two bedrooms and one bathroom in about 1,200 square feet of
                  space. It is furnished with a nod to midcentury modernist
                  sensibilities. The Jacuzzi is perched on a nearby ridge and
                  affords incredible views of both the surrounding surreal
                  landscape — but also of 180 degree view of the sky. The
                  stargazing is remarkable. There are plenty of hiking
                  opportunities on our property, and immediately adjacent to us
                  on the east is government land that invites even more
                  exploring.
                </p>
              </div>
              <div className="pt-8">
                <a
                  href={"/exhibition/kyle-steed"}
                  className="underline underline-offset-8 hover:text-neutral-600"
                >
                  Come visit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
