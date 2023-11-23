import Link from "next/link";

export default function Header() {
  return (
    <div
      className="m-auto sm:px-0 mx-8 border-t border-black pt-20 sm:pt-24 pb-12"
      id="featured"
    >
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 mb-10">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div>
            <div className="aspect-[7/5] overflow-hidden bg-black-100">
              <img
                src="https://ipfs.filebase.io/ipfs/QmWKp5TpnLHwUrvtvEASzE51Amkiyie6BmpFpw8sqjdpVR"
                alt="Kyle Steed painting in The Graham Residence living room during the day."
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="ml-5 flex flex-col content-start">
            <div className="space-y-3">
              <p className="tracking-wide leading-7 text-sm">
                <span className="font-semibold">The Graham Residence</span> was built in 2011. It sits on a spectacular
                10-acre parcel at 4,000 feet above sea level in the 320-acre
                private community of Rock Reach (within the Town of Yucca
                Valley). It is characterized by massive weathered boulders,
                ancient juniper, piñon and desert oak trees. Serenity and
                solitude are pervasive — neighbors are nearly non-existent. This
                is the Mojave Desert at its finest.{" "}
              </p>
              <p className="tracking-wide leading-7 text-sm">
                The Graham Residence is a modern glass and concrete structure
                that floats over the landscape on its unique steel frame.
                Numerous sliding glass doors invite indoor — outdoor living. It
                offers two bedrooms and one bathroom in about 1,200 square feet
                of space. It is furnished with a nod to midcentury modernist
                sensibilities.{" "}
              </p>

              <p className="tracking-wide leading-7 text-sm">
                The Jacuzzi is perched on a nearby ridge and affords incredible
                views of both the surrounding surreal landscape — but also of
                180 degree view of the sky. The stargazing is remarkable.{" "}
              </p>

              <p className="tracking-wide leading-7 text-sm">
                There are plenty of hiking opportunities on our property, and
                immediately adjacent to us on the east is government land that
                invites even more exploring.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
