"use client";
import { Slide } from "react-awesome-reveal";

export default function Header() {
  return (
    <div
      className="m-auto sm:px-0 mx-8 pt-16 sm:pt-24 pb-6 sm:pb-12"
      id="featured"
    >
      <div className="mx-auto  px-4 sm:px-6  lg:px-8 mb-10">
        <div className="grid grid-cols-1 items-center gap-x-10 gap-y-10 sm:gap-y-16 lg:grid-cols-2">
          <div>
            <div className="aspect-[8/6] overflow-hidden bg-black-100">
              <img
                src="https://ipfs.filebase.io/ipfs/QmXxDzFFdxJwH15qfzL8UFbvYwkRjhPCvZ4ptXQ9NiNx4F/QmQH3YRaFjaqw6e9EVY6iGztdDxGZnu3Q5tJEKaAi6NoTW"
                alt="Kyle Steed painting in The Graham Residence living room during the day."
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          <div className="ml-5 flex flex-col content-start">
            <div className="space-y-3">
              <Slide direction="right">
                <h3 className="text-xl sm:text-3xl mb-4">
                  It all started with The Graham Residence...
                </h3>
              </Slide>
              <p className="tracking-wide leading-7 text-base">
                Lindsey and Yoni were living in LA and found themselves craving
                space to reset out in nature. As design and nature lovers, they
                often found that they had to sacrifice one or the other in their
                travels, but The Graham Residence united both, with thoughtful
                mid-century design and sliding glass doors that showcase the
                sprawling high desert landscape.
              </p>
              <p className="tracking-wide leading-7 text-base">
                Since launching in 2017, The Graham Residence has hosted
                thousands of guests from all over the world. It has also been
                home to countless photoshoots, elopements, and events.
              </p>
              <p className="tracking-wide leading-7 text-base mt-10">
                In 2023, Lindsey launched Graham Gallery, inspired by the vision
                to create a contextual gallery space and guest experience. The
                home is curated with rotating works of art by emerging
                contemporary artists, all of which are available for
                acquisition. In 2024, Lindsey and Yoni expanded the collective
                to include a shop, selling curated goods from within the home
                that guests kept asking about.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
